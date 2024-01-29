"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

import { resize, setup } from "@/lib/hills";
import { resize as lresize, setup as lsetup } from "@/lib/swirl";

export default function BgEffect(): React.JSX.Element {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) return;
		if (resolvedTheme === "dark") lsetup(resolvedTheme);
		else setup(resolvedTheme);
	}, [resolvedTheme]);

	useEffect(() => {
		if (!resolvedTheme) return;
		if (typeof window === "undefined") return;
		window.addEventListener("resize", () => {
			if (resolvedTheme === "dark") lresize();
			else resize();
		});
		return () => {
			window.removeEventListener("resize", () => {
				if (resolvedTheme === "dark") lresize();
				else resize();
			});
		};
	}, [resolvedTheme]);

	return (
		<>
			<div className="content--canvas pointer-events-none h-full w-full overflow-hidden" />
		</>
	);
}
