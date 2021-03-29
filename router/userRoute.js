const Router = require("koa-router")
const controller = require("../controller/userController")
const router = new Router()

router.post('/login',controller.login)

module.exports = router