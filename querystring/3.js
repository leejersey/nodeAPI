querystring.parse('foo=bar&baz=qux&baz=quux&corge')
// returns
//{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
