let handleData = (data) => {
  var resArr=data;
  var arr=[];
  var result=[];
  var contentArr=[]
  for(var i = 0;i < resArr.length;i++){
    contentArr.push(resArr[i].content)
    if(arr.indexOf(resArr[i].title) > -1){

    }else{
      arr.push(resArr[i].title)
    }
  }
  var arr1=[]
  for(var i=0;i<arr.length;i++){
    var obj={}
    obj.title=arr[i]
    arr1.push(obj)
  }

  var ll=resArr.length / arr1.length;
  for(var i=0;i<contentArr.length;i+=ll){
    var obj={}
    obj.content=contentArr.slice(i,i+ll)
    result.push(obj);
  }

  var combineArr=[];
  for(var i=0;i<arr1.length;i++){
    combineArr.push(Object.assign(arr1[i], result[i]))
  }
  return combineArr;
};

module.exports = {
  handleData
};
