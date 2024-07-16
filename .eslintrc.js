module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        pragma: 'h',
        version: 'detect',
      },
    },
  };