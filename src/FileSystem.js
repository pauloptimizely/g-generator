const fs = require('fs');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const Logger = require('./Logger');

module.exports = class FileSystem {
  constructor() {
    this.logger = new Logger();
  }
  copyTpl(templatePath, dest, props) {
    let template = fs.readFileSync(templatePath).toString();
    let dir = dest.split('/')
    dir.pop()
    mkdirp.sync(dir.join('/'));
    this.logger.logCreate(dest)
    fs.writeFileSync(dest, ejs.render(template, props));
  }
}
