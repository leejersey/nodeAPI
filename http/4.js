var http = require("http");

var server = http.createServer(function(req,res){
    //res.statusCode = 404;
    //res.end();

    if(req.url === "/user/1"){
        res.write("admin");
        res.write("\n logined");
    }else{
        res.write("user");
        res.write("\n logined");
    }

    res.end();
});

server.listen(3000);

