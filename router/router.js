
//Koa2/router/router.js
const Router =require("koa-router")

const homeSwiperList = require('./homeSwiperList'); //首页
const newsList = require('./newsList'); //新闻列表（包括公告活动攻略）
const details = require('./details');//详情

let router = new Router()

router.use(homeSwiperList.routes());
router.use(newsList.routes());
router.use(details.routes());

module.exports = router