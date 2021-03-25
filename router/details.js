const Router = require('koa-router');
const controller = require('../controller/detailsController');
const router = new Router();

router.get('/details',controller.getDetails);

module.exports = router;





