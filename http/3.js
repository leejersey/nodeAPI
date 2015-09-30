var http = require("http");

var server = http.createServer(function(req,res){
    console.log("url",req.url);
    console.log("method",req.method);
    console.log("headers",req.headers);
});

server.listen(3000);
