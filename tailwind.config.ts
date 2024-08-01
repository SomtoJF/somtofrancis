import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".burger": {
					"&::before, &::after": {
						content: '""',
						display: "block",
						height: "1px",
						width: "50%",
						backgroundColor: "black",
						position: "absolute",
						left: "25%",
						transition: "transform 0.3s",
					},
					"&::before": {
						top: "calc(50% - 5px)",
					},
					"&::after": {
						bottom: "calc(50% - 5px)",
					},
				},
				".burger-active": {
					"&::before": {
						transform: "translateY(5px) rotate(45deg)",
					},
					"&::after": {
						transform: "translateY(-5px) rotate(-45deg)",
					},
				},
			};
			addUtilities(newUtilities);
		}),
	],
};

export default config;
