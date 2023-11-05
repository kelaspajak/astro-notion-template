/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

import preline from 'preline/plugin.js';

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {
			colors: {
				gray: generateScale("gray"),
				blue: generateScale("blue"),
				ruby: generateScale("ruby"),

			  },
			fontFamily: {
				body: ["Inter Var",
				{
				  fontFeatureSettings:
					// eslint-disable-next-line max-len
					'"calt","case","clig","cpsp" 1,"cv01" 1,"cv02","cv03" 1,"cv04" 1,"dlig" 1,"kern","liga"',
				},],
				serif: ["Newsreader", ...fontFamily.serif],
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


function generateScale(name) {
	let scale = Array.from({ length: 12 }, (_, i) => {
	  let id = i + 1;
	  return [
		[id, `var(--${name}-${id})`],
		[`a${id}`, `var(--${name}A${id})`],
	  ];
	}).flat();
  
	return Object.fromEntries(scale);
  }