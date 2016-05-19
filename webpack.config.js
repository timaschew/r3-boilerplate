var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        // woff fonts
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        // fonts and svg
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      },
      {
        // images
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: "file"
      },
      {
        test: /\.css/,
        exclude: [/node_modules/],
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function(webpack) {
    return {
      defaults: [
        require('postcss-cssnext')({
          autoprefixer: ['last 2 version']
        }),
        require('precss')
      ],
      autoprefix: [
        // sass libraries like foundation needs an autoprefixer
        // see http://foundation.zurb.com/sites/docs/sass.html#autoprefixer-required
        autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
      ]
    }
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  }
}
