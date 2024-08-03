"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { height } from "@/utils/project-animations";
import ProjectBody from "./ProjectBody";
import { projectsData } from "@/data";
import ProjectData from "./ProjectData";

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState({
		isActive: false,
		index: 0,
	});
	return (
		<section className="pb-32 pt-24 bg-slate-100 text-slate-700 rounded-t-xl px-8 lg:px-32 ">
			<h2 className="text-5xl lg:text-7xl font-extrabold uppercase mb-5">
				projects
			</h2>
			<p className="text-2xl max-w-[600px]">
				What I have been working on lately. Some were personal experiments,
				others were professional assignments but all were fun.
			</p>
			<motion.div
				variants={height}
				initial="initial"
				animate="enter"
				exit="exit"
				className="overflow-hidden"
			>
				<div className="flex gap-12 mb-20 lg:mb-0 lg:justify-between flex-row-reverse">
					<div className="flex flex-col justify-between">
						<ProjectBody
							links={projectsData}
							selectedLink={selectedProject}
							setSelectedLink={setSelectedProject}
						/>
					</div>

					<ProjectData
						data={projectsData[selectedProject.index]}
						selectedLink={selectedProject}
					/>
				</div>
			</motion.div>
		</section>
	);
}
