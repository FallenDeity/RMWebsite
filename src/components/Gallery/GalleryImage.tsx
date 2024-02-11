"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { GalleryItem } from "@/lib/models";
import { fadeIn } from "@/lib/motion";

export default function GalleryImage({ item }: { item: GalleryItem }): React.JSX.Element {
	const [loading, setLoading] = useState(true);
	return (
		<Dialog>
			<DialogTrigger>
				<motion.div
					whileHover={{ scale: 1.05 }}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="show"
					variants={fadeIn("", "", undefined, 1)}
					className="group relative flex h-full w-full cursor-pointer rounded-md shadow-md">
					<Image
						src={item.image as string}
						alt={item.title}
						width={10}
						height={10}
						className={`block w-full rounded-md object-cover ${
							loading ? "animate-pulse bg-secondary blur-sm" : ""
						}`}
						onLoadingComplete={(): void => setLoading(false)}
					/>
					<div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileHover={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							viewport={{ once: false }}
							className="flex h-full w-full flex-col items-center justify-center gap-2">
							<p className="text-sm font-semibold text-white">{item.title}</p>
						</motion.div>
					</div>
				</motion.div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{item.title}</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					<Image
						src={item.image as string}
						alt={item.title}
						width={10}
						height={10}
						className="h-full w-full rounded-md object-contain"
					/>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
}
