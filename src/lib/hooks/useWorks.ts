"use client";

import { useEffect, useState } from "react";
import { Image } from "sanity";

import { Work } from "../models";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

export default function useWork(): Work[] {
	const [works, setWork] = useState<Work[]>([]);
	useEffect(() => {
		async function fetchWork(): Promise<void> {
			const query = `*[_type == "work"] | order(_createdAt desc)`;
			const results = await client.fetch<Work[]>(query);
			results.forEach((result) => {
				result.image = urlForImage(result.image as Image);
			});
			setWork(results);
		}
		void fetchWork();
	}, []);
	return works;
}
