// eslint.config.cjs
module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    // tell ESLint to use the babel parser so it can understand JSX
    languageOptions: {
      parser: require.resolve('@babel/eslint-parser'),
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        // @babel/eslint-parser requires this if you don't have a babel config file
        requireConfigFile: false,
        babelOptions: {
          // keeps parser from trying to read your (nonexistent) babel config
          configFile: false,
          babelrc: false,
          // If you use presets, you can add them here. Not necessary for basic JSX parsing.
        },
      },
    },

    plugins: {
      react: require('eslint-plugin-react'),
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      // allow JSX without `import React` (React 17+ automatic runtime)
      'react/react-in-jsx-scope': 'off',
      // comment this in/out depending on whether you want prop-types enforced:
      // "react/prop-types": "off",
    },
  },
];
