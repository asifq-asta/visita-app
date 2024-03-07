module.exports = {
	parser: "@typescript-eslint/parser", // Use if you are using TypeScript
	plugins: ["unused-imports", "eslint-comments", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
	],
	rules: {
		"eslint-comments/no-unused-disable": "error",
		"eslint-comments/no-unused-enable": "error",
		"unused-imports/no-unused-imports": "error",
		"react/react-in-jsx-scope": "off",
		"unused-imports/no-unused-vars": [
			"error",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"no-undef": "off",
		"no-redeclare": "off",
		"no-console": "off",
	},
};
