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
		<section className="pb-32 pt-24 bg-slate-100 text-slate-700 rounded-t-xl px-8 lg:px-32">
			<h2 className="text-lg">projects</h2>
			<hr className="bg-slate-700 my-5" />
			<motion.div
				variants={height}
				initial="initial"
				animate="enter"
				exit="exit"
				className="overflow-hidden"
			>
				<div className="flex gap-12 mb-20 lg:mb-0 lg:justify-between">
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
