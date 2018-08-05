const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const path = require('path')

const input = argv._[0];

const generatorMap = {
  react: {
    path: '../generators/react',
  },
};

const generator = generatorMap[input];
const Generator = require(generator.path);

const g = new Generator(generator);
g.run()
