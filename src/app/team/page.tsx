import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamData from "@/components/Team/TeamData";

export default function TeamPage(): React.ReactElement {
	return (
		<>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center">
				<TeamData />
			</div>
			<Footer />
		</>
	);
}
