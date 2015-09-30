var path = require("path");

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));