module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-variables'),
    require('postcss-preset-env')({ stage: 1 })
  ]
};
