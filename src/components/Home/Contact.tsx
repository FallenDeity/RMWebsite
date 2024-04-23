"use client";
import "react-toastify/dist/ReactToastify.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { Slide, toast, ToastContainer } from "react-toastify";
import { z } from "zod";

import { sendMessage } from "@/app/actions/sendMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { slideIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

export const ContactSchema = z.object({
	firstName: z.string().min(3).max(50),
	lastName: z.string().min(3).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500),
});

export type ContactFormType = z.infer<typeof ContactSchema>;

export function Contact(): React.JSX.Element {
	const [disabled, setDisabled] = useState(false);
	const { resolvedTheme } = useTheme();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormType>({
		mode: "onChange",
		resolver: zodResolver(ContactSchema),
	});

	const OnSubmit = async (data: ContactFormType): Promise<void> => {
		setDisabled(true);
		const response = await sendMessage(data);
		setDisabled(false);
		if (response.errors) {
			return Object.entries(response.errors).forEach(([key, value]) => {
				toast.error(`${key}: ${value[0]}`);
			});
		}
		toast.success("Message sent successfully!");
	};

	return (
		<>
			<ToastContainer
				transition={Slide}
				position="bottom-right"
				autoClose={5000}
				closeOnClick
				pauseOnFocusLoss
				theme={resolvedTheme === "dark" ? "dark" : "light"}
			/>
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
								{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
								<form onSubmit={handleSubmit(OnSubmit)}>
									<div className="my-2 grid grid-cols-2 gap-4">
										<div>
											<Label htmlFor="first-name">First name</Label>
											<Input
												className="mt-1"
												{...register("firstName")}
												placeholder="Enter your first name"
											/>
											<span className="mt-2 text-xs text-red-500">
												{errors.firstName?.message}
											</span>
										</div>
										<div>
											<Label htmlFor="last-name">Last name</Label>
											<Input
												className="mt-1"
												{...register("lastName")}
												placeholder="Enter your last name"
											/>
											<span className="mt-2 text-xs text-red-500">
												{errors.lastName?.message}
											</span>
										</div>
									</div>
									<div className="my-2">
										<Label htmlFor="email">Email</Label>
										<Input
											className="mt-1"
											{...register("email")}
											type="email"
											placeholder="Enter your email"
										/>
										<span className="mt-2 text-xs text-red-500">{errors.email?.message}</span>
									</div>
									<div className="my-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											{...register("message")}
											className="mt-1 min-h-[100px]"
											placeholder="Enter your message"
										/>
										<span className="mt-2 text-xs text-red-500">{errors.message?.message}</span>
									</div>
									<Button
										disabled={disabled}
										type="submit"
										className="mt-4 w-full bg-primary disabled:cursor-not-allowed">
										{disabled ? (
											<BeatLoader className="text-primary-foreground" size={5} />
										) : (
											"Send Message"
										)}
									</Button>
								</form>
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
								<Link
									href="mailto:team.robomanipal@gmail.com"
									target="_blank"
									rel="noopener noreferrer">
									team.robomanipal@gmail.com
								</Link>
							</div>
							<div className="flex flex-row items-center">
								<PhoneIcon className="mr-2 h-4 w-4" />
								<Link href="tel:+919630093604" target="_blank" rel="noopener noreferrer">
									+91 963009360
								</Link>
							</div>
						</div>
						<iframe
							title="Team RoboManipal"
							className="mt-3 h-full w-full rounded-md"
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
