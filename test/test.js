cvar   = require('../lib/console-var');
assert = require('assert');

function logHello() {
	console.log("hello world!");
};

var logged = cvar(logHello);

assert.equal(logged, "hello world!\n", "two strings are equal");