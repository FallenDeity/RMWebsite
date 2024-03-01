"use client";

import { useTheme } from "next-themes";
import React from "react";

import { SparklesCore } from "@/components/ui/sparkles";
import { AntaFont } from "@/lib/font";

export default function SparklesPreview(): React.JSX.Element {
	const { resolvedTheme } = useTheme();
	return (
		<div className="-z-10 flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md">
			<h1
				className={`{relative text-center text-5xl text-foreground sm:text-6xl md:text-8xl ${AntaFont.className}`}>
				RoboManipal
			</h1>
			<div className="relative h-40 w-[40rem]">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-slate-600 to-transparent blur-sm dark:from-transparent dark:via-indigo-500 dark:to-transparent" />
				<div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-slate-600 to-transparent dark:from-transparent dark:via-indigo-500 dark:to-transparent" />
				<div className="via-sinc-500 absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent to-transparent blur-sm dark:from-transparent dark:via-sky-500 dark:to-transparent" />
				<div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-gray-500 to-transparent dark:from-transparent dark:via-sky-500 dark:to-transparent" />

				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="h-full w-full"
					particleColor={resolvedTheme === "dark" ? "#7f9cf5" : "#fff"}
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
			</div>
		</div>
	);
}
