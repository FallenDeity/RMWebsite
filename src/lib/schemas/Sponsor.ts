export default {
	name: "sponsor",
	title: "Sponsor",
	type: "document",
	description: "A sponsor",
	fields: [
		{
			name: "name",
			title: "Name",
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
			name: "url",
			title: "URL",
			type: "url",
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
