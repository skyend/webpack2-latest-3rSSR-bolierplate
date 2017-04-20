var config =  {
    port : process.env.PORT || 8080,
}


config['SERVER_URL'] = '0.0.0.0:'+config.port;

export default  config;