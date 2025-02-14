//https://eslint.org/docs/user-guide/configuring
module.exports = {
	root: true,
	"plugins": [
	  "@typescript-eslint",
	  "prettier",
	  "unicorn" ,
	  "import"
	],
	"extends": [
	  "airbnb-typescript/base",
	  "plugin:@typescript-eslint/recommended",
	  "plugin:unicorn/recommended",
	  "plugin:prettier/recommended",
	  "prettier",
	  "prettier/@typescript-eslint"
	],
	"parserOptions": {
	  "ecmaVersion": 2020,
	  "sourceType": "module"
	},
	overrides: [{
			"env": {
			  "es6": true,
			  "browser": true,
			  "node": true,
			},
		files: [".eslintrc.{js,cjs}"],
	}, ],
	"plugins": ["react"],
	"rules": {
		"prettier/prettier": [
			"warn",
			{
				endOfLine: "auto",
			},
		],
		"no-debugger": "off",
	    "no-console": 0
	},
}