//client端
var net = require('net');
var fs = require('fs');

var filedata = fs.readFileSync(__dirname+"/1.txt");

var socket = net.connect(8124,"localhost",function(){
    socket.write(filedata);
})

socket.on('data',function(data){
    //服务器发来的信息
    console.log(data.toString());
})