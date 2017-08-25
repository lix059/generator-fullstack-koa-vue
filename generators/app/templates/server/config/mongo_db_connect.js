
/**
 * dependencies
 */

const mongoose = require('mongoose');
const config = require('./config.js');

if (!config.db.mongo.uri) throw 'Must set config environment variable'
mongoose.connect(config.db.mongo.uri);

mongoose.connection.on('connected', () =>
  console.log('mongo connection open')
)

mongoose.connection.on('error', err => {
  throw `MongoDB connection error: ${err}`
})

mongoose.connection.on('disconnected', () =>
  console.error('mongo connection disconnected')
)

// ^C / kill -SIGINT
process.on('SIGINT', () =>
  mongoose.connection.close(() =>
    process.exit(
      0,
      console.log('mongo connection disconnected through app termination')
    )
  )
)

module.exports = mongoose.connection;
