'use strict';

var fs = require('fs');
var harvester = require('harvesterjs');
var config = require('./config');
var options = {
    adapter: 'mongodb',
    connectionString: config.connectionString,
    inflect: true
};

var harvesterApp = harvester(options);

function requireModel(resourceName) {
  require('./models/' + resourceName)(harvesterApp);
}

function loadFile(fileName) {
  var f = fileName.match( /(.*)\.js/);
  if (f !== null) {
    requireModel(f[1]);
  }
}

var m = fs.readdirSync('./app/models');
m.map(loadFile);

module.exports = harvesterApp;
