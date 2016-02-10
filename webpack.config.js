var path = require('path')
var webpack = require('webpack')
var cssnext = require('cssnext')
var precss = require('precss')
var postcssImport = require('postcss-import')

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
        test: /\.scss$/,
        // autoprefixer comes from http://foundation.zurb.com/sites/docs/sass.html#autoprefixer-required
        loader: "style!css!autoprefixer?{browsers:['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}!sass"
      },
      {
        test: /\.css/,
        exclude: [/node_modules/],
        // for more informaiton see https://github.com/webpack/css-loader for more information
        // and https://github.com/postcss/postcss-loader
        loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?'
      }
    ]
  },
  postcss: function(webpack) {
    return [
      // handle hot reloading for @import'ed files
      postcssImport({addDependencyTo: webpack}),
      // use Sass-like markup in your CSS
      precss,
      // use tomorrow’s CSS syntax, today
      cssnext({
        autoprefixer: ['last 2 version'],
      })
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  }
}
