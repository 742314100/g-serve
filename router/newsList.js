const Router = require('koa-router');
const controller = require('../controller/newsListController');
const router = new Router();

router.get('/newsList',controller.getNewsList);

module.exports = router;





