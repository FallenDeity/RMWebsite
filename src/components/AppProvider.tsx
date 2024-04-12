"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import React from "react";
import { RecoilRoot } from "recoil";

export default function AppProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
	// defaultTheme="dark" forcedTheme="dark" enableSystem={false}
	return (
		<RecoilRoot>
			<ThemeProvider attribute={"class"}>
				{children}
				<Analytics />
				<SpeedInsights />
			</ThemeProvider>
		</RecoilRoot>
	);
}
