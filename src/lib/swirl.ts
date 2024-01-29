/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import SimplexNoise from "simplex-noise";

let theme: string;
let _setup = false;
const { PI, cos, sin, abs, random } = Math;
const TAU = 2 * PI;
const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
const rand = (n: number): number => n * random();
const randRange = (n: number): number => n - rand(2 * n);
const fadeInOut = (t: number, m: number): number => (abs(((t + 0.5 * m) % m) - 0.5 * m) / 0.5) * m;
const lerp = (n1: number, n2: number, speed: number): number => (1 - speed) * n1 + speed * n2;

let container;
let canvas: { a: HTMLCanvasElement; b: HTMLCanvasElement };
let ctx: { a: CanvasRenderingContext2D; b: CanvasRenderingContext2D };
let center: number[];
let tick: number;
let simplex: SimplexNoise;
let particleProps: Float32Array;

export function setup(_theme: string): void {
	theme = _theme;
	const container = document.querySelector(".content--canvas") as HTMLDivElement;
	if (_setup) {
		container.childNodes.length > 0 && container.removeChild(container.childNodes[0]);
		container.appendChild(canvas.b);
		return;
	}
	createCanvas();
	resize();
	initParticles();
	draw();
	_setup = true;
}

function initParticles(): void {
	tick = 0;
	simplex = new SimplexNoise();
	particleProps = new Float32Array(particlePropsLength);
	let i;
	for (i = 0; i < particlePropsLength; i += particlePropCount) {
		initParticle(i);
	}
}

function initParticle(i: number): void {
	const _hue = theme === "dark" ? 200 : 240;
	const _rangeHue = theme === "dark" ? 120 : 100;
	const x = rand(canvas.a.width);
	const y = center[1] + randRange(rangeY);
	const vx = 0;
	const vy = 0;
	const life = 0;
	const ttl = baseTTL + rand(rangeTTL);
	const speed = baseSpeed + rand(rangeSpeed);
	const radius = baseRadius + rand(rangeRadius);
	const hue = _hue + rand(_rangeHue);
	particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function drawParticles(): void {
	let i;
	for (i = 0; i < particlePropsLength; i += particlePropCount) {
		updateParticle(i);
	}
}

function updateParticle(i: number): void {
	const i2 = 1 + i,
		i3 = 2 + i,
		i4 = 3 + i,
		i5 = 4 + i,
		i6 = 5 + i,
		i7 = 6 + i,
		i8 = 7 + i,
		i9 = 8 + i;
	const x = particleProps[i];
	const y = particleProps[i2];
	const n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
	const vx = lerp(particleProps[i3], cos(n), 0.5);
	const vy = lerp(particleProps[i4], sin(n), 0.5);
	let life = particleProps[i5];
	const ttl = particleProps[i6];
	const speed = particleProps[i7];
	const x2 = x + vx * speed;
	const y2 = y + vy * speed;
	const radius = particleProps[i8];
	const hue = particleProps[i9];

	drawParticle(x, y, x2, y2, life, ttl, radius, hue);

	life++;

	particleProps[i] = x2;
	particleProps[i2] = y2;
	particleProps[i3] = vx;
	particleProps[i4] = vy;
	particleProps[i5] = life;

	(checkBounds(x, y) || life > ttl) && initParticle(i);
}

function drawParticle(
	x: number,
	y: number,
	x2: number,
	y2: number,
	life: number,
	ttl: number,
	radius: number,
	hue: number
): void {
	ctx.a.save();
	ctx.a.lineCap = "round";
	ctx.a.lineWidth = radius;
	ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
	ctx.a.beginPath();
	ctx.a.moveTo(x, y);
	ctx.a.lineTo(x2, y2);
	ctx.a.stroke();
	ctx.a.closePath();
	ctx.a.restore();
}

function checkBounds(x: number, y: number): boolean {
	return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0;
}

function createCanvas(): void {
	container = document.querySelector(".content--canvas");
	if (!container) {
		throw new Error("No container found");
	}
	canvas = {
		a: document.createElement("canvas"),
		b: document.createElement("canvas"),
	};
	// @ts-expect-error style is a readonly property
	canvas.b.style = `
		z-index: -1;
		position: absolute;
	`;
	container.childNodes.length > 0 && container.removeChild(container.childNodes[0]);
	container.appendChild(canvas.b);
	ctx = {
		a: canvas.a.getContext("2d") as CanvasRenderingContext2D,
		b: canvas.b.getContext("2d") as CanvasRenderingContext2D,
	};
	center = [];
}

export function resize(): void {
	const { innerWidth, innerHeight } = window;

	canvas.a.width = innerWidth;
	canvas.a.height = innerHeight;

	ctx.a.drawImage(canvas.b, 0, 0);

	canvas.b.width = innerWidth;
	canvas.b.height = innerHeight;

	ctx.b.drawImage(canvas.a, 0, 0);

	center[0] = 0.5 * canvas.a.width;
	center[1] = 0.5 * canvas.a.height;
}

function renderGlow(): void {
	ctx.b.save();
	ctx.b.filter = theme === "dark" ? "blur(8px) brightness(200%)" : "blur(4px) brightness(100%)";
	ctx.b.globalCompositeOperation = "lighter";
	ctx.b.drawImage(canvas.a, 0, 0);
	ctx.b.restore();

	ctx.b.save();
	ctx.b.filter = theme === "dark" ? "blur(4px) brightness(200%)" : "blur(2px) brightness(100%)";
	ctx.b.globalCompositeOperation = "lighter";
	ctx.b.drawImage(canvas.a, 0, 0);
	ctx.b.restore();
}

function renderToScreen(): void {
	ctx.b.save();
	ctx.b.globalCompositeOperation = "lighter";
	ctx.b.drawImage(canvas.a, 0, 0);
	ctx.b.restore();
}

function draw(): void {
	tick++;

	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

	if (theme === "dark") {
		ctx.b.fillStyle = "hsla(224,71.4%,4.1%,1)";
		ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);
	} else {
		ctx.b.clearRect(0, 0, canvas.a.width, canvas.a.height);
	}

	drawParticles();
	renderGlow();
	renderToScreen();

	window.requestAnimationFrame(draw);
}
