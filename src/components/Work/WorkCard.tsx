"use client";

import { Calendar } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import { LuCalendarClock, LuClock } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Work } from "@/lib/models";

import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function WorkCard({ work }: { work: Work }): React.JSX.Element {
	const [loading, setLoading] = useState(true);

	return (
		<Card className="col-span-1 flex h-full flex-col justify-center">
			<CardHeader className="relative overflow-hidden rounded-t-md p-0">
				<Dialog>
					<DialogTrigger>
						<div className="h-64 w-full overflow-hidden">
							<Image
								src={work.image as string}
								alt={work.title}
								width={10}
								height={10}
								className={`block h-full w-full cursor-pointer rounded-t-md object-cover transition-all duration-300 ease-in-out hover:scale-110 ${
									loading ? "animate-pulse bg-secondary blur-sm" : ""
								}`}
								onLoadingComplete={(): void => setLoading(false)}
							/>
						</div>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="mb-5 flex flex-col items-start space-y-2">
								<span>{work.title}</span>
								<div className="flex flex-row items-center justify-center space-x-2">
									<span className="text-xs text-muted-foreground">{moment(work.date).fromNow()}</span>
									<Badge
										className="flex w-fit flex-row items-center justify-between space-x-2"
										variant={
											work.status.replace(" ", "").toLowerCase() as
												| "completed"
												| "upcoming"
												| "inprogress"
										}>
										{work.status === "Completed" ? (
											<GoVerified />
										) : work.status === "Upcoming" ? (
											<LuCalendarClock />
										) : (
											<LuClock />
										)}
										<span>{work.status}</span>
									</Badge>
								</div>
							</DialogTitle>
							<DialogDescription className="flex flex-col items-center justify-center space-y-5">
								<Image
									src={work.image as string}
									alt={work.title}
									width={10}
									height={10}
									className="h-64 w-full rounded-md object-cover shadow-md"
								/>
								<span className="w-full text-pretty text-muted-foreground">{work.description}</span>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
				<div className="flex flex-col items-start space-y-2 px-6 pt-3">
					<CardTitle>{work.title}</CardTitle>
					<span className="flex flex-row text-sm text-muted-foreground">
						<Calendar className="mr-2 h-4 w-4 text-primary" />
						{moment(work.date).fromNow()}
					</span>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription className="line-clamp-5">{work.description}</CardDescription>
			</CardContent>
			<CardFooter className="flex flex-col pb-4">
				<Separator className="mb-4" />
				<div className="flex w-full flex-row items-center justify-between">
					<Badge
						className="flex w-fit flex-row items-center justify-between space-x-2"
						variant={work.status.replace(" ", "").toLowerCase() as "completed" | "upcoming" | "inprogress"}>
						{work.status === "Completed" ? (
							<GoVerified />
						) : work.status === "Upcoming" ? (
							<LuCalendarClock />
						) : (
							<LuClock />
						)}
						<span>{work.status}</span>
					</Badge>
					<Link href={""} target="_blank" rel="noreferrer">
						<RiExternalLinkLine className="h-4 w-4 hover:text-blue-500" />
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
}
