// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react'],
  rules: {
    // Turn off requirement to have React in scope (new JSX transform)
    'react/react-in-jsx-scope': 'off',

    // If you don't want prop-types warnings, turn this off:
    // "react/prop-types": "off"
    //
    // Otherwise leave it enabled and add PropTypes to components.
  },
};
