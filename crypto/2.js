var crypto = require("crypto");

var data = "12345678";
var cipher = crypto.createCipher("bf","123");

var ss = "";

ss += cipher.update(data,"utf8","hex");
ss += cipher.final("hex");

console.log(ss);