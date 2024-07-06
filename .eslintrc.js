module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript versiyonunu belirtir
    sourceType: "module",
  },
  rules: {
    // Kişiselleştirilmiş ESLint kurallarınız buraya
  },
};
