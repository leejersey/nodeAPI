var http = require("http");

var server = http.createServer(function(req,res){
    console.log("have a server");
});

server.on("request",function(req,res){
   console.log("have a request2")
});

server.listen(3000);
