var path = require("path");

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

console.log(path.dirname('/foo/bar/baz/asdf/quux'));

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));

console.log(path.extname('index.html'));

console.log(path.sep);
console.log('foo/bar/baz'.split(path.sep));


console.log(path.delimiter);