const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const outputDirectory = "dist";

module.exports = {
	entry: "./src/client/index.js",
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader?limit=100000"
			}
		]
	},
	devServer: {
		port: 3000,
		open: true,
		quiet: true,
		historyApiFallback: true,
		proxy: {
			"/api": "http://localhost:8080"
		}
	},
	node: {
		fs: 'empty'
	},
	plugins: [
		new CleanWebpackPlugin([outputDirectory]),
		new Dotenv(),
		new FriendlyErrorsWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			favicon: "./public/favicon.ico"
		})
	]
};
