"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

import useWork from "@/lib/hooks/useWorks";
import { Work } from "@/lib/models";
import { fadeIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";
import WorkCard from "./WorkCard";

export function WorkData(): React.ReactElement {
	const works = useWork();
	const [status, setStatus] = React.useState<Record<string, Work[]>>({});

	useEffect(() => {
		if (works.length > 0) {
			const status: Record<string, Work[]> = {};
			works.forEach((work) => {
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				if (!status[work.status]) status[work.status] = [];
				status[work.status].push(work);
			});
			setStatus(status);
		}
	}, [works]);

	return (
		<div className="mt-32 flex min-h-screen w-full flex-col items-center justify-center">
			{Object.keys(status).map((key) => (
				<>
					<motion.div
						className="flex w-full flex-col items-center justify-center"
						variants={textVariant()}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}>
						<h2 className="text-[30px] font-black uppercase text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
							{key}
						</h2>
						<p className="tracking-pretty hidden text-balance text-center text-foreground/60 sm:flex sm:text-[18px]">
							Vero tation clita et dolor vero erat dolore et et labore gubergren clita nostrud ad aliquyam
							vel invidunt invidunt. Ea nulla quis at feugait lorem est iriure enim stet amet et ipsum eos
							nulla dignissim eu augue rebum. In eu stet ex vero aliquyam rebum.
						</p>
					</motion.div>
					<div className="my-16 flex flex-wrap items-center justify-center gap-16">
						{status[key].map((work) => (
							<motion.div
								variants={fadeIn("up", "spring", 0.2, 0.65)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}>
								<WorkCard work={work} />
							</motion.div>
						))}
					</div>
				</>
			))}
		</div>
	);
}

export default SectionWrapper(WorkData, "Work");
