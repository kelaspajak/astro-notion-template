/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['Inter', 'sans-serif'],
				heading: ['SF Pro Display', 'sans-serif'],
				sans: ['SF Pro Display', 'sans-serif'],

			},
			animation: {
				marquee: 'marquee 50s linear infinite',
			},
			keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 2.5rem))',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), preline],
};
