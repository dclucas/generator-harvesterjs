'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var exec = require('child_process').exec;
var appName = 'test123';

describe('harvesterjs:app', function () {
  it('can be imported without blowing up', function() {
      var app = require('../app');
      assert(app !== undefined);
  });
  
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        name: appName
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      'test/',
      'app/',
      'app/index.js',
      'app/config.js',
      'app/api.js',
      'app/models/',
      'app/models/post.js',
      'app/models/comment.js'
    ]);
  });
  
  it('applies template changes correctly', function() {
      assert.fileContent('package.json', '"name": "' + appName + '"');
      assert.fileContent('app/config.js', 'mongodb://127.0.0.1:27017/' + appName);
  });
  
  it('runs npm install successfully @slow', function (done) {
    this.timeout(90000);
    exec('npm install', function(error, stdout, stderr) {
      if (error) { console.log('Error: ' + error); throw error; }
        done();
    });
  });

  
  it('runs npm test successfully @slow', function (done) {
    this.timeout(90000);
    exec('npm test', function(error, stdout, stderr) {
      if (error) { console.log('Error: ' + error); throw error; }
        done();
    });
  });
});
