## start

Starts webpack/webpack-serve in watch mode.

```bash
babel-node node_modules/.bin/webpack-serve --config ./webpack/client/webpack.dev.js
```

## start-server

```bash
babel-node node_modules/.bin/node-hot --config ./webpack/server/webpack.server.js
```

## build-server

```bash
babel ./src/server --out-dir ./server
```

## build

Builds the project for production.

```bash
babel-node node_modules/.bin/webpack --config ./webpack/client/webpack.dev.js
```

## test

```bash
jest
```
