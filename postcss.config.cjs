const tailwind = require("tailwindcss");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const presetEnv = require("postcss-preset-env")({
	features: {
		"nesting-rules": true, // Optional, not necessary. Read details about it here: https://tabatkins.github.io/specs/css-nesting/#motivation
	},
});
const autoprefixer = require("autoprefixer");

// eslint-disable-next-line no-unused-vars
const plugins =
	process.env.NODE_ENV === "production"
		? [postcssImport, tailwind, presetEnv, autoprefixer, cssnano]
		: [postcssImport, tailwind, presetEnv];

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require('tailwindcss'),
		require('postcss-preset-env')({
			features: { 'nesting-rules': false }
		}),
	]
}
