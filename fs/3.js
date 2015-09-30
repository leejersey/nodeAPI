var fs = require('fs');

//写文件
//fs.open("new.txt","w",function(err,fd){
//    var buf = new Buffer("你好啊");
//    fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){
//
//    })
//})

fs.writeFile("new.txt","javascript很赞",function(err){
    if(!err){
        console.log("写入成功!")
    }
});

//追加
fs.appendFile("new.txt","good");

//读文件
//var data = fs.readFileSync("new.txt");
//console.log(data.toString());

fs.open("new.txt","r",function(err,fd){
    var buf = new Buffer(8);
    fs.read(fd,buf,0,buf.length,0,function(err,bytesRead,buffer){
        console.log(buffer.toString());
    })
})