/**
 * Store console.log output in a variable
 *
 * @author Oleksii Shevchenko <shevaroller@gmail.com> (http://shevaroller.me)
 * @since  11 September 2015
 */
var util = require('util');

var consoleVar;

cvar = function (func) {
  var logger;

  console.log = function() {
    logger = util.format.apply(this, arguments) + '\n'
    this._stdout.write(util.format.apply(this, arguments) + '\n');
  };
  func();
  return logger;
};

/**
 * Exports Module cvar
 */
module.exports = cvar;