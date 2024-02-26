import { Icon } from "lucide-react";
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
	electronics: `You can involve yourself in electronics, computers, puzzles... there's a lot of creativity and brain working. There's a lot to model trains that people don't realize.\n
	The electronics subsystem is the central system to function the robot. We work on rapid PCB prototyping to interfacing a wide range of sensors to DAQ. From choosing the right components to design specificized pieces, we specialize in all. To exclude off-the-shelf electronics to make the bot specific, the study is carried out to develop, simulate and validate circuits.`,
	mechanical: `No TECH without MECH.\n
	Mechanical work comprises of designing and manufacturing of the robot. Our team works on 3D modeling, actuator design, real-time constraint simulation, and robust design for robots' efficient functioning. Different CAD models are developed for other mechanisms and experiments, including real-time testing, simulation, and analysis.`,
	coding: `Everybody should learn to program a computer because it teaches you how to think.\n
	Programming is an essential part when it comes to handling robots. Our coding subsystem links the electronics and mechanical work in coordination, from programming microcontroller microcontrollers and processors, interfacing electronics and mechanics, neural networks, and deep learning to computer vision and sensing. They work on the design and semi/complete automation of processes for reliable control systems.`,
	management: `Management is, above all, a practice where art, science, and craft meet.\n
	Management subsystem deals with finances and sponsorship, advertisement, and graphics. Our team works for the competent functioning of the whole student project maintaining harmony amongst all the subsystems. Public relations and human resources are also a part of our responsibilities. Operations, business management, strategic planning, and web/app development are our specializations.`,
	research: `There is an endless number of things to discover about robotics. A lot of it is just too fantastic for people to believe.\n
	Advanced Robotics Research is the novel subsystem of our student project. The subsystem deals with conceptualizations of robotics with other advanced technologies. We work on the research and development of this vast art of building and working robots. ARR is the new way to unveil the skillset of our team and challenge the minds of innovation."`,
};
