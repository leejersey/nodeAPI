var fs = require('fs');

//创建文件夹
fs.mkdir('mydir',function(err){
    console.log(err);
});

//fs.mkdirSync("mydir");

//删除文件夹
//fs.rmdir('mydir',function(err){
//    console.log(err);
//});

//重命名
//fs.rename('mydir','mydir2',function(err){
//   console.log(err)
//});