"use client";
import { motion } from "framer-motion";
import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

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
				<div className="grid h-full w-full grid-cols-1 gap-5 rounded-md bg-secondary/70 px-2 py-8 dark:bg-secondary/30 sm:px-6 lg:grid-cols-2">
					<Card className="border-none">
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
					<div className="flex h-full w-full flex-col text-center">
						<h3 className="text-2xl font-bold">Contact Information</h3>
						<span className="text-md text-foreground/80">
							Feel free to reach out to us for any queries or collaborations.
						</span>
						<div className="my-4 flex w-full flex-col items-center justify-center space-y-2 text-sm text-muted-foreground">
							<div className="flex flex-row items-center">
								<MailIcon className="mr-2 h-4 w-4" />
								<Link href="mailto:abcd@gmail.com" target="_blank" rel="noopener noreferrer">
									abcd@gmail.com
								</Link>
							</div>
							<div className="flex flex-row items-center">
								<PhoneIcon className="mr-2 h-4 w-4" />
								<Link href="tel:+919876543210" target="_blank" rel="noopener noreferrer">
									+91 9876543210
								</Link>
							</div>
							<div className="flex flex-row items-center">
								<LocateIcon className="mr-2 h-4 w-4" />
								<p>Team RoboManipal, MIT Manipal, Karnataka, India</p>
							</div>
						</div>
						<iframe
							title="Team RoboManipal"
							className="h-full w-full rounded-md"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.038475674665!2d74.78948297585087!3d13.347882787003211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca58e304c36e7%3A0xd7655313d087ee45!2sTeam%20RoboManipal!5e0!3m2!1sen!2sin!4v1705827761207!5m2!1sen!2sin"
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
