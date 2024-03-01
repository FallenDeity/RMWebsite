"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

import { resize, setup } from "@/lib/hills";

export default function BgEffect(): React.JSX.Element {
	const [setupEffect, setSetupEffect] = React.useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) return;
		setup(resolvedTheme);
	}, [resolvedTheme]);

	useEffect(() => {
		if (setupEffect) return;
		if (typeof window === "undefined") return;
		setSetupEffect(true);
		window.addEventListener("resize", () => {
			resize();
		});
		return () => {
			window.removeEventListener("resize", () => {
				resize();
			});
		};
	}, [setupEffect]);

	return (
		<>
			<div className="content--canvas pointer-events-none h-full w-full overflow-hidden" />
		</>
	);
}
