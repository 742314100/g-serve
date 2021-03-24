//Koa2/app.js
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");

const path = require('path')

//const Koa_Session = require("koa-session"); // 导入koa-session
// 配置
const session_signed_key = ["some secret hurr"]; // 这个是配合signed属性的签名key

const router = require("./router/router");

const bodyParser = require("koa-body");

const cors = require("koa2-cors");
var app = new Koa();
app.use(cors());

// 对于任何请求，app将调用该异步函数处理请求：
app.use(bodyParser());

app.use(router.routes());

console.log("项目启动http://82.156.109.184:3000");
console.log("项目启动http://localhost:3000");

app.listen(3000);
