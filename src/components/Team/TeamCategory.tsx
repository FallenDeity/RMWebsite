"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

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
						<p className="tracking-pretty hidden text-balance text-center text-foreground/60 sm:flex sm:text-[18px]">
							Vero tation clita et dolor vero erat dolore et et labore gubergren clita nostrud ad aliquyam
							vel invidunt invidunt. Ea nulla quis at feugait lorem est iriure enim stet amet et ipsum eos
							nulla dignissim eu augue rebum. In eu stet ex vero aliquyam rebum.
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
					Heads
				</h2>
				<p className="tracking-pretty hidden text-balance text-center text-[12px] text-foreground/60 sm:flex sm:text-[18px]">
					Vero tation clita et dolor vero erat dolore et et labore gubergren clita nostrud ad aliquyam vel
					invidunt invidunt. Ea nulla quis at feugait lorem est iriure enim stet amet et ipsum eos nulla
					dignissim eu augue rebum. In eu stet ex vero aliquyam rebum.
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
