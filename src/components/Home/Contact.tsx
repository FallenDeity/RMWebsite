"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { slideIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

export function Contact(): React.JSX.Element {
	return (
		<>
			<motion.div
				className="flex w-full flex-col items-center justify-center"
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<p className="text-[14px] uppercase tracking-wider text-foreground/80 sm:text-[18px]">Get in touch</p>
				<h2 className="text-[30px] font-black text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Contact Us
				</h2>
			</motion.div>
			<motion.div
				className="flex w-full flex-col items-center justify-center py-10"
				variants={slideIn("left", "", 0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<div className="flex h-full w-full flex-row items-center justify-center gap-5 rounded-md bg-secondary/70 px-2 py-4 dark:bg-secondary/30 sm:p-6 xl:justify-between">
					<Card>
						<CardContent className="p-4 sm:p-6">
							<div className="space-y-8">
								<div className="space-y-4">
									<h2 className="text-center text-3xl font-bold">Contact Us</h2>
									<p className="text-center text-sm">
										Fill out the form below and we'll get back to you as soon as possible.
									</p>
								</div>
								<div className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="first-name">First name</Label>
											<Input id="first-name" placeholder="Enter your first name" />
										</div>
										<div className="space-y-2">
											<Label htmlFor="last-name">Last name</Label>
											<Input id="last-name" placeholder="Enter your last name" />
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input id="email" placeholder="Enter your email" type="email" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											className="min-h-[100px]"
											id="message"
											placeholder="Enter your message"
										/>
									</div>
									<Button className="w-full">Send message</Button>
								</div>
							</div>
						</CardContent>
					</Card>
					<div className="hidden xl:block">
						<iframe
							title="Team RoboManipal"
							className="rounded-md"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.038475674665!2d74.78948297585087!3d13.347882787003211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca58e304c36e7%3A0xd7655313d087ee45!2sTeam%20RoboManipal!5e0!3m2!1sen!2sin!4v1705827761207!5m2!1sen!2sin"
							width="550"
							height="500"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default SectionWrapper(Contact, "Contact");
