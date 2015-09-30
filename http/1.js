var http = require("http");

var server = http.createServer(function(req,res){
    console.log("have a server");
});

server.listen(3000);