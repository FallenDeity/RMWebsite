"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { fadeIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

export function About(): React.JSX.Element {
	return (
		<section className="w-full py-12 lg:py-24 xl:py-32">
			<div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-24">
				<div className="space-y-8 lg:space-y-10">
					<motion.div className="space-y-4" variants={fadeIn("right", "spring", 0.1, 1)}>
						<motion.h2
							className="text-4xl font-bold tracking-tighter sm:text-5xl"
							variants={textVariant()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}>
							About Us
						</motion.h2>
						<motion.p
							variants={textVariant()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="max-w-[700px] text-justify tracking-tight text-gray-600 dark:text-gray-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
							Team RoboManipal is the official Robotics team of MAHE, Manipal established in 2009. We are
							a multidisciplinary team of 40+ undergraduate robotics enthusiasts who endeavour to achieve
							innovation through robotic technologies and spread knowledge about its diverse applications.
							The legacy of 13 years to have won laurels at many levels is a testament to our enthusiasm.
							We participate in prestigious competitions like ABU ROBOCON - Asia’s biggest Robotic
							Competition. Robotreks and Robowars, the most exciting events of TechTatva which attract
							teams from all over India, are organised by RoboManipal.
						</motion.p>
					</motion.div>
				</div>
				<div className="space-y-8 lg:order-last lg:col-start-2 lg:space-y-10">
					<motion.div className="space-y-4" variants={fadeIn("left", "spring", 0.1, 1)}>
						<motion.h2
							className="text-4xl font-bold tracking-tighter sm:text-5xl"
							variants={textVariant()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}>
							Our Mission
						</motion.h2>
						<motion.p
							variants={textVariant()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="max-w-[700px] text-justify tracking-tight text-gray-600 dark:text-gray-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
							We strive to formulate effective solutions to complex problems with the help of Robotics and
							its applications and compete in the toughest Robotics competitions in the world. Our
							innovation starts with a DREAM to elucidate problems as we BUILD solutions to ACHIEVE the
							limitless.
						</motion.p>
					</motion.div>

					<motion.div className="space-y-4" variants={fadeIn("left", "spring", 0.1, 1)}>
						<motion.h2
							className="text-4xl font-bold tracking-tighter sm:text-5xl"
							variants={textVariant()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}>
							Core Values
						</motion.h2>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							{["Innovation & Creativity", "Collaboration & Teamwork", "Excellence & Perseverance"].map(
								(value, index) => (
									<motion.div
										key={index}
										className="flex items-center gap-2"
										initial="hidden"
										whileInView="show"
										viewport={{ once: true }}
										variants={fadeIn("left", "spring", index * 0.3, 1)}>
										<CheckCircleIcon className="h-6 w-6 text-green-500" />
										<p className="text-lg font-semibold tracking-wide">{value}</p>
									</motion.div>
								)
							)}
						</div>
					</motion.div>
				</div>
			</div>
			<section className="container mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
				<motion.div
					className="relative overflow-hidden rounded-lg"
					variants={fadeIn("right", "spring", 0.1, 1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}>
					<Image
						alt="Mission Image"
						className="h-48 w-full object-cover md:h-72"
						height={400}
						src="/about_1.jpg"
						style={{
							aspectRatio: "600/400",
							objectFit: "cover",
						}}
						width={600}
					/>
				</motion.div>
				<motion.div
					className="relative overflow-hidden rounded-lg"
					variants={fadeIn("left", "spring", 0.1, 1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}>
					<Image
						alt="Values Image"
						className="h-48 w-full object-cover md:h-72"
						height={400}
						src="/about_2.jpg"
						style={{
							aspectRatio: "600/400",
							objectFit: "cover",
						}}
						width={600}
					/>
				</motion.div>
			</section>
		</section>
	);
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
	);
}

export default SectionWrapper(About, "About");
