var http = require("http");

var url = require("url");

var qs = require("querystring");

//url:localhost:3000?name=lee&age=20
var server = http.createServer(function(req,res){
    console.log(req.url);

    var arg = url.parse(req.url).query;
    var nameValue = qs.parse(arg)['name'];

    console.log('name: '+nameValue);

    var arg2 = url.parse(req.url,true).query;

    console.log('age: '+arg2.age);

    res.writeHead(200);
    res.write("hello node");
    res.end();
});

server.listen(3000);
