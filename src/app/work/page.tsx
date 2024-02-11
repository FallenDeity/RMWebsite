import React from "react";

import Navbar from "@/components/Navbar";
import { WorkData } from "@/components/Work/WorkData";

export default function WorkPage(): React.ReactElement {
	return (
		<>
			<Navbar />
			<WorkData />
		</>
	);
}
