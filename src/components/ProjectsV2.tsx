"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectV2() {
	const containerRef = useRef<HTMLUListElement>(null);
	const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	useGSAP(() => {
		const container = containerRef.current;
		if (typeof window !== "undefined" && window.innerWidth > 650 && container) {
			// Horizontal scroll animation
			gsap.to(container, {
				x: () => `-${window.innerWidth * (listItemsRef.current.length - 2)}px`,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: () =>
						`+=${window.innerWidth * (listItemsRef.current.length - 2)}`,
					scrub: 1,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
					pinSpacing: true,
				},
			});

			// List item expansion animation
			listItemsRef.current.forEach((item, _) => {
				if (item) {
					gsap.to(item, {
						width: "100vw",
						marginRight: 0,
						borderRadius: 0,
						left: 0,
						ease: "power2.inOut",
						scrollTrigger: {
							trigger: item,
							containerAnimation: gsap.getById("containerAnim"),
							start: "left center",
							end: "right center",
							scrub: true,
							invalidateOnRefresh: true,
						},
					});
				}
			});
		}
	}, []);

	return (
		<section className=" bg-slate-100 text-slate-700 flex flex-col">
			<div className="pb-40 px-8 lg:px-32 self-end">
				<h2 className="text-5xl lg:text-7xl font-extrabold uppercase mb-5">
					Projects
				</h2>
				<p className="text-2xl max-w-[600px]">
					What I have been working on lately. Some were personal experiments,
					others were professional assignments but all were fun.
				</p>
			</div>
			<ul ref={containerRef} className="flex h-screen">
				{projectsData.map((project, index) => (
					<li
						ref={(el) => {
							listItemsRef.current[index] = el;
						}}
						className="w-[90%] mr-8 lg:mr-32 left-8 lg:left-32 rounded-3xl h-screen flex-shrink-0 flex flex-col justify-end px-8 lg:px-32 py-20 relative overflow-hidden"
						key={uuidv4()}
					>
						<div className="absolute inset-0 z-0">
							{project.image && (
								<Image
									src={project.image?.src}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="opacity-90"
								/>
							)}

							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
						</div>
						<div className="relative z-10 bg-transparent p-8 rounded-lg">
							<h3 className="text-[4vw] uppercase font-bold text-white mb-4">
								{project.title}
							</h3>
							<div className="max-w-lg space-y-10 text-white">
								<p className="text-xl">{project.description}</p>
								<div className="flex gap-5 flex-wrap">
									{project.github && (
										<Link
											target="_blankz"
											href={project.github}
											className="rounded-full bg-none border-white border-[1px] px-8 py-2 flex gap-2 items-center hover:bg-opacity-80 transition-colors text-white project-link after:content-none"
										>
											GitHub <FaArrowRight />
										</Link>
									)}
									{project.href && (
										<Link
											target="_blankz"
											href={project.href}
											className="rounded-full bg-none border-white border-[1px] px-8 py-2 flex gap-2 items-center hover:bg-opacity-80 transition-colors text-white project-link after:content-none"
										>
											Live <FaArrowRight />
										</Link>
									)}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
