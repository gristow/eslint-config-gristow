/**
 * This file contains intentional ESLint violations to test that rules detect errors.
 * Each violation is annotated with the expected rule that should catch it.
 */

// no-unused-vars: unused variable
const unusedVariable = 'this is never used';

// no-shadow: shadowing a variable from outer scope
const shadowedName = 'outer';
function shadowTest() {
  const shadowedName = 'inner'; // shadows outer variable
  return shadowedName;
}

// curly: missing braces after if
const shouldLog = Math.random() > 0.5;
if (shouldLog) console.log('missing braces');

// no-var: using var instead of let/const
var oldStyleVariable = 'should use const';

// prefer-const: using let when value is never reassigned
let neverReassigned = 'should be const';

// eqeqeq: using == instead of ===
if (neverReassigned == 'test') {
  console.log('loose equality');
}

// no-throw-literal: throwing a string instead of Error
function throwString() {
  throw 'this is not an Error object';
}

// @typescript-eslint/naming-convention: wrong naming style
const WRONG_camelCase_NAME = 'mixed case';

export { shadowTest, throwString, oldStyleVariable, WRONG_camelCase_NAME };
