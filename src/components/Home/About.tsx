"use client";

import React from "react";

import SectionWrapper from "../wrappers/SectionWrapper";

export function About(): React.JSX.Element {
	return (
		<section className="w-full py-12 md:py-24">
			<div className="container px-4 md:px-6">
				<div className="grid items-center gap-6">
					<div className="flex flex-col justify-center space-y-8 text-center">
						<div className="space-y-2">
							<h1 className="bg-gradient bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
								Discover Our Unique Features
							</h1>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
								Our features are designed to enhance your productivity and streamline your workflow.
							</p>
						</div>
						<div className="mx-auto w-full max-w-full space-y-4 py-10">
							<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<InboxIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Smart Inbox</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										Our Smart Inbox feature helps you manage your emails efficiently by prioritizing
										important emails.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<MergeIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Seamless Integration</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										Seamless Integration allows you to connect with your favorite apps and services
										without leaving your inbox.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<SettingsIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Advanced Customization</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										With Advanced Customization, you can personalize your email client to suit your
										preferences and work style.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<SearchIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Powerful Search</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										Our Powerful Search feature allows you to find any email, contact, or file in
										seconds.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<LockIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Reliable Security</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										With Reliable Security, your data is always safe and protected.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-2 rounded-lg bg-secondary/60 p-4 dark:bg-secondary/20">
									<div className="rounded-full p-2">
										<MergeIcon className="h-6 w-6 text-secondary-foreground opacity-75" />
									</div>
									<h2 className="text-xl font-bold">Easy Collaboration</h2>
									<p className="text-pretty text-sm text-muted-foreground">
										Easy Collaboration allows you to share and edit documents with your team in real
										time.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
			<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
		</svg>
	);
}

function LockIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	);
}

function MergeIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m8 6 4-4 4 4" />
			<path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
			<path d="m20 22-5-5" />
		</svg>
	);
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

export default SectionWrapper(About, "About");
