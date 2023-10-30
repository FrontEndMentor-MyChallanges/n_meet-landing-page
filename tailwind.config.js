/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				customPrimary: '#4d96a9',
				customPrimaryHover: '#71c0d4',
				customSecondary: '#855fb1',
				customSecondaryHover: '#b188dd',
				customTextDark: '#28283d',
				customTextLight: '#87879d',
				customTextBlue: '#8fe3f9',
				customtextViolet: '#d9b8ff',
				customBackGround: '#fafafa',
			},
			fontFamily: {
				redHat: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
