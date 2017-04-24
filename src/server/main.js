import express from 'express';
import webpack from 'webpack';
import fs from 'fs';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHMRMiddleware from 'webpack-hot-middleware';
import React from 'react';
import timeout from 'connect-timeout'; //express v4
import _ from 'lodash';

import RootComponent from '../app';



import config from '../config/default';
import webpackConfig from '../build/webpack.common';

let app = express();

app.use(timeout(120000));
app.use(haltOnTimedout);

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

function haltOnTimedout(req, res, next){
    if (!req.timedout) next();
}

app.use('/', express.static(__dirname + '/../public/'));





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


let Application = React.createFactory(RootComponent);
// let template = fs.readFileSync( path.join(__dirname, '../view/index.pug'))
app.get('*', function(req, res){
    let component = Application({
        path : req.path
    });

    res.render('index', {
        scripts : [
            'vendor.js',
            'bundle.js'
        ]
    });
});


export default app;