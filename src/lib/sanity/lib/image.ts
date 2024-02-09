import createImageUrlBuilder from "@sanity/image-url";
import type { Image, ImageUrlBuilder } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
	projectId: projectId || "",
	dataset: dataset || "",
});

export const urlForImage = (source: Image): string => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		return imageBuilder?.image(source).auto("format").fit("max").url();
	} catch (error) {
		console.error(error);
		return "";
	}
};

export const urlFor = (source: Image): ImageUrlBuilder => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	return imageBuilder?.image(source);
};
