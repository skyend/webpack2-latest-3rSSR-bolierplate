// import path from 'path'
// import webpack from 'webpack'
// import HTMLWebpackPlugin from 'html-webpack-plugin'

var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var config = require('../config/default');



var options = {
    entry : {
        'bundle': [

            'react-hot-loader/patch',

            'webpack-hot-middleware/client??http://localhost:8080',

            'webpack/hot/only-dev-server',


            './src/index.js'
        ],
        'vendor' : 'moment'
    },

    output:{
        filename : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test :/\.js$/,
                exclude : /(node_modules)/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {}
                    }
                ]
            }
        ]
    },

    plugins : [

        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor'
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

module.exports = options;

// export default options;