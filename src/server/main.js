import express from 'express';
import config from '../config/default';

let app = express();

app.get('/', function(_req, _res){
    _res.send("hello");
});

app.listen(config.port, function(){
    console.log(`Express Server started on ${config.port}.`);
});