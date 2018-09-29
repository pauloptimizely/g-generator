const inquirer = require('inquirer');
const path = require('path');

// TODO: Create a Generator factory to inject dependencies

module.exports = class Generator {
  constructor(props) {
    this.fs = props.fs;
    this.logger = props.logger;
    this.argv = props.argv;
    this.generatorName = props.generatorName;
    this.inquirer = inquirer;
  }

  templatePath(tmplPath) {
    let modPath = require.resolve(this.generatorName);
    let base = modPath.split('/')
    base.pop();
    console.log('path', path.join(base.join('/'), 'templates', tmplPath));
    return path.join(base.join('/'), 'templates', tmplPath);
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
