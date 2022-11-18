module.exports = {
    extends: ['turbo', 'standard-with-typescript'],
    parser: '@typescript-eslint/parser',
    rules: {
        'react/jsx-key': 'off',
        'comma-dangle': ['error', 'never'],
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/space-before-function-paren': 'off'
    }
};
