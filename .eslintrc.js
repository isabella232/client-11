module.exports = {
	root: true,
	env: {
		'react-native/react-native': true,
		'jest/globals': true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'jest', 'react-native', 'react-hooks', 'prettier'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'import/extensions': ['error', 'never'],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'react/prop-types': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens',
				assignment: 'parens',
				return: 'parens',
				arrow: 'parens',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore',
			},
		],
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': 'error',
		camelcase: 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'warn',
		'import/prefer-default-export': 'off',
		'react/require-default-props': 0,
		'no-underscore-dangle': 0,
		'no-nested-ternary': 0,
		// @TODO - fix this when updated https://github.com/benmosher/eslint-plugin-import/issues/1174
		'import/no-extraneous-dependencies': 0,
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};

// module.exports = {
// 	parser: '@typescript-eslint/parser',
// 	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
// 	plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks'],
// 	rules: {
// 		indent: 'off',
// 		'@typescript-eslint/indent': ['error', 'tab'],
// 		'@typescript-eslint/explicit-function-return-type': 'off',
// 		'@typescript-eslint/explicit-member-accessibility': 'off',
// 		'@typescript-eslint/camelcase': 'off',
// 		'@typescript-eslint/prefer-interface': 'off',
// 		'react-hooks/rules-of-hooks': 'warn',
// 		'react-hooks/exhaustive-deps': 'warn',
// 	},
// };
