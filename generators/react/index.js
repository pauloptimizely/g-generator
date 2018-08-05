const Generator = require('../../src/Generator')
const inquirerDirectory = require('inquirer-directory');
const toSlugCase = require('to-slug-case')

module.exports = class extends Generator {
  constructor(opts, argv) {
    super(opts, argv);
    this.inquirer.registerPrompt('directory', inquirerDirectory);
    this.props = {}
  }

  prompting() {
    if (this.argv.c) this.props.componentName = this.argv.c;
    if (this.argv.t) this.props.componentType = this.argv.t;
    if (this.argv.d) this.props.componentDir = this.argv.d;

    let prompts = []

    if (!this.props.componentName) {
      prompts.push({
        type: 'input',
        name: 'componentName',
        message: 'What is your component\'s name?',
        required: true,
      });
    }

    if(!this.props.componentType) {
      prompts.push({
        type: 'list',
        name: 'componentType',
        message: 'What type of component would you like?',
        choices: [
          'component',
          'container',
          'pure'
        ],
        default: 'Component'
      });
    }

    if (!this.props.componentDir) {
      prompts.push({
        type: 'directory',
        name: 'componentDir',
        message: 'Where is your component located?',
        basePath: process.cwd(),
      });
    }

    return this.prompt(prompts).then(props => {
      this.props = Object.assign({}, this.props, props)
    });
  }

  writing() {
    const name = this.props.componentName;
    if (!name) {
      this.logError('Component name is required');
      return;
    }

    const dir = this.props.componentDir || process.cwd();
    const type = ({
      component: 'component',
      container: 'container',
      pure: 'pure-component'
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