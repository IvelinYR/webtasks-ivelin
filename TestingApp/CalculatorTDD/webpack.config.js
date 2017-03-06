const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/calc.js',],
    output: {
        filename: 'bundle.js',
        publicPath: "",
        path: debug ? path.join(__dirname, './build') : path.join(__dirname, './bin')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules | *.spec.js/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: "file-loader?limit=10000!img?progressive=true"
            },
            {
                test: /\.jpg$/,
                use: "file-loader?name=/assets/[name].[ext]"
            }

        ]
    },
    plugins: debug ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),

        ],
};