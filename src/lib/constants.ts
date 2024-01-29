import { Icon } from "lucide-react";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoIosPodium } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { RiGalleryFill } from "react-icons/ri";

interface NavLinkItem {
	label: string;
	route: string;
	icon: Icon;
	color: string;
	items?: NavLinkItem[];
}

export const navLinks: NavLinkItem[] = [
	{
		label: "Work",
		route: "/work",
		icon: HiMiniWrenchScrewdriver,
		color: "text-primary",
	},
	{
		label: "Competitions",
		route: "/competitions",
		icon: IoIosPodium,
		color: "text-primary",
	},
	{
		label: "Team",
		route: "/team",
		icon: RiTeamFill,
		color: "text-primary",
	},
	{
		label: "Gallery",
		route: "/gallery",
		icon: RiGalleryFill,
		color: "text-primary",
	},
];
