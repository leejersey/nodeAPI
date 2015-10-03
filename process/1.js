console.log(process.argv);

process.on("exit",function(){
    console.log("exit");
})