#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const Logger = require('../src/Logger')
const FileSystem = require('../src/FileSystem')
const fs = require('fs');

if (argv._.length < 1) {
  console.log('g [generator] [options]');
  process.exit(1);
}

const input = argv._[0];

let generatorConfig = {
  prefix: 'g',
}

try {
  generatorConfig = require('~/.g/.g.config.json');
} catch (error) {
}

const gmodule = `${ generatorConfig.prefix }-${ input }`;

const Generator = require(gmodule);
const logger = new Logger();
const fileSytem = new FileSystem({ logger })

const g = new Generator({
  logger,
  fs: fileSytem,
}, argv);

g.run()
