import rebaseMockup from "../img/rebase.png";
import threeMockup from "../img/three.png";
import rewriteMockup from "../img/rewrite.png";
import academiaMockup from "../img/academia.png";

export const projectsData = [
	{
		title: "Rewrite-Blog",
		description:
			"A fullstack blog which empowers writers with the freedom of markdown. ",
		href: "https://rewrite-blog.vercel.app",
		github: "https://github.com/somtojf/rewrite",
		image: rewriteMockup,
		technologies: [
			"React",
			"GraphQL",
			"Express",
			"TypeScript",
			"SASS",
			"MongoDB",
			"Firebase",
			"MUI",
			"Ant-design",
		],
	},
	{
		title: "Academia",
		description:
			"An examination platform capable of grading open-ended questions using text similarity.",
		href: "https://academia-zeta-three.vercel.app/",
		github: "https://github.com/somtojf/academia",
		image: academiaMockup,
		technologies: [
			"TypeScript",
			"Python",
			"Express",
			"Flask",
			"Tensorflow",
			"React",
			"Ant-design",
			"GraphQL",
			"Cosine similarity",
			"Text entailment",
		],
	},
	{
		title: "Buy-me-zobo",
		description: "A platform for creators to get support from their fans.",
		href: "https://buymezobo.vercel.app",
		image: "",
		technologies: [
			"Typescript",
			"Next.js",
			"Lucia",
			"PostgreSQL",
			"Paystack API",
			"React Query",
			"TailwindCSS",
		],
	},
	{
		title: "REBASE",
		description:
			"A frontend-only e-commerce website with a captivating user interface.",
		href: "https://basic-dept-wine.vercel.app/",
		github: "https://github.com/SomtoJF/Rebase",
		image: rebaseMockup,
		technologies: ["React", "TypeScript", "SASS", "GSAP", "Zustand", "MUI"],
	},
	{
		title: "Gosh",
		description: "A Lightweight golang shell.",
		href: "https://github.com/SomtoJF/Gosh",
		image: "",
		technologies: ["Golang", "Gorm", "SQLite"],
	},
	{
		title: "Three",
		description:
			"A 3D simulation of the solar system built in Three.js. The planets are mapped with textures from the NASA website.",
		href: "https://somtojf-three.netlify.app/",
		github: "https://github.com/SomtoJF/Three",
		image: threeMockup,
		technologies: ["JavaScript", "CSS", "ThreeJS", "GSAP", "dat.gui"],
	},
	{
		title: "Jobit",
		description: "A Mobile Application for searching for developer jobs. ",
		href: "https://github.com/SomtoJF/JobIt",
		image: "",
		technologies: ["React Native", "JavaScript", "Expo Router", "Expo Go"],
	},
];
