cvar   = require('../lib/console-var');
assert = require('assert');

var logged;

function logHello() {
	console.log("hello world!");
};

logged = cvar(logHello);
assert.equal(logged, "hello world!\n", "single line strings are equal");


function manyLogs() {
	console.log("hello");
	console.log("world");
	console.log("!");
};

logged = cvar(manyLogs);
assert.equal(logged, "hello\nworld\n!\n", "multiple line strings are equal");