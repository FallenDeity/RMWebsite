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
						<AccordionTrigger variant={"question"}>How can we select a manager?</AccordionTrigger>
						<AccordionContent>
							Investors provide managers with funds, and they allocate funds across promising
							cryptocurrencies.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="2" variant={"tip"}>
						<AccordionTrigger variant={"tip"}>How can we select a manager?</AccordionTrigger>
						<AccordionContent>
							Investors provide managers with funds, and they allocate funds across promising
							cryptocurrencies.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="3" variant={"info"}>
						<AccordionTrigger variant={"info"}>How can we select a manager?</AccordionTrigger>
						<AccordionContent>
							Investors provide managers with funds, and they allocate funds across promising
							cryptocurrencies.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</motion.div>
		</>
	);
}

export default SectionWrapper(FAQ, "FAQ");
