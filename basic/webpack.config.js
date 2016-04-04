var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './app/App.js',
	output: {
		filename: "public/bundle.js",
		publicPath: "/"
	},
	devServer: {
		inline: true,
		contentBase: './public'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
	],
	externals: {
		"react":"React",
		"react-dom": "ReactDOM",
		"react-router": "ReactRouter",
		"griddle-react": "Griddle",
		"underscore": "_"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react','es2015']
				}
			},
			{test: /\.css/, loader: 'style-loader!css-loader'},
		    { test: /\.png$/, loader: "url-loader?limit=100000" },
		    { test: /\.jpg$/, loader: "file-loader" },
		    {
		        test: /\.less$/,
		        loader: "style!css!less"
		    }
		]
	}
};