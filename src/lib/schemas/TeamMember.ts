export default {
	name: "teamMember",
	title: "Team Member",
	type: "document",
	description: "A team member",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "year",
			title: "Year",
			type: "date",
			options: {
				calendarTodayLabel: "Today",
			},
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
			name: "github",
			title: "GitHub",
			type: "url",
		},
		{
			name: "linkedin",
			title: "LinkedIn",
			type: "url",
		},
		{
			name: "mail",
			title: "Mail",
			type: "url",
		},
		{
			name: "subsystem",
			title: "Subsystem",
			type: "string",
			options: {
				list: [
					{ title: "Coding", value: "coding" },
					{ title: "Electronics", value: "electronics" },
					{ title: "Research", value: "research" },
					{ title: "Mechanical", value: "mechanical" },
					{ title: "Management", value: "management" },
					{ title: "Simulation", value: "simulation" },
				],
			},
		},
		{
			name: "role",
			title: "Role",
			type: "string",
			options: {
				list: [
					{ title: "Member", value: "member" },
					{ title: "Subsystem Head", value: "subsystemHead" },
					{ title: "Project Manager", value: "projectManager" },
					{ title: "Team Leader", value: "teamLeader" },
				],
			},
		},
	],
};
