const newsList = require('../service/newsList');

async function getNewsList(ctx){
  let {page,size} = ctx.request.query;
  let data = await newsList.getNewsList(ctx,page,size);
  return (ctx.response.body = data);
}

module.exports = {
  getNewsList
}
















