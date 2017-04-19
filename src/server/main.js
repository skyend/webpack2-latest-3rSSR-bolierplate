import express from 'express';
import config from '../config/default';

let app = express();

app.get('/', function(_req, _res){
    _res.send("hello222");
});


export default app;