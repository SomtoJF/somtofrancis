import { blur, translate } from "@/utils/project-animations";
import { motion } from "framer-motion";
import Link from "next/link";

interface Link {
	title: string;
	href: string;
}

interface SelectedLink {
	isActive: boolean;
	index: number;
}

interface BodyProps {
	links: Link[];
	selectedLink: SelectedLink;
	setSelectedLink: (link: SelectedLink) => void;
}

export default function ProjectBody({
	links,
	selectedLink,
	setSelectedLink,
}: BodyProps) {
	const getChars = (word: string) => {
		let chars: JSX.Element[] = [];
		word.split("").forEach((char, i) => {
			chars.push(
				<motion.span
					custom={[i * 0.02, (word.length - i) * 0.01]}
					variants={translate}
					initial="initial"
					animate="enter"
					exit="exit"
					key={char + i}
					className="inline-block"
				>
					{char}
				</motion.span>
			);
		});
		return chars;
	};

	return (
		<div className="flex flex-wrap mt-10 lg:max-w-7xl flex-row-reverse">
			{links.map((link, index) => {
				const { title, href } = link;
				return (
					<Link
						key={`l_${index}`}
						href={href}
						className="text-slate-700 no-underline uppercase mb-4 lg:mb-6"
						target="_blank"
					>
						<motion.p
							onMouseOver={() => {
								setSelectedLink({ isActive: true, index });
							}}
							onMouseLeave={() => {
								setSelectedLink({ isActive: false, index });
							}}
							variants={blur}
							animate={
								selectedLink.isActive && selectedLink.index !== index
									? "open"
									: "closed"
							}
							className="m-0 flex flex-wrap overflow-hidden text-3xl lg:text-[3vw] pr-8 lg:pr-[2vw] pt-3 font-bold leading-tight"
						>
							{getChars(title)}
						</motion.p>
					</Link>
				);
			})}
		</div>
	);
}
