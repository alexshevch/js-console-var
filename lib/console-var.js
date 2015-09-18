/**
 * Store console.log output in a variable
 *
 * @author Oleksii Shevchenko <shevaroller@gmail.com> (http://shevaroller.me)
 * @since  11 September 2015
 */
var util = require('util');
var Q = require('q');

var consoleVar;

cvar = function (func) {
  var logger = '';
  var ready = false;

  console.log = function() {
    var contents = util.format.apply(this, arguments) + '\n'
    logger += contents;
    this._stdout.write(contents);
  };

  Q.fcall(func).then(returns);
  function returns () {
    ready = true;
    //return logger;
  }

  while (!ready) {};
    return logger;

};

/**
 * Exports Module cvar
 */
module.exports = cvar;