"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

export default function SplineBackground(): React.JSX.Element {
	return (
		<div className="absolute bottom-0 left-0 right-0 top-0 min-h-screen w-full">
			<Spline renderOnDemand={false} scene="https://prod.spline.design/EVNYkbIkIPcRpSQb/scene.splinecode" />
		</div>
	);
}
