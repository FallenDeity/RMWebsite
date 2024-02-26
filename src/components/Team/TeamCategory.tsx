"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { subsystemText } from "@/lib/constants";
import { TeamMember } from "@/lib/models";
import { textVariant } from "@/lib/motion";

import TeamCard from "./TeamCard";

const SubSystemSection = ({ subsystem, details }: { subsystem: string; details: TeamMember[] }): React.JSX.Element => {
	const members = useMemo(
		() => details.filter((member) => member.subsystem === subsystem && member.role.toLowerCase() === "member"),
		[details, subsystem]
	);
	return (
		<>
			{members.length === 0 ? null : (
				<>
					<motion.div
						className="flex w-full flex-col items-center justify-center"
						variants={textVariant()}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}>
						<h2 className="text-[30px] font-black uppercase text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
							{subsystem}
						</h2>
						<span className="tracking-pretty hidden text-center font-bold text-foreground/80 sm:flex sm:text-[19px]">
							"{subsystemText[subsystem.toLowerCase()].split("\n")[0]}"
						</span>
						<p className="tracking-pretty mt-2 hidden text-balance text-center text-foreground/60 sm:flex sm:text-[18px]">
							{
								subsystemText[subsystem.toLowerCase()].split("\n")[
									subsystemText[subsystem.toLowerCase()].split("\n").length - 1
								]
							}
						</p>
					</motion.div>
					<div className="my-16 flex flex-wrap items-center justify-center gap-16">
						{members.map((member) => (
							<TeamCard member={member} />
						))}
					</div>
				</>
			)}
		</>
	);
};

const HeadDetails = ({ details }: { details: TeamMember[] }): React.JSX.Element => {
	const managers = useMemo(() => details.filter((member) => member.role.toLowerCase().includes("team")), [details]);
	const heads = useMemo(() => details.filter((member) => member.role.toLowerCase().includes("head")), [details]);

	return (
		<>
			<motion.div
				className="flex w-full flex-col items-center justify-center"
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<h2 className="text-[30px] font-black uppercase text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Team Heads
				</h2>
				<span className="tracking-pretty hidden text-center font-bold text-foreground/80 sm:flex sm:text-[19px]">
					"At the forefront of Robomanipal's robotics team stand our dedicated heads, driving our collective
					efforts forward with unwavering commitment and expertise."
				</span>
				<p className="tracking-pretty mt-2 hidden text-balance text-center text-[12px] text-foreground/60 sm:flex sm:text-[18px]">
					At the forefront of Robomanipal's robotics team stand our dedicated heads, driving our collective
					efforts forward with unwavering commitment and expertise. With their expertise and commitment, they
					inspire us to pursue innovation and excellence in every project. Under their guidance, we navigate
					the intricate challenges of robotics with confidence, charting a course toward success in our field.
				</p>
			</motion.div>
			<div className="my-16 flex flex-wrap items-center justify-center gap-16">
				{managers.map((member) => (
					<TeamCard member={member} />
				))}
			</div>
			<div className="mb-16 flex flex-wrap items-center justify-center gap-16">
				{heads.map((member) => (
					<TeamCard member={member} />
				))}
			</div>
		</>
	);
};

export default function TeamCategory({ details }: { details: TeamMember[] }): React.ReactElement {
	const subsystems = useMemo(() => {
		const subsystems = new Set<string>();
		details.forEach((member) => {
			subsystems.add(member.subsystem);
		});
		return Array.from(subsystems);
	}, [details]);

	return (
		<>
			<HeadDetails details={details} />
			{subsystems.map((subsystem) => (
				<SubSystemSection subsystem={subsystem} details={details} />
			))}
		</>
	);
}
