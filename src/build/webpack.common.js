// import path from 'path'
// import webpack from 'webpack'
// import HTMLWebpackPlugin from 'html-webpack-plugin'

var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');




var options = {
    entry : {
        'bundle': './src/index.js',
        'vendor' : 'moment'
    },

    output:{
        filename : '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor'
        }),

        new HTMLWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html'
        })
    ]
}

module.exports = options;

// export default options;