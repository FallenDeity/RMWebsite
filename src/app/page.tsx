import React from "react";

import BgEffect from "@/components/BgEffect";
import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import FAQ from "@/components/Home/Faq";
import Sponsors from "@/components/Home/Sponsors";
import Navbar from "@/components/Navbar";
import SparklesPreview from "@/components/Spline";

export default function Home(): React.JSX.Element {
	return (
		<>
			<Navbar />
			<BgEffect />
			<div className="flex min-h-screen items-center justify-center">
				<SparklesPreview />
			</div>
			<About />
			<Sponsors />
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
