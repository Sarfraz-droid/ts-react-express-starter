module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['standard-with-typescript', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
    },
    rules: {
    },
    plugins: ['prettier'],
    root: true
};
