import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "@/utils/menu-animations";

type Data = {
	title: string;
	href: string;
	index: number;
};

export default function MenuLink({
	data,
	isActive,
	setSelectedIndicator,
}: {
	data: Data;
	isActive: boolean;
	setSelectedIndicator: (pathname: string) => void;
}) {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-2 h-2 bg-white rounded-full absolute -left-7"
			></motion.div>
			<Link href={href} className="after:bg-white text-5xl">
				{title}
			</Link>
		</motion.div>
	);
}
