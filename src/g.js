#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));

if (argv._.length < 1) {
  console.log('g [generator] [options]');
  process.exit(1);
}

const input = argv._[0];

const generatorConfig = require('../generator.config');

const generator = generatorConfig[input];
const Generator = require(generator.path);

const g = new Generator(generator, argv);
g.run()
