var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry : {
		editor: './js/src/editor.js',
		frontend: './js/src/frontend.js'
	},
	output: {
		path: path.resolve( __dirname, 'js/build' ),
		filename: '[name].bundle.js'
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
			}
		]
	},
	externals: {
		'jquery': 'jQuery',
		'react': 'React',
		'react-dom': 'ReactDom',
		'wp': 'wp',
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
