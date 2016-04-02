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
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
