import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHMRMiddleware from 'webpack-hot-middleware';
var timeout = require('connect-timeout'); //express v4


import config from '../config/default';
import webpackConfig from '../build/webpack.common';

let app = express();

app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
    if (!req.timedout) next();
}

app.use('/', express.static(__dirname + '/../static/'));

if( process.env.NODE_ENV === 'development' ){
    console.log("Server is running on development mode.");
    let compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        hot : true,
        stats: {
            colors: true,
        },
        historyApiFallback: true,
    }));

    app.use(webpackHMRMiddleware(compiler))
}

export default app;