"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamMember } from "@/lib/models";

import { Separator } from "../ui/separator";

const captializeName = (original: string): string => {
	const eachName = original.toLocaleLowerCase().split(" ");
	const captializedName = eachName.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
	return captializedName.join(" ");
};

export default function TeamCard({ member }: { member: TeamMember }): React.ReactElement {
	return (
		<motion.div
			variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}>
			<Card className="flex h-full w-64 flex-col justify-center">
				<CardHeader>
					<Avatar className="h-full w-full rounded-md object-contain">
						<AvatarImage className="h-48 w-full rounded-md object-cover" src={member.image as string} />
						<AvatarFallback className="min-h-48 w-full rounded-md text-xl uppercase">
							{member.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
				</CardHeader>
				<CardContent className="flex flex-col items-center justify-center pt-0">
					<CardTitle className="w-56 truncate text-center text-xl">{captializeName(member.name)}</CardTitle>
					<CardDescription>
						{member.role.toLowerCase().includes("head")
							? `${captializeName(member.subsystem)} Head`
							: member.role}
					</CardDescription>
				</CardContent>
				<CardFooter className="flex h-full w-full flex-col items-center justify-evenly pb-4">
					<Separator className="mb-4" />
					<div className="flex h-full w-full flex-row items-center justify-evenly">
						{member.mail && (
							<Link href={`mailto:${member.mail}`} target="_blank" rel="noreferrer">
								<BiLogoGmail className="h-4 w-4" />
							</Link>
						)}
						{member.linkedin && (
							<Link href={member.linkedin} target="_blank" rel="noreferrer">
								<FaLinkedinIn className="h-4 w-4" />
							</Link>
						)}
						{member.github && (
							<Link href={member.github} target="_blank" rel="noreferrer">
								<FaGithub className="h-4 w-4" />
							</Link>
						)}
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
