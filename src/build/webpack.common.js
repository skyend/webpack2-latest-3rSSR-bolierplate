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
        filename : '[name].js',
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
            },


            {
                test : /\.scss$/,
                use : [
                    {
                        loader : 'style-loader',
                        options : {
                            sourceMap : config.isdev
                        }
                    },

                    {
                        loader : 'css-loader',
                        options : {
                            localIndentName : '[hash:base64]-[name]-[local]',
                            module : true,
                            sourceMap : config.isdev
                        }
                    },

                    // {
                    //     loader : 'postcss-loader',
                    //     options : {
                    //         sourceMap : config.isdev
                    //     }
                    // },

                    {
                        loader : 'sass-loader',
                        options : {
                            sourceMap : config.isdev,
                            includePath: path.resolve(__dirname, 'assets/styles')
                        }
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
        // new HTMLWebpackPlugin({
        //     filename : 'index.pug',
        //     template : './src/view/index.pug'
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

module.exports = options;

// export default options;