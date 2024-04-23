"use client";

import { motion } from "framer-motion";
import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { slideIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

export function FAQ(): React.JSX.Element {
	return (
		<>
			<motion.div
				className="flex w-full flex-col items-center justify-center"
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<p className="text-[14px] uppercase tracking-wider text-foreground/80 sm:text-[18px]">FAQ</p>
				<h2 className="text-[30px] font-black text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Questions
				</h2>
			</motion.div>
			<motion.div
				className="mt-10"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={slideIn("right", "spring", 0.1, 1)}>
				<Accordion type="single" collapsible>
					<AccordionItem value="1" variant={"question"}>
						<AccordionTrigger variant={"question"}>Which branch students can apply?</AccordionTrigger>
						<AccordionContent>
							MIT students from any discipline are encouraged to apply for the subsystem of their choice.
							It's essential that they have a genuine interest in the selected subsystem and are prepared
							to commit their time to gain expertise in it.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="4" variant={"question"}>
						<AccordionTrigger variant={"question"}>
							What are the networking opportunities avalible?
						</AccordionTrigger>
						<AccordionContent>
							You will have the opportunity to stay in touch with a diverse group of our alumni who can
							offer valuable guidance and assistance. Additionally, our alumni have established several
							startups, one of which is called Fracktal Works, where you can engage in ITR and gain
							extensive knowledge about robotics and various other subjects through internships.
							Furthermore, you will have the chance to interact with other like-minded individuals who
							share a strong interest in robotics.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="2" variant={"tip"}>
						<AccordionTrigger variant={"tip"}>
							Do i need to have prior exprience in coding/electronics to be a part of the team?
						</AccordionTrigger>
						<AccordionContent>
							Prior experience in coding or electronics is not a requirement. However, having a grasp of
							the fundamentals of electronics and understanding the logic behind how things work is
							essential.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="3" variant={"info"}>
						<AccordionTrigger variant={"info"}>
							What are the recent achievements of the team ?
						</AccordionTrigger>
						<AccordionContent>
							1. We received All India rank 21 in ABU ROBOCON <br />
							2. 2nd runner up in Technoxian World Cup <br />
							3. Qualified for all the nationals of ABU ROBOCON <br />
							4. AIR 9 in ABU ROBOCON in 2016 <br />
							5. World Robotics Olympiad we came AIR 2 2018
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="5" variant={"info"}>
						<AccordionTrigger variant={"info"}>
							What are the research projects that team is curently working on?
						</AccordionTrigger>
						<AccordionContent>
							1. ARNAV: A biomimetic hand project. <br />
							2. Crab bot: A semi-autonomous robot designed for social purposes, utilizing swarm robotics
							mechanisms. <br />
							3. PRAYAS: A 6-DOF serial manipulator project. <br />
							4. PEEKER: A surveillance robot equipped with a 3-DOF camera. <br />
							5. Swerve drive: An omnidirectional drive-train in which all wheels are independently
							steered and driven. <br />
							6. RMMD (RoboManipal Motor Driver): An in-house-built motor driver used to efficiently
							control motor speed and direction, featuring built-in reverse current protection. <br />
							7. Tachometer: A fully in-house-built tachometer, including a microcontrolling unit, printed
							circuit board, and LED screen. <br />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</motion.div>
		</>
	);
}

export default SectionWrapper(FAQ, "FAQ");
