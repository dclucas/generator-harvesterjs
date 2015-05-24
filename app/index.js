'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob');

function copyDir(generator, path) {
  var srcRoot = generator.templatePath(path);
  var dstRoot = generator.destinationPath(path);
  var options = { 'cwd': srcRoot, 'dot': true };
  glob('*', options, function (er, files) {
    files.map(function(srcFile) {
      //console.log('Copying ' + srcRoot + srcFile + ' to ' + dstRoot + srcFile);
      generator.fs.copyTpl(
        srcRoot + srcFile,
        dstRoot + srcFile,
        { name: generator.name }
      );
    });
  });
}

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the impressive' + chalk.red('Harvesterjs') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
      }, {
        type: 'confirm',
        name: 'useWoodman',
        message: 'Would you like me to create Mocha unit tests?',
        default: true
      }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.useFig = props.useFig;

      done();
    }.bind(this));
  },
  scaffoldFolders: function(){
      this.mkdir('app');
      this.mkdir('app/models');
      this.mkdir('test');
  },
  writing: {
    all: function () {
      copyDir(this, '/');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
