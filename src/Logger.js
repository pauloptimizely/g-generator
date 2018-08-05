const chalk = require('chalk');

module.exports = class Logger {
  _log(args, prefix) {
    args.unshift(prefix);
    console.log.apply(console, args)

  }
  log(...args) {
    let prefix = chalk.gray('log');
    this._log(args, prefix);
  }

  logError(...args) {
    let prefix = chalk.red('error');
    this._log(args, prefix);
  }

  logCreate(...args) {
    let prefix = chalk.green('created');
    this._log(args, prefix);
  }
}

