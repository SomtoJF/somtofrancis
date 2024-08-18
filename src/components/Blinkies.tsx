import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import nameBlinkie from "../assets/name.blinkie.gif";

const blinkies = [
	{
		src: "https://cyber.dabamos.de/88x31/hell0.gif",
		description: "hi -again",
	},
	{ src: nameBlinkie.src, description: "i am somtochukwu francis" },
	{
		src: "https://y2k.neocities.org/blinkiez/newbatch/self.gif",
		description: "and i am using blinkies to explain who i am",
	},
	{
		src: "https://cyber.dabamos.de/88x31/nigeriaweb.gif",
		description: "i am a nigerian",
	},
	{
		src: "https://y2k.neocities.org/buttons/google_25wht.gif",
		description: "who gets paid to google stuff",
	},
	{
		src: "https://blinkies.cafe/b/display/0068-mainframe.gif",
		description: "and instruct computers",
	},
	{
		src: "https://y2k.neocities.org/blinkiez/newbatch/hatebugsblinkie4.gif",
		description: "and squash bugs",
	},
	{
		src: "	https://y2k.neocities.org/buttons/gameboy_advance_net.gif",
		description: "i like games",
	},
	{
		src: "https://y2k.neocities.org/stamps2/d4r9vh3-58212f6d-d0af-4ba2-9c11-dbd3f1a1edcc.gif",
		description: "this is the best game i ever played",
	},
	{
		src: "https://y2k.neocities.org/stamps2/d.gif",
		description: "i might chew ice cubes",
	},
	{
		src: "https://y2k.neocities.org/stamps2/46253362236_by_gaphals-dc6o0xv.gif",
		description: "and i have two chipped teeth (unrelated)",
	},
	{
		src: "https://cyber.dabamos.de/88x31/ballbbc2.gif",
		description: "i like football",
	},
	{
		src: "https://cyber.dabamos.de/88x31/i-np.gif",
		description: "hope you think so too",
	},
];

export default function Blinkies() {
	return (
		<div className="w-full flex lg:h-8 gap-0.5 flex-wrap items-center">
			<TooltipProvider>
				{blinkies.map((blinky) => (
					<Tooltip key={blinky.src}>
						<TooltipTrigger asChild>
							<img
								src={blinky.src}
								alt="blinky"
								className="h-auto w-auto max-h-8"
							/>
						</TooltipTrigger>
						<TooltipContent className="text-xs">
							<p>{blinky.description}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</TooltipProvider>
		</div>
	);
}
