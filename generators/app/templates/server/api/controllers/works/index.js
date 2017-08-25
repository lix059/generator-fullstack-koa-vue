const router = require('koa-router')();
const controller = require('./works.controller.js');
const auth = require('../../../auth');

router.get('/user', auth.authUser, controller.get);
router.get('/',    controller.index);


module.exports = router;