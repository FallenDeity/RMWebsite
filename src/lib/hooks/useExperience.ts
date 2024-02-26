"use client";

import { useEffect, useState } from "react";
import { Image } from "sanity";

import { Experience } from "../models";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

export default function useExperience(): Experience[] {
	const [experience, setExperience] = useState<Experience[]>([]);
	useEffect(() => {
		async function fetchExperience(): Promise<void> {
			const query = `*[_type == "competition"] | order(priority desc)`;
			const results = await client.fetch<Experience[]>(query);
			results.forEach((result) => {
				result.icon = urlForImage(result.icon as Image);
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				if (result.images) {
					result.images = result.images.map((image) => urlForImage(image as Image));
				}
			});
			setExperience(results);
		}
		void fetchExperience();
	}, []);
	return experience;
}
