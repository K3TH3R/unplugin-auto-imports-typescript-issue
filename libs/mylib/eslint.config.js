const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
	...compat.config({
		extends: ['./.eslintrc-auto-import.json'],
	}),
]
