var EE = require("events").EventEmitter;
var inhertis = require("util").inherits;

function MY(){

}

inhertis(MY, EE);

var m = new MY();

m.on("self event",function eventHandle(name,age){
    console.log(name,age);
});

setTimeout(function(){
    m.emit("self event","leo",23)
},1000);