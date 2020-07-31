module.exports = {
  // publicPath: "/Vue-Dcard/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/scss/style.scss";`
      }
    }
  }
};
