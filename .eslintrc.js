module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint/eslint-plugin"],
	"extends": ["airbnb"],
	"settings": {
		'import/extensions': [".js", ".jsx", ".ts", ".tsx"],
		'import/parsers': {
			'@typescript-eslint/parser': [".ts", ".tsx"]
		},
		'import/resolver': {
			'node': {
				'extensions': [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	},
	"rules": {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "error",
		"linebreak-style": ["error", "windows"],
		"no-tabs": 0
	}
}