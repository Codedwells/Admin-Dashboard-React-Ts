/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				Nunito: ['Nunito', 'sans-serif'],
				Manrope: ['Manrope', 'sans-serif'],
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
