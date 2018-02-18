const path = require('path')

module.exports = {
  entry: {
    app: ['regenerator-runtime/runtime', './src/index.js']
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src', 'core'),
      state: path.resolve(__dirname, 'src', 'state')
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map'
}
