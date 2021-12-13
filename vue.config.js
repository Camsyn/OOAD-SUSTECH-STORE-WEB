module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://120.77.145.246:8000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
