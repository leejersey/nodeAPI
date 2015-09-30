var crypto = require("crypto");
//加密
var hash = crypto.createHash("md5");
var data = "hello nodejs";

hash.update(data,"utf8");
console.log(hash.digest("hex"));