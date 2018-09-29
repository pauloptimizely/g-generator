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

- [g-react]()

## Creating a generator

Goman generators have `g-` prefix.

```
npm install -g g-your-new-generator
```

than call

```
g your-new-generator
```

The prefix can be changed by updating `~/.g/.g.config.json`

```js
{
  "prefix": "g"
}
```
