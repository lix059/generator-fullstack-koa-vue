const Koa = require('koa');
const koaJson = require('koa-json');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const resource = require('koa-static');
const path = require('path');
const logger = require('koa-logger');
const config = require('./environment/index.js');
const ratelimit = require('koa-ratelimit')
const Redis = require('ioredis')
const app = new Koa();

onerror(app)
app.use(ratelimit({
  db: new Redis(config.db.redis),
  duration: 60000,
  errorMessage: 'request too many times per minute',
  id: (ctx) => ctx.headers['x-real-ip'],    //when you use nginx as proxy
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total'
  },
  max: 100
}))
app.use(async (ctx, next) => {
  console.log(ctx.path)
  if (ctx.path === '/uploadImage') {
    ctx.disableBodyParser = true       //not use bodyParser
  } 
  await next()
})
app.use(bodyParser({
  // formLimit: '3mb'
}))
app.use(koaJson())
app.use(resource(path.join(config.root, config.appPath)))
if (app.env === 'development') {
  app.use(logger())
}

module.exports = app