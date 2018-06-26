module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    extends: [
        'airbnb',
        'prettier',
    ],
    rules: {
        // only allowed in development
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        // reducing complexity
        // see https://wecodetheweb.com/2016/11/05/improving-code-quality-using-eslint/
        complexity: [2, 6],
        'max-statements': [2, 9],
        'max-statements-per-line': [2, {
            max: 1
        }],
        'max-nested-callbacks': [2, 3],
        'max-depth': [2, {
            max: 3
        }],
    },
};
