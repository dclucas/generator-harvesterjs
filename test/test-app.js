'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var exec = require('child_process').exec;


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
        name: 'test123'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      'app/',
      'app/models/',
      'test/',
      'app/index.js',
      'app/config.js',
      'app/api.js'
    ]);
  });
  
  it('runs npm install successfully', function (done) {
    this.timeout(90000);
    exec('npm install', function(error, stdout, stderr) {
      if (error) { console.log('Error: ' + error); throw error; }
        done();
    });
  });
  
});
