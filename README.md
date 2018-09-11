# G

G is a faster implemenation of yeoman.

## Adding a generator

Add the path to your generator to `generator.config.js`

It should have the following format:

```js
{
  generatorName: {
    path: '/path/to/generator/dir',
  }
}
```

## Included Generators

### React

### CLI Usage

**Args**
- `c` - component name
- `t` - component type. Valid types are: `component`, `pure`, `container` (defaults to `component`)
- `d` - component's base directory

```
g react -c Button -t pure -d ./src
```

This will generate a `Button` pure component in the currect working directory's src folder

```
src/
  Button/
    Button.js
    Button.spec.js
    index.js
```
