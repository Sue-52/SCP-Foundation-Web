module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //定义文件继承的子规范
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  //定义ESLint的解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  //定义了该eslint文件所依赖的插件
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
  },
};
