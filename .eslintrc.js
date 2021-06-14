module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['react', 'prettier'],
    rules: {
        'import/no-unresolved': [
            2,
            {
                ignore: ['\\.(png|jpg|svg)\\?(lqip)$'],
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/no-danger': 'off',
        'func-names': 'off',
        'no-restricted-syntax': 'off',
        'react/static-property-placement': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-await-in-loop': 'off',
        'no-param-reassign': 'off',
        'react/prop-types': [
            'error',
            {
                ignore: ['navigation', 'focused', 't', 'i18n', 'router'],
            },
        ],
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['hreflang'],
            },
        ],
        semi: ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                singleQuote: true,
                jsxSingleQuote: true,
                printWidth: 80,
                semi: true,
                jsxBracketSameLine: false,
                tabWidth: 4,
                arrowParens: 'always',
                'max-len': 120,
            },
        ],
    },
    overrides: [
        {
            files: ['*.snap'],
            rules: {
                quotes: ['error', 'single', { allowTemplateLiterals: true }],
            },
        },
    ],
    globals: {
        fetch: false,
        google: true,
        mapkit: true,
    },
};
