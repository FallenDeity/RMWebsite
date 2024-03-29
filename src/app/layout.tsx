import "@/styles/globals.css";

import { Inter } from "next/font/google";
import React from "react";

import AppProvider from "@/components/AppProvider";
import { meta } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html className="overflow-x-hidden scroll-smooth" lang="en">
			<body className={`${inter.className} scrollbar-custom relative overflow-x-hidden`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
