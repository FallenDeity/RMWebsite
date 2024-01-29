import { Image } from "sanity";

export interface GalleryItem {
	readonly title: string;
	readonly description: string;
	image: string | Image;
	readonly createdAt: Date;
}

export interface Sponsor {
	readonly name: string;
	image: string | Image;
	readonly url: string;
	readonly description: string;
	readonly createdAt: Date;
}
