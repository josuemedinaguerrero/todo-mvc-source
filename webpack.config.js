
const HtmlWebPackPlugin         = require('html-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const CopyPlugin                = require('copy-webpack-plugin');

module.exports = {
   mode: "development",
   optimization: {
      minimizer: [ new CssMinimizerWebpackPlugin() ]
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            exclude: /style\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },
         {
            test: /style\.css$/i,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader'
            ]
         },
         {
            test: /\.html$/i,
            use: [
               {
                  loader: 'html-loader',
                  options: { minimize: false }
               }
            ]
         },
         {
            test: /\.(png|svg|jpg|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     emitFile: true,
                     esModule: false,
                     name: '[name].[ext]',
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         filename: 'index.html',
         template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
         filename: '[name].css',
         ignoreOrder: false
      }),
      new CopyPlugin({
         patterns: [
            { from: 'src/assets', to: 'assets/' }
         ]
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin()
   ]
}
