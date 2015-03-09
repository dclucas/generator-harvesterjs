'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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
        name: 'useBluebird',
        message: 'Would you like to enable bluebird (promises) support?',
        default: true
      }
      /*, {
        type: 'confirm',
        name: 'useWoodman',
        message: 'Would you like to enable woodman logging?',
        default: true
      },{
        type: 'confirm',
        name: 'useFig',
        message: 'Would you like to enable fig?',
        default: false
      }*/];

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

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
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
