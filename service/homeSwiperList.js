const allSqlAction = require('../lib/mysql');
const handle = require('../utils/handle');

async function getHomeSwiperList(){
  let sql = `select * from homeSwiperList`;
  return allSqlAction.allSqlAction(sql).then((res)=>{
    var combineArr=handle.handleData(res);
    return { errorCode:0,msg:"成功",code:200,data:combineArr}
  })
}

module.exports = {
  getHomeSwiperList
}
