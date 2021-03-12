const homeSwiperList = require('../service/homeSwiperList');

async function getHomeSwiperList(ctx){
  let {page,size} = ctx.request.query;
  console.log('page:'+page)
  console.log('size:'+size)
  let data = await homeSwiperList.getHomeSwiperList(ctx,page,size);
  return (ctx.response.body = data);
}

module.exports = {
  getHomeSwiperList
}
















