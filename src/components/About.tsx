import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import Blinkies from "./Blinkies";

export default function About() {
	return (
		<article className="flex flex-col gap-2 text-sm lg:text-base">
			<p className="text-justify">
				Hi! My name is <b>Somtochukwu Francis</b>, but you can call me Somto
				<IoRemoveOutline className="inline" />
				or Francis doesn&apos;t matter really. I&apos;m a Software Engineer at
				Sefara{" "}
				<Link href={"https://sefara.com"} target="_blank">
					<sup className="font-bold">here</sup>
				</Link>
				, where I get to play with all sorts of <b>web-based</b> technologies
				and when I get lucky, I build <b>AI features</b> for our products.
				I&apos;ve always been drawn to the complex and challenging—it&apos;s
				like a puzzle I can&apos;t wait to solve. My curiosity has led me down
				some pretty interesting paths, from dabbling in <b>game development</b>{" "}
				and AI to tinkering with Embedded Systems just for the thrill of it.
			</p>

			<div className="text-justify">
				<b>These days I have mostly been</b>
				<ul className="list-disc list-inside">
					<li>
						building common development tools in bid to try and understand them
						better.
					</li>
					<li>
						working on a platform that empowers creators—and anyone, really to
						sustain their projects by receiving direct support from their
						audience.{" "}
						<Link href={"https://buymezobo.ng"} target="_blank">
							<sup className="font-bold">here</sup>
						</Link>
					</li>
					<li>
						exploring art-I love art. Especially surrealism and retro-futurism
					</li>
					<li>
						listening to music. I love indie, alternative and electronic{" "}
						<sup>maybe</sup>
					</li>
				</ul>
			</div>

			<p className="text-justify">
				If you&apos;re into deep tech chats, music, or just want to geek out
				over the latest in software,{" "}
				<DropdownMenu>
					<DropdownMenuTrigger>
						<b className="after:bg-slate-700">hit me up</b>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-slate-700 text-slate-100">
						<DropdownMenuLabel>My Contacts</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="bg-slate-700 text-slate-100">
							<Link
								href="https://www.github.com/somtojf"
								className="flex items-center after:content-none"
								target="_blank"
							>
								<BsGithub className="mr-2" />
								GitHub
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="bg-slate-700 text-slate-100">
							<Link
								href="mailto:somtochukwujf@gmail.com"
								className="flex items-center after:content-none"
							>
								<AiTwotoneMail className="mr-2" />
								Email
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="bg-slate-700 text-slate-100">
							<Link
								href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
								className="flex items-center after:content-none"
								target="_blank"
							>
								<BsLinkedin className="mr-2" />
								LinkedIn
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="bg-slate-700 text-slate-100">
							<Link
								href={"https://x.com/somtofrancis3"}
								className="flex items-center after:content-none"
								target="_blank"
							>
								<BsTwitterX className="mr-2" />
								Twitter/X
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>{" "}
				I&apos;m always down for a good convo or a cool collaboration!
			</p>
			<Blinkies />
		</article>
	);
}
