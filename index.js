
/**
 * Module dependencies.
 */

var trim = require('trim');

/**
 * Extract argument names from `fn`.
 *
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

module.exports = function(fn){
  return fn
  .toString()
  .split('(')[1]
  .split(')')[0]
  .split(',')
  .map(trim);
};
