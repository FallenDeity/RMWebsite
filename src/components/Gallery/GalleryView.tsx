"use client";

import { motion } from "framer-motion";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import useGallery from "@/lib/hooks/useGallery";
import { fadeIn, textVariant } from "@/lib/motion";

import SectionWrapper from "../wrappers/SectionWrapper";
import GalleryImage from "./GalleryImage";

export function GalleryView(): React.JSX.Element {
	const gallery = useGallery();
	return (
		<>
			<motion.div
				className="my-10 flex w-full flex-col items-center justify-center"
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				<p className="text-[14px] uppercase tracking-wider text-foreground/80 sm:text-[18px]">Our Gallery</p>
				<h2 className="text-[30px] font-black text-foreground/90 xs:text-[40px] sm:text-[50px] md:text-[60px]">
					Gallery
				</h2>
			</motion.div>
			<motion.div
				className="flex min-h-screen w-full flex-col items-center justify-center py-10"
				variants={fadeIn("", "", undefined, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}>
				{gallery.length > 0 && (
					<ResponsiveMasonry
						className="flex h-full w-full py-10"
						columnsCountBreakPoints={{ 350: 1, 480: 2, 720: 3 }}>
						<Masonry gutter="1.5rem">
							{gallery.map((item, idx) => (
								<GalleryImage key={idx} item={item} />
							))}
						</Masonry>
					</ResponsiveMasonry>
				)}
			</motion.div>
		</>
	);
}

export default SectionWrapper(GalleryView, "Gallery");
