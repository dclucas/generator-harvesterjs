'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require("glob");

function copyDir(generator, path) {
  var options = { "cwd": generator.templatePath(path) };
  glob("_", options, function (er, files) {
    files.map(function(f) { console.log(f) });
  });
  /*
  var files = fs.readdir(generator.templatePath(path), function(file) {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.name }
      );
  });
  */
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
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
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
      this.mkdir("app");
      this.mkdir("app/models");
      this.mkdir("test");
  },
  writing: {
    root: function () {
      copyDir(this, "/");
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.name }
      );
    },

    app: function () {
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('app/index.js')
      );
      this.fs.copy(
        this.templatePath('_api.js'),
        this.destinationPath('app/api.js')
      );
      this.fs.copyTpl(
        this.templatePath('_config.js'),
        this.destinationPath('app/config.js'),
        { name: this.name }
      );
    },

    models: function () {
      this.fs.copy(
        this.templatePath('_post.json'),
        this.destinationPath('app/models/post.json')
      );
      this.fs.copy(
        this.templatePath('_comment.json'),
        this.destinationPath('app/models/comment.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('_.jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
      //, npm: false
    });
  }
});
