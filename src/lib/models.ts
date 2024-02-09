import { Image } from "sanity";

export interface GalleryItem {
	readonly _id: string;
	readonly title: string;
	readonly description: string;
	image: string | Image;
	readonly _createdAt: Date;
	readonly _updatedAt: Date;
}

export interface Sponsor {
	readonly _id: string;
	readonly name: string;
	image: string | Image;
	readonly url: string;
	readonly description: string;
	readonly _createdAt: Date;
	readonly _updatedAt: Date;
}

export interface TeamMember {
	readonly _id: string;
	readonly name: string;
	year: Date;
	image: string | Image;
	readonly github: string;
	readonly linkedin: string;
	readonly mail: string;
	readonly subsystem: string;
	readonly role: string;
	readonly _createdAt: Date;
	readonly _updatedAt: Date;
}
