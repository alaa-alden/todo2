module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-global-import': {},
    'postcss-discard-comments': {},
    'postcss-inline-svg': {},
    'postcss-modules-values': {},
    'postcss-grid-kiss': {},
    'postcss-preset-env': {
      "browserslist": [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
      ]
      ,
    },
    precss: {},
    'postcss-sass-color-functions': {},
  }
}
