const user = require("../service/user")

async function login(ctx){
 let {userName,passWord,ifLogin} = ctx.request.body;
 let data = await user.login(userName,passWord,ifLogin);
 return ctx.response.body = data
}

module.exports = {
  login
}
