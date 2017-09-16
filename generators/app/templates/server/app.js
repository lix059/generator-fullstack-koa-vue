const app = require('./config/koa.js');
const config = require('./config/environment/index.js');
const session = require('koa-session')
const redisStore = require('koa-redis');
const query = require('./config/mysql-async.js');
const http = require('http');
const fs = require('fs');
const path = require('path');
const mongo = require('./config/mongo_db_connect.js');

app.keys = ['keys', 'keykeys'];
app.use(session({
  key: 'koa:sess',
  maxAge: 8000000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  store: redisStore(config.db.redis)
}, app));

app.use(async(ctx, next) => {
  ctx.execSql = query;
  await next();
});

// routes
fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
    if (~file.indexOf('.js')) app.use(require(path.join(__dirname, 'routes', file)).routes());
});

app.use(function (ctx, next) {
   ctx.redirect('/404.html');
});

app.on('error', (error, ctx) => {
  console.log('something error ' + JSON.stringify(ctx.onerror))
  ctx.redirect('/500.httml');
})

http.createServer(app.callback())
	.listen(config.port)
	.on('listening', function () {
	  console.log('server listening on: ' + config.port)
	})