var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './app/js/App.js',
    output: {
        path: './public',
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot', 'babel']
        }]
    }
};
