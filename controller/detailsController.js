const details = require('../service/details');

async function getDetails(ctx){
  let {id} = ctx.request.query;
  let data = await details.getDetails(id);
  return (ctx.response.body = data);
}

module.exports = {
  getDetails
}
















