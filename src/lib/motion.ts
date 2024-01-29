import { Variants } from "framer-motion";

type direction = "left" | "right" | "up" | "down" | "";
type _type = "spring" | "tween" | "inertia" | "";

export const textVariant = (type?: _type, delay?: number): Variants => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: type ?? "spring",
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

export const fadeIn = (direction?: direction, type?: _type, delay?: number, duration?: number): Variants => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				velocity: type === "inertia" ? 100 : 0,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const zoomIn = (delay?: number, duration?: number): Variants => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = (direction?: direction, type?: _type, delay?: number, duration?: number): Variants => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				velocity: type === "inertia" ? 100 : 0,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideOut = (direction?: direction, type?: _type, delay?: number, duration?: number): Variants => {
	return {
		hidden: {
			x: 0,
			y: 0,
		},
		show: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
			transition: {
				type: type,
				velocity: type === "inertia" ? 100 : 0,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren ?? 0,
			},
		},
	};
};
