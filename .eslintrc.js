module.exports = {
	env: {
		browser: true,
		es2021: true,
		mocha: true,
		jquery: true
	},
	globals: {
		browser: true,
		driver: true,
		$$: false
	},
	extends: [
		'airbnb-base'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages', // игнор расширений в импортах
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		indent: [
			'error', 'tab'
			// { "FunctionDeclaration": {"body": "off", "parameters": "1"} }
		],
		'no-tabs': 0,
		'no-console': 0,
		'no-undef': 0,
		'comma-dangle': [2, 'never'],
		'max-len': ['warn', { code: 120 }],
		'no-mixed-spaces-and-tabs': ['warn'],
		'class-methods-use-this': ['off'],
		'no-unused-vars': ['off'],
		'@typescript-eslint/no-unused-vars': ['error'],
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': ['warn'],
		'no-param-reassign': 0
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
