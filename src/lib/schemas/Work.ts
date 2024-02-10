export default {
	title: "Work",
	name: "work",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Description",
			name: "description",
			type: "text",
		},
		{
			title: "Image",
			name: "image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			title: "Status",
			name: "status",
			type: "string",
			options: {
				list: [
					{ title: "In Progress", value: "In Progress" },
					{ title: "Completed", value: "Completed" },
					{ title: "Upcoming", value: "Upcoming" },
				],
			},
		},
		{
			title: "Link",
			name: "link",
			type: "url",
		},
		{
			title: "Date",
			name: "date",
			type: "date",
			options: {
				calendarTodayLabel: "Today",
			},
		},
	],
};
