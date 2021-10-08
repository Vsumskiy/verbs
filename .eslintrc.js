module.exports = {
    "parser": "@angular-eslint/template-parser",
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    globals: {
        angular: true
    },
    rules: {
        '@typescript-eslint/array-type': ['error', {default: 'array'}],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/indent': ['error', 4],
    },
};

