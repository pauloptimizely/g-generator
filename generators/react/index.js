const Generator = require('../../src/Generator')
const inquirerDirectory = require('inquirer-directory');
const toSlugCase = require('to-slug-case')

const help = `

g react -c [name] -t [type] -d [baseDir]

name - component name
type - component type
  * component
  * pure
  * container
baseDir - component's base directory
`

module.exports = class extends Generator {
  constructor(opts, argv) {
    super(opts, argv);
    this.inquirer.registerPrompt('directory', inquirerDirectory);
    this.props = {}
  }

  mapArgsToProps() {
    this.props.componentName = this.argv.c;
    this.props.componentType = this.argv.t || 'component';
    this.props.componentDir = this.argv.d;

    return Promise.resolve(() => {
      this.props = Object.assign({}, this.props, props)
    });
  }

  validateProps() {
    const { componentName, componentType, componentDir } = this.props
    let errors = [];

    if (!componentName) errors.push('Invalid component name.');
    if (!componentType) errors.push('Invalid component type.');
    if (!componentDir) errors.push('Invalid component base directory.');

    this.props.errors = errors;
  }

  prompting() {
    return this.mapArgsToProps()
      .then(this.validateProps.bind(this));
  }

  writing() {
    if (this.props.errors.length > 0) {
      return this.logError(`${ this.props.errors.join(' ') } ${ help }`);
    }

    const name = this.props.componentName;

    const dir = this.props.componentDir || process.cwd();
    const type = ({
      component: 'component',
      container: 'container',
      pure: 'pure-component'
    })[this.props.componentType]

    if (!type) {
      return this.logError(`Invalid type of ${type}. ${help}`);
    }

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
      { ...this.props, componentSlugName: toSlugCase(this.props.componentName) }
    );

  }
}
