/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        'prettier',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': 1,
        singleQuote: true,
    },
};
