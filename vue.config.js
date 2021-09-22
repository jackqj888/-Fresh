module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      [process.env.VUE_APP_PROXY_URL]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_PROXY_URL}`]: "",
        },
      },
    },
  },
};
