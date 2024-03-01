import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const RobotoFont = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const AntaFont = localFont({
	src: [
		{
			path: "../fonts/Anta.ttf",
			weight: "300",
		},
		{
			path: "../fonts/Anta.ttf",
			weight: "400",
		},
		{
			path: "../fonts/Anta.ttf",
			weight: "700",
		},
	],
});
