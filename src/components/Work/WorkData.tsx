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
				<div className="flex h-full w-full flex-col items-center justify-center">
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
							We are committed to pushing the boundaries of technology through ongoing research and
							development initiatives. Our team of experts is dedicated to exploring innovative solutions
							to address real-world challenges. Currently, we are actively engaged in the following
							research projects:
						</p>
					</motion.div>
					<div className="my-16 grid w-full max-w-7xl auto-cols-[20rem] grid-flow-col gap-20 overflow-x-auto overflow-y-hidden px-4 scrollbar-hide sm:auto-cols-[25rem]">
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
				</div>
			))}
		</div>
	);
}

export default SectionWrapper(WorkData, "Work");
