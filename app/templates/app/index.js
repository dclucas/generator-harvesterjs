'use strict';

var harvesterApp = require('./api');
var config = require('./config');

function onListen() {
    console.log('listening on port ' + config.port);
}

harvesterApp.listen(config.port, onListen);
