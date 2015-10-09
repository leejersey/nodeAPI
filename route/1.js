var http = require("http");


var handlePaths=[];

/**
 * ��ʼ��·����������
 */
function initRotute(){
    handlePaths.push('/');
    handlePaths.push('/login');
    handlePaths.push('/regist');
}

/**
 * ����·�ɵ��߼�
 */
function rotuteHandle(path){
    //����·��������Ϣ
    for(var i in handlePaths){
        if(handlePaths[i] == path){
            console.log('��ȡ����ͬ��·����Ϣ��',handlePaths[i])
            return handlePaths[i];
        }
    }

    return '404 Not Found'
}

/**
 * �������ص�����
 */
function onRequest(req,res){
    var requestPath = req.url;
    console.log("�����·���ǣ�",requestPath);

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
