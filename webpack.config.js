const path = require("path");

const webpack = require("webpack");

const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
	context: path.resolve(__dirname, "src"),
	output: path.resolve(__dirname, "dist"),

	entry: "./main",
	bundle: `./static/js/[name].js`,
};

module.exports = {
	context: PATHS.context,

	entry: {
		main: PATHS.entry,
	},

	output: {
		path: PATHS.output,
		filename: PATHS.bundle,
	},

	resolve: {
		extensions: [".webpack.js", ".web.js", ".tsx", ".ts", ".jsx", ".js", ".less", ".json", "*"],
	},

	devServer: {
		contentBase: false,
		inline: true,
		stats: "errors-only",
		host: "127.0.0.1",
		port: 3200,
		public: "127.0.0.1:3200",
		publicPath: "/",
	},

	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				use: "source-map-loader",
			},
			{
				enforce: "pre",
				test: /\.ts$/,
				use: [
					{
						loader: "tslint-loader",
						options: {
							typeCheck: true,
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					"awesome-typescript-loader",
				],
			},
		],
	},

	devtool: "cheap-module-eval-source-map",

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: false,
			template: require("html-webpack-template"),
			appMountId: "mApp",
		}),
	],
};
