module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'standard',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4]
    }
};
