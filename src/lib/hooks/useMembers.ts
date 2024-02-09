"use client";

import { useEffect, useState } from "react";
import { Image } from "sanity";

import { TeamMember } from "../models";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

export default function useMembers(): Record<string, TeamMember[]> {
	const [members, setMembers] = useState<Record<string, TeamMember[]>>({});
	useEffect(() => {
		async function fetchMembers(): Promise<void> {
			const query = `*[_type == "teamMember"] | order(year desc)`;
			const results = await client.fetch<TeamMember[]>(query);
			results.forEach((result) => {
				result.image = urlForImage(result.image as Image);
				result.year = new Date(result.year);
			});
			const years = results.map((result) => result.year.getFullYear());
			const uniqueYears = [...new Set(years)];
			const membersByYear: Record<string, TeamMember[]> = {};
			uniqueYears.forEach((year) => {
				membersByYear[year] = results.filter((result) => result.year.getFullYear() === year);
			});
			setMembers(membersByYear);
		}

		void fetchMembers();
	}, []);
	return members;
}
