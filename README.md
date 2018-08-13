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

#### React

```
g react -c Button -t component -d /path/to/compoent/dir
```
