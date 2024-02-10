import React from "react";

import Experience from "@/components/Competitions/Experience";
import Navbar from "@/components/Navbar";

export default function Gallery(): React.JSX.Element {
	return (
		<>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center">
				<Experience />
			</div>
		</>
	);
}
