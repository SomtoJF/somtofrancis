import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
	return (
		<main className="w-full max-w-screen-2xl">
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
				trailingSpeed={1}
				showSystemCursor={true}
			/>

			<Navbar />
			<Hero />
			<Experience />
			<Projects />
		</main>
	);
}
