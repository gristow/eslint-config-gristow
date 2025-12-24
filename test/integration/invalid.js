/**
 * Invalid JavaScript file - should fail linting with multiple errors
 */

// no-var violation
var badVariable = 'should use const or let';

// no-unused-vars violation
const unusedConst = 'never used';

// curly violation
if (badVariable) console.log('missing curly braces');

// no-shadow violation
const shadowedName = 'outer';
function testShadow() {
  const shadowedName = 'inner';
  return shadowedName;
}

// eqeqeq violation
if (badVariable == 'test') {
  console.log('loose equality');
}

export { badVariable, testShadow };
