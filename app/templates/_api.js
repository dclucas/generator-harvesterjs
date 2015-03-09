var harvester = require('harvesterjs');
var config = require('./config');
var requireDir = require('require-dir');
var models = requireDir('./models');

var options = {
    adapter: 'mongodb',
    connectionString: config.connectionString,
    inflect: true
};

var harvesterApp = harvester(options);

for (var m in models) {
    harvesterApp.resource(m, models[m]);
}

module.exports = harvesterApp;