# G aka Goman

G aka Goman is a faster implemenation of yeoman.

```
sudo npm install -g goman
```

cli usage
```
g [generator] [options]
```

## Built-in generators

- [go-react](https://github.com/pauloptimizely/go-react)

## Creating a generator

Goman generators have `go-` prefix.

```
npm install -g go-your-new-generator
```

than call

```
g your-new-generator
```

The prefix can be changed by updating `~/.g/.g.config.json`

```js
{
  "prefix": "go"
}
```
