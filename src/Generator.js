const FileSystem = require('./FileSystem');
const Logger = require('./Logger');
const inquirer = require('inquirer');
const path = require('path');

// TODO: Create a Generator factory to inject dependencies

module.exports = class Generator {
  constructor(config) {
    this.config = config;
    this.inquirer = inquirer;
    this.fs = new FileSystem();
    this.logger = new Logger();
  }

  templatePath(tmplPath) {
    return path.join(__dirname, this.config.path, 'templates', tmplPath);
  }

  destinationPath(destPath) {
    return destPath;
  }

  log(...args) {
    this.logger.log.apply(this.logger, args)
  }

  logError(...args) {
    this.logger.logError.apply(this.logger, args)
  }

  prompt(questions) {
    return this.inquirer.prompt(questions)
  }

  prompting() {
    return Promise.resolve();
  }

  writing() {}

  run() {
    this.prompting()
    .then(this.writing.bind(this))
    .catch(this.logger.logError)
  }
}
