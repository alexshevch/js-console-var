# console-var

  Node.js package to store console.log output in a variable.

# General idea

  When you pass a function to `console-var` it executes your function and returns what the function was logging.

  This allows parsing the log right after function execution, testing what the function is logging, or redirecting the log to another stream.

## Installation
    npm install console-var --save

## Usage
    var cvar = require('console-var');

    function logHello () {
        console.log("Hello World!");
    }
    
    var consoleOutput = cvar(logHello);

## Coming-soon improvements
 - option to return logs in different formats
 - option to capture console.err
 - return function log alongside its regular return value
 - ability to pass in more than one function
 - in-browser console log support

  Stay tuned!

## License

MIT
