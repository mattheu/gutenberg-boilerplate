const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin('[name].css');

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					require( 'autoprefixer' ),
				],
			},
		},
		{
			loader: 'sass-loader',
			options: {
				includePaths: [ 'css' ],
				outputStyle: 'production' === process.env.NODE_ENV ?
					'compressed' : 'nested',
			},
		},
	],
};

module.exports = {
	entry : {
		editor: './js/editor.js',
		frontend: './js/frontend.js',
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							"transform-object-rest-spread",
							"transform-class-properties",
							[ "transform-react-jsx", {
								"pragma": "wp.element.createElement"
							} ]
						],
					}
				}
			},
			{
				test: /\.s?css$/,
				use: extractSass.extract( extractConfig ),
			},
		]
	},
	plugins: [
		extractSass
	],
	externals: {
		'jquery': 'jQuery',
		'react': 'React',
		'react-dom': 'ReactDOM',
		'react-dom/server': 'ReactDOMServer',
		'tinymce': 'tinymce',
		'moment': 'moment',
		'wp': 'wp',
	},
	stats: {
		colors: true,
	},
	devtool: 'source-map',
};
