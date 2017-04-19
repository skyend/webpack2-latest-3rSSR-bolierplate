import server from '../server/main'
import config from '../config/default'

server.listen(config.port, function(){
    console.log(`Express Server started on ${config.port}.`);
});
