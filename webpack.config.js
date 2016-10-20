const { resolve } = require('path');
const { DefinePlugin, optimize, HotModuleReplacementPlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const APP = resolve(__dirname, 'app');

module.exports = {
	context: APP,
	entry: {
		app: ['index']
	},

	output: {
		path: resolve(__dirname, './public'),
		filename: 'bundle.[name].[hash].js'
	},

	plugins: [
		new DefinePlugin({ ENV: `"${process.env.NODE_ENV}"` }),
		new optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new ExtractTextPlugin('screen.css', { allChunks: true }),
		new HtmlWebpackPlugin({ template: 'index.html' }),
		new CleanWebpackPlugin(['public']),
		new HotModuleReplacementPlugin()
	],

	devtool: 'eval',
	resolve: {
		root: APP,
		alias: {
			app: 'app'
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: APP,
				loader: 'ng-annotate!babel?presets[]=es2015&plugins[]=transform-runtime'
			}, {
				test: /\.html$/,
				include: APP,
				exclude: resolve(APP, 'index.html'),
				loader: 'ngtemplate!html'
			}, {
				test: /\.scss$/,
				include: resolve(APP, 'styles'),
				loader: process.env.NODE_ENV === 'production' ?
					ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader', 'sass-loader' ]) :
					'style-loader!css-loader!postcss-loader!sass-loader'
			}
		]
	},

	postcss: () => [ autoprefixer ]
}
