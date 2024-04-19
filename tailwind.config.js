const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fadeIn: "fadeIn 1s ease backwards",
				fadeOut: "fadeOut 1s ease forwards",
			},
			keyframes: {
				fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
				fadeOut: { from: { opacity: "1" }, to: { opacity: "0" } },
			},
		},
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/typography"),
		flowbite.plugin(),
	],
	daisyui: {
		themes: [
			{
				flat: {
					primary: "#052f2e",
					secondary: "#021413",
					accent: "#0a5b59",
					neutral: "#3d4451",
					"base-100": "#E6E6DD",
				},
			},
			"light",
			"dark",
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "flat", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
