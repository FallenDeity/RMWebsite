"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useSponsors from "@/lib/hooks/useSponsors";
import { slideIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";

export function Sponsors(): React.JSX.Element {
	const sponsors = useSponsors();
	const player = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
	return (
		<>
			<motion.div
				className="flex w-full flex-col items-center justify-center"
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<p className="text-[14px] uppercase tracking-wider text-foreground/80 sm:text-[18px]">Our Partners</p>
				<h2 className="text-[30px] font-black text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Sponsors
				</h2>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
				variants={slideIn("left", "spring", 0.1, 1)}>
				<Carousel
					plugins={[player.current]}
					onMouseEnter={player.current.stop}
					onMouseLeave={(): void => player.current.play()}
					opts={{
						loop: true,
						align: "start",
					}}
					className="w-full">
					<CarouselContent>
						{sponsors.map((sponsor, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card className="border-none">
										<CardContent className="flex h-72 cursor-pointer items-center justify-center p-6">
											<Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
												<Image
													src={sponsor.image as string}
													alt={sponsor.name}
													width={40}
													height={40}
													className="h-full w-full object-contain"
												/>
											</Link>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</motion.div>
		</>
	);
}

export default SectionWrapper(Sponsors, "Sponsors");
