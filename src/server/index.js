import koa from 'koa'
import http from 'http'
import dayjs from 'dayjs'

const logger = (options) => {
  return async (context, next) => {
    console.log(`${dayjs().format('hh:MMa')} ∞ new request: ${context.path}`)
    await next()
  }
}

export const listen = (server, port) => {
  server.listen(port, (err) => {
    if (err) throw new Error(err)
    console.log(`Listening on port: https://localhost:${port}/`)
  })
}

const main = async () => {
  const app = new koa()
  app.use(logger())

  listen(http.createServer(app.callback()), 4001)
}

main()
