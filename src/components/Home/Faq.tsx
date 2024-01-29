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
				className="mt-10 rounded-md border px-5 py-0 shadow-md"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={slideIn("right", "spring", 0.1, 1)}>
				<Accordion type="multiple">
					<AccordionItem value="item-1">
						<AccordionTrigger>
							<h3 className="text-[20px] font-bold text-foreground/90">What is a hackathon?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-foreground/80">
								A hackathon is a creative coding marathon. It is a place where you can meet new people,
								learn new skills, and create something that you are passionate about. You can work in
								teams of up to 4 people to create a project that you will present to a panel of judges.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							<h3 className="text-[20px] font-bold text-foreground/90">Who can attend?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-foreground/80">
								Anyone who is a high school student or a first year university student can attend. We
								welcome students of all backgrounds and skill levels.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							<h3 className="text-[20px] font-bold text-foreground/90">How much does it cost?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-foreground/80">Nothing! It is completely free to attend.</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							<h3 className="text-[20px] font-bold text-foreground/90">
								What if I don't know how to code?
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-foreground/80">
								No problem! We will be hosting workshops throughout the event that will teach you the
								basics of coding. We will also have mentors available to help you with any questions you
								may have.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</motion.div>
		</>
	);
}

export default SectionWrapper(FAQ, "FAQ");
