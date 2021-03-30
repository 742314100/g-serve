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

app.listen(3000);


//CREATE USER '742314100'@'%' IDENTIFIED BY 'l4035564121';
//grant all privileges on *.* to '742314100'@'%';
//FLUSH PRIVILEGES;

//GRANT ALL PRIVILEGES ON *.* TO '742314100'@'%' IDENTIFIED BY 'l4035564121' WITH GRANT OPTION;
