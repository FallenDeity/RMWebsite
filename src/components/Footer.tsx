import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { MdBiotech } from "react-icons/md";

export default function Footer(): React.JSX.Element {
	return (
		<footer className="bg-secondary/60 py-12 dark:bg-secondary/20">
			<div className="container mx-auto space-y-8 px-4 lg:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-content-center md:justify-items-center lg:grid-cols-3 lg:place-content-start lg:justify-items-start">
					<div>
						<h3 className="mb-3 text-lg font-bold">Quick Links</h3>
						<ul className="space-y-2 text-gray-600">
							<li>
								<Link className="transition-all duration-300 ease-in-out hover:text-primary" href="/">
									Home
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/#about">
									About
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/#contact">
									Contact
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/#sponsors">
									Sponsors
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 text-lg font-bold">Others</h3>
						<ul className="space-y-2 text-gray-600">
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/gallery">
									Gallery
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/competitions">
									Competitions
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/work">
									Work
								</Link>
							</li>
							<li>
								<Link
									className="transition-all duration-300 ease-in-out hover:text-primary"
									href="/team">
									Team
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-2 flex flex-col items-center lg:col-span-1">
						<div className="flex items-center space-x-2">
							<MdBiotech className="h-8 w-8" />
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
						<MdBiotech className="h-6 w-6" />
						<span className="text-lg font-bold">RoboManipal</span>
					</div>
					<div className="flex items-center space-x-4">
						<Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" passHref>
							<FacebookIcon className="h-6 w-6 text-blue-400 transition-all duration-300 ease-in-out hover:text-blue-500" />
						</Link>
						<Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" passHref>
							<BsTwitterX className="h-6 w-6 text-slate-400 transition-all duration-300 ease-in-out hover:text-slate-500" />
						</Link>
						<Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" passHref>
							<InstagramIcon className="h-6 w-6 text-pink-400 transition-all duration-300 ease-in-out hover:text-pink-500" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
