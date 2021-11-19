module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8081,
    proxy: {
      '/api_login': {
        // target: 'http://camsyn.top:8000',
        target: 'http://camsyn.cn:7000',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api_login': ''
        }
      },
      '/api': {
        target: 'http://camsyn.top:8000',
        // target: 'http://camsyn.cn:7000',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
