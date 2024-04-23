"use server";

import { z } from "zod";

const ContactSchema = z.object({
	firstName: z.string().min(3).max(50),
	lastName: z.string().min(3).max(50),
	email: z.string().email(),
	message: z.string().min(10).max(500),
});

export type ContactFormType = z.infer<typeof ContactSchema>;

interface ResponseSchema {
	errors?: Record<string, string[]>;
}

export async function sendMessage(data: ContactFormType): Promise<ResponseSchema> {
	const validatedData = ContactSchema.safeParse(data);
	if (!validatedData.success) {
		return {
			errors: validatedData.error.flatten().fieldErrors,
		};
	}
	const discordWebhook = process.env.DISCORD_WEBHOOK_URL ?? "";
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
	const { firstName, lastName, email, message } = data;
	const embed = {
		title: "New Message!",
		description: message,
		fields: [
			{
				name: "Name",
				value: `${firstName} ${lastName}`,
				inline: true,
			},
			{
				name: "Email",
				value: email,
				inline: true,
			},
		],
		color: 0x5865f2,
		timestamp: new Date().toISOString(),
		thumbnail: {
			url: `${baseUrl}/logo.png`,
		},
		url: baseUrl,
	};
	const body = JSON.stringify({ embeds: [embed] });
	await fetch(discordWebhook, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});
	return {};
}
