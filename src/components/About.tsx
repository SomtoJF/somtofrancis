import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
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
import HighlightEffect from "./HighlightEffect";

export default function About() {
	return (
		<article className="flex flex-col gap-2 text-sm lg:text-base">
			<p className="text-justify">
				Hi! My name is <HighlightEffect>Somtochukwu Francis</HighlightEffect>.
				I&apos;m a Software Engineer at{" "}
				<Link href={"https://sefara.com"} target="_blank">
					<b>Sefara</b>
					<sup className="font-bold">[1]</sup>
				</Link>
				, where I get to play with all sorts of{" "}
				<HighlightEffect>web-based</HighlightEffect> technologies and when I get
				lucky, I build <HighlightEffect>AI features</HighlightEffect> for our
				products. I&apos;ve always been drawn to the complex and
				challenging—it&apos;s like a puzzle I can&apos;t wait to solve. My
				curiosity has led me down some pretty interesting paths, from dabbling
				in <HighlightEffect>game development</HighlightEffect> and AI to
				tinkering with <HighlightEffect>Distributed Systems</HighlightEffect>{" "}
				just for the thrill of it.
			</p>

			<div className="text-justify">
				<b>These days I have mostly been</b>
				<ul className="list-disc list-inside">
					<li>
						building common development tools in bid to try and understand them
						better.
					</li>
					<li>
						working on a{" "}
						<Link href={"https://buymezobo.ng"} target="_blank">
							<b>platform</b>
							<sup className="font-bold">[2]</sup>
						</Link>{" "}
						that empowers creators—and anyone, really to sustain their projects
						by receiving direct support from their audience.{" "}
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
						<sup className="font-bold">[4]</sup>
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
