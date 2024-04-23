import React from "react";

import Footer from "@/components/Footer";
import { GalleryView } from "@/components/Gallery/GalleryView";
import Navbar from "@/components/Navbar";

export default function Gallery(): React.JSX.Element {
	return (
		<>
			<Navbar />
			<div className="flex min-h-screen w-full items-center justify-center">
				<GalleryView />
			</div>
			<Footer />
		</>
	);
}
