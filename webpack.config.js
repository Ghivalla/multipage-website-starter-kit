// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Cleans the dist folder
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extracts CSS into files
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Minimize CSS
const TerserPlugin = require('terser-webpack-plugin'); // Minimize JS

// Define multiple HTML pages
const pages = ['index', 'about', 'contact'];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/assets/js/${page}.js`;
    return config;
  }, {}),

  output: {
    filename: 'js/[name].[contenthash].js', // Output filenames with content hash for caching
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: './', // Public URL of the output directory when referenced in a browser
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Transpile all .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into files
          'css-loader', // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]', // Output path and filename
            },
          },
        ],
      },
      {
        test: /\.html$/, // Handle HTML files
        use: [
          {
            loader: 'html-loader', // Export HTML as string, handles images
            options: { minimize: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), // Clean dist folder before each build
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: `${page}.html`, // Output filename
          template: `./src/templates/${page}.html`, // Template file
          chunks: [page], // Include only the corresponding JS and CSS
        })
    ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css', // Output CSS filenames with content hash
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin(), // Minimize JS
      new CssMinimizerPlugin(), // Minimize CSS
    ],
    splitChunks: {
      chunks: 'all', // Split vendor code into separate chunks
    },
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run dev server
    open: true, // Open browser on server start
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // For SPA routing, adjust if using multi-page
  },

  resolve: {
    extensions: ['.js', '.css'], // Resolve these extensions
  },
};
