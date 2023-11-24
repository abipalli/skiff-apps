require('eslint-config-skiff-eslint/backend');
module.exports = {
  extends: ['skiff-eslint/backend'],
  parserOptions: {
    project: 'tsconfig.json'
  },
  ignorePatterns: ['dist/**', '.eslintrc.js', 'build.js'],
};
