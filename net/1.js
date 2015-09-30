//server端
var net = require("net");
var server = net.createServer();

server.on("data",function(data){
    //当接受的数据大于1M时,会杀死socket
    if(socket.bytesRead>1000*1000){
        socket.pause();
        socket.write("数据量太大,3秒内自动关闭连接");
        setTimeout(function(){
            scoket.destroy();
        },3000);
    }
})

server.listen(8124,function(){
    console.log("服务器已启动");
});