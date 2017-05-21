var webpack = require('webpack');

var config = {
    context: __dirname + '/src', // __dirname is the root of the project
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/src'
    },
    module: {
        rules: [
            {
                test: /\.js/, // check for all js files
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ]
    },
    devtool: "eval-source-map"
}

if (process.env.NODE_ENV === "production") {
    config.devtool = "";
}

module.exports = config;
