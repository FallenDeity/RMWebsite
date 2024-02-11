import React from "react";

import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import FAQ from "@/components/Home/Faq";
import Sponsors from "@/components/Home/Sponsors";
import Navbar from "@/components/Navbar";

export default function Home(): React.JSX.Element {
	return (
		<>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center">
				<h1 className="text-5xl font-black">Hello World</h1>
			</div>
			<About />
			<Sponsors />
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
