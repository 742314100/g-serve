const Router = require('koa-router');
const controller = require('../controller/homeSwiperListController');
const router = new Router();

router.get('/homeSwiperList',controller.getHomeSwiperList);

module.exports = router;





