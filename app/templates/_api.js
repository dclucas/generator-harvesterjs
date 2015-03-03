var harvester = require('harvesterjs');
var config = require('./config');

var options = {
    adapter: 'mongodb',
    connectionString: config.connectionString,
    inflect: true
};

// define 2 resources
// posts and comments
// analogue to the examples used on jsonapi.org
var harvesterApp = harvester(options)
    .resource('post', {
        title: String
    })
    .resource('comment', {
        body: String,
        post: 'post'
    });

module.exports = harvesterApp;