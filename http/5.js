var http = require("http");

http.get("http://www.baidu.com",function(res){
    console.log("got response: "+res.statusCode);

}).on("error",function(e){
    console.log("got error: "+ e.message);
});