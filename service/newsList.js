const allSqlAction = require('../lib/mysql');
const handle = require('../utils/handleNewsList');

async function getNewsList(){
  let sql = `select * from newsList`;
  return allSqlAction.allSqlAction(sql).then((res)=>{
    var data=handle.handleData(res);
    return { errorCode:0,msg:"成功",code:200,data:data}
  })
}

module.exports = {
  getNewsList
}

