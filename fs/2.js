var fs = require('fs');

//查看文件
fs.readdir('.',function(err,files){
    console.log(files);
})