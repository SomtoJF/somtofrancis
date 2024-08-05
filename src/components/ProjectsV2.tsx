"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectV2() {
	const containerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (typeof window !== "undefined" && window.innerWidth > 650 && container) {
			const totalWidth = container.scrollWidth;
			const containerWidth = container.offsetWidth;

			gsap.to(container, {
				x: () => ` -${totalWidth - containerWidth}px`,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: () => `+=${totalWidth - containerWidth}`,
					scrub: true,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
				},
			});
		}
	}, []);

	return (
		<section className="bg-black text-white">
			<div className="py-40 px-8 lg:px-32">
				<h2 className="text-5xl lg:text-7xl font-extrabold uppercase mb-5">
					Projects
				</h2>
				<p className="text-2xl max-w-[600px]">
					What I have been working on lately. Some were personal experiments,
					others were professional assignments but all were fun.
				</p>
			</div>
			<ul ref={containerRef} className="flex">
				{projectsData.map((project) => (
					<li
						className="w-screen h-screen flex-shrink-0 flex flex-col justify-end px-8 lg:px-32 py-20 relative overflow-hidden"
						key={uuidv4()}
					>
						<div className="absolute inset-0 z-0">
							{project.image && (
								<Image
									src={project.image?.src}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="opacity-70"
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
											href={project.github}
											className="rounded-full bg-none border-white border-2 px-8 py-2 flex gap-2 items-center hover:bg-opacity-80 transition-colors text-white project-link after:content-none"
										>
											GitHub <FaArrowRight />
										</Link>
									)}
									{project.href && (
										<Link
											href={project.href}
											className="rounded-full bg-none border-white border-2 px-8 py-2 flex gap-2 items-center hover:bg-opacity-80 transition-colors text-white project-link after:content-none"
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
