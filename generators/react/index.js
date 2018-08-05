const Generator = require('../../src/Generator')
const inquirerDirectory = require('inquirer-directory');
const toSlugCase = require('to-slug-case')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.inquirer.registerPrompt('directory', inquirerDirectory);
    this.props = {}
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component\'s name?',
        required: true,
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component would you like?',
        choices: [
          'Component',
          'Container',
          'Pure Component'
        ],
        default: 'Component'
      },
      {
        type: 'directory',
        name: 'componentDir',
        message: 'Where is your component located?',
        basePath: process.cwd(),
      }
    ];

    return this.prompt(prompts).then(props => { this.props = props });
  }

  writing() {
    const name = this.props.componentName;
    if (!name) {
      this.logError('Component name is required');
      return;
    }

    const dir = this.props.componentDir || process.cwd();
    const type = ({
      'Component': 'component',
      'Container': 'container',
      'Pure Component': 'pure-component'
    })[this.props.componentType]

    this.fs.copyTpl(
      this.templatePath('./index.tmpl.js'),
      this.destinationPath(`${dir}/${name}/index.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('./component.tmpl.scss'),
      this.destinationPath(`${dir}/${name}/${toSlugCase(name)}.scss`),
      {componentName: toSlugCase(this.props.componentName) }
    );

    this.fs.copyTpl(
      this.templatePath('./component.tmpl.spec.js'),
      this.destinationPath(`${dir}/${name}/${name}.spec.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(`./${type}.tmpl.js`),
      this.destinationPath(`${dir}/${name}/${name}.js`),
      this.props
    );

  }
}