var webpack = require('webpack'),
  path = require('path');

module.exports = {
  context: path.resolve('./client/src'),
  entry: {
       app:['./index.jsx']
},
  devtool: 'source-map',
  output: {
    path: path.resolve('./client/assets/dist'),
    filename: 'bundle.js',
    publicPath: "http://127.0.0.1:8081/",
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: [new RegExp(path.join(__dirname, 'src'))],
      loaders: ['eslint']
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      },

      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },

      {
        test: /\.(woff|woff2)$/,
        loader: "url?prefix=font/&limit=5000"
      },

      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },

      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },

      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },

      {
        test: /\.png/,
        exclude: /(images)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },

      {
        test: /\.png$/,
        include: /(images)/,
        loader: 'file-loader?name=/images/[name].[ext]'
      },

      {
        test: /\.ico$/,
        include: /(images)/,
        loader: "url-loader?limit=10000&mimetype=image/x-icon"
      },

      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?this=>window"
      },

      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?define=>false"
      }

    ]
  },
  devServer: {
    contentBase: "./client",
    noInfo: true,
    quiet: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.NoErrorsPlugin()  
  ]
};