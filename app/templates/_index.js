var harvesterApp = require('./api');
var config = require('./config');

harvesterApp.listen(config.port, onListen);

function onListen() {
    console.log('listening on port ' + config.port);
}