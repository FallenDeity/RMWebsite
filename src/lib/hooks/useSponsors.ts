"use client";

import { useEffect, useState } from "react";
import { Image } from "sanity";

import { Sponsor } from "../models";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

export default function useSponsors(): Sponsor[] {
	const [sponsors, setSponsors] = useState<Sponsor[]>([]);
	useEffect(() => {
		async function fetchSponsors(): Promise<void> {
			const query = `*[_type == "sponsor"]`;
			const results = await client.fetch<Sponsor[]>(query);
			results.forEach((result) => {
				result.image = urlForImage(result.image as Image);
			});
			setSponsors(results);
		}
		void fetchSponsors();
	}, []);
	return sponsors;
}
