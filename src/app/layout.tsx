import "@/styles/globals.css";

import { Inter } from "next/font/google";
import React from "react";

import AppProvider from "@/components/AppProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html className="scroll-smooth" lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
