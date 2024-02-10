"use client";

import { useEffect, useState } from "react";
import { Image } from "sanity";

import { GalleryItem } from "../models";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

export default function useGallery(): GalleryItem[] {
	const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
	useEffect(() => {
		async function fetchGalleryItems(): Promise<void> {
			const query = `*[_type == "galleryItem"] | order(_createdAt desc)`;
			const results = await client.fetch<GalleryItem[]>(query);
			results.forEach((result) => {
				result.image = urlForImage(result.image as Image);
			});
			setGalleryItems(results);
		}
		void fetchGalleryItems();
	}, []);
	return galleryItems;
}
