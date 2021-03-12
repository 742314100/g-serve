
//Koa2/router/router.js
const Router =require("koa-router")

const homeSwiperList = require('./homeSwiperList'); //首页

let router = new Router()

router.use(homeSwiperList.routes());

module.exports = router