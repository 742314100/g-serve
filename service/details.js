const allSqlAction = require('../lib/mysql');

async function getDetails(id){
  let sql = `select * from details where id = ${id} `;
  return allSqlAction.allSqlAction(sql).then((res)=>{
    return { errorCode:0,msg:"成功",code:200,data:res}
  })
}

module.exports = {
  getDetails
}

