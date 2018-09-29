#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
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

const g = new Generator(generator, argv);
g.run()
