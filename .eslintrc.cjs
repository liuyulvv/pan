module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
        'plugin:react/jsx-runtime'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/display-name': 'off',
        camelcase: [
            'error',
            {
                properties: 'always'
            }
        ]
    }
};
