const webpack = require('webpack')
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new extractTextPlugin('app.bundle.css')

const config = {
	context: path.resolve(__dirname, 'src'), // __dirname is the root of the project
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		inline: true
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, 'src')
		]
	},
	module: {
		rules: [
			{
				test: /\.js/, // check for all js files
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['es2015', { modules: false }]
						]
					}
				}]
			},
			{
				test: /\.scss$/, // check for all sass files
				exclude: /node_modules/,
				//loader: extractCSS.extract(['css-loader', 'sass-loader']) // creates a separate CSS file
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg)$/, // check for all png and jpg files
				use: [{
					loader: 'url-loader',
					options: { limit: 10000 } // convert images < 10k to base64 strings
				}]
			}
		],
	},
	plugins: [
		extractCSS,
		new webpack.NamedModulesPlugin()
	],
	devtool: "eval-source-map"
}

if (process.env.NODE_ENV === "production") {
	config.devtool = "";
}

module.exports = config;