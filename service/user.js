const allSqlAction = require('../lib/mysql');
const uuId = require('../utils/uuId');

//校验用户名是否已经注册
async function checkUserName(userName){
  sql = `select * from users where userName = '${userName}'`;
  return allSqlAction.allSqlAction(sql).then((res)=>{
    return res;
  })
}
//注册和登录
async function login(userName,passWord,ifLogin){
  let uuIdData=uuId.uuId();
  let sql ='';
  if(ifLogin=='注册'){
    let checkUserNameResult =await checkUserName(userName);
    if(checkUserNameResult.length != 0){
      return { retCode:'N',msg:'该用户已经注册！',code:200}
    }else{
      sql = `insert into users (userId, userName, password) values ('${uuIdData}','${userName}','${passWord}')`;
    }
  }else{
    sql = `select * from users where userName = '${userName}' and passWord = '${passWord}'`;
  }
  return allSqlAction.allSqlAction(sql).then((res)=>{
    let result =''
    if(ifLogin=='注册'){
      result = res.affectedRows
    }else{
      result = res[0]
    }
    if(result){
      return { retCode:'Y',msg:ifLogin+'成功',code:200,data:result}
    }else{
      return { retCode:'N',msg:'用户名或者密码不正确',code:200}
    }
  })
}

module.exports={
  login
}
