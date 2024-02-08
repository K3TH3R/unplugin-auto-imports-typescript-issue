const antfu = require('@antfu/eslint-config').default
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()
module.exports = antfu(
	{
		stylistic: {
			'indent': 'tab',
			'max-len': [2, 80, 2],
		},
		ignores: ['**/.eslintrc-auto-import.json'],
	},
)
