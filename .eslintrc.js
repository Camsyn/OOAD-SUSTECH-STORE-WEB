// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   parserOptions: {
//     parser: "babel-eslint",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
//   overrides: [
//     {
//       files: [
//         "**/__tests__/*.{j,t}s?(x)",
//         "**/tests/unit/**/*.spec.{j,t}s?(x)",
//       ],
//       env: {
//         mocha: true,
//       },
//     },
//   ],
// };
module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'no-console': 'off',
    }
}
