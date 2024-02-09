import React from "react";

import Navbar from "@/components/Navbar";
import TeamData from "@/components/Team/TeamData";

export default function TeamPage(): React.ReactElement {
	return (
		<>
			<Navbar />
			<TeamData />
		</>
	);
}
