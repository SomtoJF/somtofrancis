"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import ProjectsV2 from "@/components/ProjectsV2";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
	const [windowWidth, setWindowWidth] = useState<number>(0);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);
	return (
		<main className="w-full max-w-screen-2xl">
			{windowWidth > 650 && (
				<AnimatedCursor
					color="0,0,0,0"
					innerSize={5}
					outerSize={5}
					innerScale={1}
					outerScale={9}
					outerAlpha={0}
					outerStyle={{
						background: "white",
						mixBlendMode: "exclusion",
					}}
					trailingSpeed={8}
					showSystemCursor={true}
				/>
			)}

			<Navbar />
			<Hero />
			{/* <ProjectsV2 /> */}
			{/* <Experience /> */}
			{/* <Projects /> */}
		</main>
	);
}
