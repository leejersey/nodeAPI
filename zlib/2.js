//解压缩
var zlib = require('zlib');
var fs = require('fs');

var inp = fs.createReadStream('input.txt.gz');
var out = fs.createWriteStream('out.txt');

var gunzilb = zlib.createGunzip();

inp.pipe(gunzilb).pipe(out);