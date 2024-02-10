"use client";

import "@/styles/timeline.css";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import useExperience from "@/lib/hooks/useExperience";
import { Experience as ExperienceModel } from "@/lib/models";
import { textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

const ExperienceCard = ({ experience }: { experience: ExperienceModel }): React.JSX.Element => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				background: "hsl(var(--accent) / 60%)",
				color: "hsl(var(--accent-forground))",
			}}
			contentArrowStyle={{ borderRight: "7px solid  hsl(var(--accent) / 60%)" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex h-full w-full items-center justify-center p-1.5">
					<Image
						width={64}
						height={64}
						src={experience.icon as string}
						alt={experience.competition}
						className="h-full w-full object-contain"
					/>
				</div>
			}>
			<div>
				<h3 className="vertical-timeline-element-title text-[24px] font-bold">{experience.title}</h3>
				<span
					className="vertical-timeline-element-subtitle text-pretty text-[14px] tracking-wide text-accent-foreground/60"
					style={{ margin: 0 }}>
					{experience.competition}
				</span>
			</div>
			<ul className="ml-2 mt-5 list-disc space-y-2 sm:ml-5">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="pl-1 text-[13px] tracking-wider text-accent-foreground/80 sm:text-[14px]">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = (): React.JSX.Element => {
	const experiences = useExperience();
	const [cards, setCards] = React.useState<number>(2);
	React.useEffect(() => {
		const hidden = document.querySelectorAll(".is-hidden");
		const ob = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("is-hidden");
					entry.target.classList.add("bounce-in");
					ob.unobserve(entry.target);
				}
			});
		});
		hidden.forEach((item) => {
			ob.observe(item);
		});
	}, [cards, experiences]);

	return (
		<>
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="mt-16 text-center">
				<p className="text-[14px] uppercase tracking-wider text-foreground/80 sm:text-[18px]">
					What we've been up to
				</p>
				<h2 className="text-[30px] font-black text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Competitions
				</h2>
			</motion.div>
			{experiences.length > 0 && (
				<div className="mt-20 flex flex-col">
					<VerticalTimeline className="h-full w-full">
						{experiences.slice(0, cards).map((experience, index) => (
							<ExperienceCard key={`experience-${index}`} experience={experience} />
						))}
						{cards < experiences.length && (
							<VerticalTimelineElement
								className="vertical-timeline-element--work cursor-pointer"
								iconStyle={{
									background: "hsl(var(--secondary))",
									color: "hsl(var(--secondary-forground))",
								}}
								icon={<BsPlusLg className="transition-all duration-300 ease-in-out hover:scale-150" />}
								iconOnClick={(): void => setCards(Math.min(cards + 2, experiences.length))}
							/>
						)}
					</VerticalTimeline>
				</div>
			)}
		</>
	);
};

export default SectionWrapper(Experience, "competitions");
