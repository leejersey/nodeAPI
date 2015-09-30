var crypto = require("crypto");

var data = "12345678";
var cipher = crypto.createCipher("bf","123");

var ss = "";

ss += cipher.update(data,"utf8","hex");
ss += cipher.final("hex");

//解密
var decipher = crypto.createDecipher("bf","123");

var final_str = "";

final_str += decipher.update(ss,"hex","utf8");
final_str += decipher.final("utf8");

console.log(final_str);
