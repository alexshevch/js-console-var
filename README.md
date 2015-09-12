# console-var

  Store console.log output in a variable.

## Installation
    npm install console-var --save

## Usage
    var cvar = require('console-var');

    function logHello () {
        console.log("Hello World!");
    }
    
    var consoleOutput = cvar(logHello);

## License

MIT
