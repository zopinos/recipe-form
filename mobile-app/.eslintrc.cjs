module.exports = {
  root: true,
  env: { 'react-native/react-native': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: "@babel/eslint-parser",
  settings: { react: { version: 'detect' } },
  plugins: ["react", "react-native", "@stylistic"],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@stylistic/quotes': [
      'error',
      'single'
    ],
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': [
      'error',
      'always'
    ],
  },
}