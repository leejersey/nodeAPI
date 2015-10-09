var http = require("http");


var handlePaths=[];

/**
 * 初始化路由配置数组
 */
function initRotute(){
    handlePaths.push('/');
    handlePaths.push('/login');
    handlePaths.push('/regist');
}

/**
 * 处理路由的逻辑
 */
function rotuteHandle(path){
    //遍历路由配置信息
    for(var i in handlePaths){
        if(handlePaths[i] == path){
            console.log('获取到相同的路由信息：',handlePaths[i])
            return handlePaths[i];
        }
    }

    return '404 Not Found'
}

/**
 * 服务器回调函数
 */
function onRequest(req,res){
    var requestPath = req.url;
    console.log("请求的路径是：",requestPath);

    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

    var resContent = rotuteHandle(requestPath);

    res.write('hello node');

    res.write(resContent);

    res.end();
}

var server = http.createServer(onRequest);

server.listen(3000);

initRotute();

console.log("server start");
