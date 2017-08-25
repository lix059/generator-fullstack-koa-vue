const router =  require('koa-router')();
const works = require('../api/controllers/works/index.js');

router.use('/doctors', works.routes(), works.allowedMethods());

module.exports = router;