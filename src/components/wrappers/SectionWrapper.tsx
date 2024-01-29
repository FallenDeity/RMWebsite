"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { staggerContainer } from "@/lib/motion";

const SectionWrapper = (Component: React.FC, idName: string): React.FC =>
	function HOC(): React.JSX.Element {
		const pathname = usePathname().replace("/", "");
		return (
			<motion.section
				variants={staggerContainer(1, 0.5)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="relative z-0 mx-auto h-full w-full max-w-7xl px-4 py-10 sm:px-16 sm:py-16">
				<span className="hash-span" id={(pathname ? `${pathname}-${idName}` : idName).toLocaleLowerCase()}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
