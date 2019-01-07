module.exports = (ctx) => {
  return {
    autoprefixer: {
      "browsers": "> 5%, last 2 firefox versions, last 2 chrome versions, last 2 safari versions, last 2 edge versions, ie 11"
    },
    plugins: [
      require("postcss-import")({ addDependencyTo: ctx.webpack }),
      require("postcss-url")(),
      require("postcss-each-variables")(),
      require("postcss-each")(),
      require('postcss-nesting')(),
      require("postcss-mixins")(),
      require("postcss-simple-vars")(),
      require('postcss-simple-extend')(),
      require("postcss-cssnext")({ browsers: [ "last 3 versions" ] })
    ]
  }
}
