"use client";

import { useTheme } from "next-themes";
import React from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

import { Button } from "./ui/button";

export default function ThemeToggleButton(): React.JSX.Element {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	const isDark = currentTheme === "dark";
	return (
		<Button
			className="flex h-8 w-8 items-center justify-center rounded p-1.5 sm:h-10 sm:w-10 md:p-2"
			onClick={(): void => setTheme(isDark ? "light" : "dark")}>
			{isDark ? <RiSunFill className="h-full w-full" /> : <RiMoonClearFill className="h-full w-full" />}
		</Button>
	);
}
