import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(): React.JSX.Element {
	return (
		<footer className="bg-secondary/30 py-12">
			<div className="container mx-auto space-y-8 px-4 lg:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-content-center md:justify-items-center lg:grid-cols-3 lg:place-content-start lg:justify-items-start">
					<div>
						<h3 className="mb-3 text-lg font-bold">Quick Links</h3>
						<ul className="space-y-2 text-gray-600">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/#about">About</Link>
							</li>
							<li>
								<Link href="/#contact">Contact</Link>
							</li>
							<li>
								<Link href="/#sponsors">Sponsors</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 text-lg font-bold">Others</h3>
						<ul className="space-y-2 text-gray-600">
							<li>
								<Link href="/gallery">Gallery</Link>
							</li>
							<li>
								<Link href="/competitions">Competitions</Link>
							</li>
							<li>
								<Link href="/work">Work</Link>
							</li>
							<li>
								<Link href="/team">Team</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-2 flex flex-col items-center lg:col-span-1">
						<div className="flex items-center space-x-2">
							<MountainIcon className="h-8 w-8 text-black" />
							<span className="text-lg font-bold">RoboManipal</span>
						</div>
						<p className="mt-2 text-center text-gray-600">
							Making the world a better place through constructing elegant hierarchies for maximum code
							reuse and extensibility.
						</p>
					</div>
				</div>
				<hr className="mt-8" />
				<div className="mt-8 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<span className="hidden text-gray-600 sm:block">Powered by</span>
						<MountainIcon className="h-6 w-6 text-black" />
						<span className="text-lg font-bold">RoboManipal</span>
					</div>
					<div className="flex items-center space-x-4">
						<Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" passHref>
							<FacebookIcon className="h-6 w-6 text-blue-400" />
						</Link>
						<Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" passHref>
							<BsTwitterX className="h-6 w-6 text-slate-400" />
						</Link>
						<Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" passHref>
							<InstagramIcon className="h-6 w-6 text-purple-400" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>): React.JSX.Element {
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
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
