const log_debug = require('../../../helper.js').log_debug;
const _ = require('underscore');
const Doctor = require('../../models/work.model.js');

exports.get = async (ctx) => {
  log_debug('get method');
  let results = await ctx.execSql('select * from user');
  ctx.body = results;
}

exports.index = async function(ctx){
  let results = await Doctor.getAll();
  ctx.body = results;
};

