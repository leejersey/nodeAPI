var http = require("http");

var url = require("url");

var server = http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200);
    res.write("hello node");
    res.end();
});

server.listen(3000);
