/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"custom-lg": "1200px"
			},
			colors: {
				primary: "#A45B94",
				secondary: "#EDDEEA",
			},
		},
		fontFamily: {
			sans: ["Urbanist"],
		},
	},
	plugins: [],
};
