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
        // the url-loader uses DataUrls.
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        // the file-loader emits files.
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        // for some modules like foundation
        test: /\.scss$/,
        exclude: [/node_modules/], // sassLoader will include node_modules explicitly
        loader: "style!css!postcss?pack=autoprefix!sass"
      },
      {
        // ***.l.css for local css modules: https://github.com/css-modules/css-modules
        test: /-l\.css$/,
        // for more informaiton see https://github.com/webpack/css-loader for more information
        // and https://github.com/postcss/postcss-loader
        loader: 'style!css?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      },
      {
        // for global files, not *.l.css
        test: /^(?!.*-l\b).+\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function(webpack) {
    return {
      defaults: [
        // handle @import of node_modules and inline them
        // addDependencyTo allow to handle hot reloading for @import'ed files
        require("postcss-import")({ addDependencyTo: webpack }),
        // fix url() of inlined @import'ed files
        // require("postcss-url")({}), // not working with fontawesome
        // use Sass-like markup in your CSS
        require('precss'),
        // use tomorrow’s CSS syntax, today
        require("cssnext")()
      ],
      autoprefix: [
        // foundation needs autoprefixer
        // see http://foundation.zurb.com/sites/docs/sass.html#autoprefixer-required
        autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
      ]
    }
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "node_modules")]
  }
}
