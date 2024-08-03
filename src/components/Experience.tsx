import React from "react";
import { experienceData } from "@/data";

export default function Experience() {
	return (
		<section className="bg-black text-white py-40 min-h-screen 2xl:rounded-2xl">
			<ul className="space-y-6">
				{experienceData.map((item) => (
					<li className="px-36">
						<p className="text-6xl font-bold hover:text-orange-800">
							{item.company}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
