module.exports = {
	extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	rules: {
		'no-undef': 'error',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
};
