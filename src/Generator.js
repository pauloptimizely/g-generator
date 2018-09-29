const inquirer = require('inquirer');
const path = require('path');

// TODO: Create a Generator factory to inject dependencies

module.exports = class Generator {
  constructor(deps, argv) {
    this.fs = deps.fs;
    this.logger = deps.logger;
    this.argv = argv;
    this.generatorName = argv._[0];
    this.inquirer = inquirer;
  }

  templatePath(tmplPath) {
    let base = require.resolve(this.generatorName);
    base.pop();
    return path.join(base, 'templates', tmplPath);
  }

  destinationPath(destPath) {
    return destPath;
  }

  prompt(questions) {
    return this.inquirer.prompt(questions)
  }

  prompting() {
    return Promise.resolve();
  }

  writing() {}

  run() {
    return this.prompting()
    .then(this.writing.bind(this))
    .catch(this.logger.logError)
  }
}
