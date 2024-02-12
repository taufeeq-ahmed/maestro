module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: 'airbnb',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'react/prop-types': 'off',
        'react/jsx-indent': [2, 4, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-indent-props': 'off',
    },
};
