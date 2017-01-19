module.exports = {
  entry:  __dirname + '/app/main.js',  // 已多次提及的唯一入口文件
  output: {
    path: __dirname + '/public',  // 打包后的文件存放的地方
    filename: 'bundle.js'  // 打包后输出文件的文件名
  },
  devtool: 'eval-source-map', // 可以生成 source map

  /**
   * 需要包 webpack-dev-server
   */
  devServer: {
    port: 8080,
    contentBase: './public',  //本地服务器所加载的页面所在的目录
    colors: true,  //终端中输出结果为彩色
    historyApiFallback: true,  //不跳转
    inline: true  //实时刷新
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  }
}