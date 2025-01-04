/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
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
