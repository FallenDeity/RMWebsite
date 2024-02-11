import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WorkData } from "@/components/Work/WorkData";

export default function WorkPage(): React.ReactElement {
	return (
		<>
			<Navbar />
			<WorkData />
			<Footer />
		</>
	);
}
