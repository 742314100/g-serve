const allSqlAction = require('../lib/mysql');

async function getHomeSwiperList(){
  let sql = `select * from homeSwiperList`;
  return allSqlAction.allSqlAction(sql).then((res)=>{
    return { errorCode:0,msg:"成功",code:200,deta:res}
  })
}

module.exports = {
  getHomeSwiperList
}







