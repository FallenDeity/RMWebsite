import { Icon } from "lucide-react";
import { Metadata } from "next";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoIosPodium } from "react-icons/io";
import { RiGalleryFill, RiTeamFill } from "react-icons/ri";

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

export const subsystemText: Record<string, string> = {
	electronics: `Empowering robots with precision through tailored electronics and validated circuits.\n
	The electronics subsystem is the central system to function the robot. We work on rapid PCB prototyping to interfacing a wide range of sensors to DAQ. From choosing the right components to design specificized pieces, we specialize in all. To exclude off-the-shelf electronics to make the bot specific, the study is carried out to develop, simulate and validate circuits.`,
	mechanical: `Precision in motion: Our mechanical prowess shapes robotic innovation from design to fabrication.\n
	Mechanical work comprises of designing and manufacturing of the robot. Our team works on 3D modeling, actuator design, real-time constraint simulation, and robust design for robots' efficient functioning. Different CAD models are developed for other mechanisms and experiments, including real-time testing, simulation, and analysis.`,
	coding: `Driving intelligence into action, our code orchestrates the dance of our robotic creations.\n
	Programming is an essential part when it comes to handling robots. Our coding subsystem links the electronics and mechanical work in coordination, from programming microcontroller microcontrollers and processors, interfacing electronics and mechanics, neural networks, and deep learning to computer vision and sensing. They work on the design and semi/complete automation of processes for reliable control systems.`,
	management: `Management takes the reins, orchestrating seamless coordination and fostering a thriving community.\n
	Management subsystem deals with finances and sponsorship, advertisement, and graphics. Our team works for the competent functioning of the whole student project maintaining harmony amongst all the subsystems. Public relations and human resources are also a part of our responsibilities. Operations, business management, strategic planning, and web/app development are our specializations.`,
	research: `At the core of our endeavors, research propels us forward, uncovering new frontiers and advancing innovation.\n
	Advanced Robotics Research is the novel subsystem of our student project. The subsystem deals with conceptualizations of robotics with other advanced technologies. We work on the research and development of this vast art of building and working robots. ARR is the new way to unveil the skillset of our team and challenge the minds of innovation."`,
};

export const meta: Metadata = {
	title: "RoboManipal",
	metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
	description:
		"Driving innovation in robotics. We design, build, and program advanced systems, fostering understanding of mechanics and software, promoting teamwork, and pushing technological boundaries.",
	keywords: [
		"RoboManipal",
		"Robotics",
		"Manipal",
		"Engineering",
		"Technology",
		"Robotics Club",
		"Manipal University",
		"Manipal Institute of Technology",
		"MIT",
		"Mechanical Engineering",
		"Electronics",
		"Programming",
	],
	authors: [{ name: "FallenDeity" }],
	robots: {
		follow: true,
		index: true,
		nocache: true,
	},
	openGraph: {
		url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
		title: "RoboManipal",
		description:
			"Driving innovation in robotics. We design, build, and program advanced systems, fostering understanding of mechanics and software, promoting teamwork, and pushing technological boundaries.",
		type: "website",
	},
	twitter: {
		images: "/logo.png",
		card: "summary",
	},
	themeColor: "#94a3b8",
};
