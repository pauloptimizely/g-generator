const fs = require('fs');
const ejs = require('ejs');
const mkdirp = require('mkdirp');

module.exports = class FileSystem {
  constructor(deps) {
    this.logger = deps.logger;
    this.fs = fs;
    this.mkdirp = mkdirp;
  }

  copyTpl(templatePath, dest, props) {
    let template = this.fs.readFileSync(templatePath).toString();
    let dir = dest.split('/')
    dir.pop()
    this.mkdirp.sync(dir.join('/'));
    this.logger.logCreate(dest)
    this.fs.writeFileSync(dest, ejs.render(template, props));
  }
}
