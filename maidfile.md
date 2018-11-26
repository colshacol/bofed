## start

```bash
yarn maid start-client & yarn maid start-server
```

# Client Scripts

## start-client

Starts the client in dev mode with HMR.

Run task `clean-client` before this.

```bash
babel-node node_modules/.bin/webpack-serve --config ./webpack/client/webpack.dev.js
```

## build-client

Builds the client for production.

```bash
babel-node node_modules/.bin/webpack --config ./webpack/client/webpack.prod.js
```

## clean-client

Remove files produced by building client for production.

```bash
rm -f public/bundle.js public/bundle.js.map public/index.html
```

# Server Scripts

## start-server

Kills ports, builds the server(s), and starts the server(s). (Watches file changes with nodemon.)

Run tasks `build-server` `kill-ports` before this.

```bash
./node_modules/.bin/nodemon --watch src/server --exec node server
```

## start-static-service

Starts the static file server for `./public`.

```bash
kill-port 8999 && serve -l 8999 ./public
```

## start-foo-service

Starts the static file server for `./public`.

```bash
micro ./server/services/foo --port 8001
```

## build-server

```bash
babel ./src/server --out-dir ./server
```

# Helper Scripts

## test

```bash
jest
```

## kill-ports

```bash
kill-port 8000 8001 8999
```
