export default {
	name: "galleryItem",
	title: "Gallery Item",
	type: "document",
	description: "An item representing a gallery image",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "createdAt",
			title: "Created At",
			type: "datetime",
		},
	],
};
