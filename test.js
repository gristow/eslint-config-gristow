// Import should work:
import { greetJS } from './test-js-export';
import { greet } from './test-ts-export.ts';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

/**
 * A person
 */
class Person {
  name = 'Gregory Ristow';

  /**
   * Initialize and set the person's name
   *
   * @param {string} name
   */
  constructor(name = 'Gregory Ristow') {
    this.name = name;
  }
}

/**
 * @param firstName
 * @param lastName
 */
function userData(firstName, lastName) {
  // Should show error
  const a = 3;
  const b = a > 3 ? 1 : a > 5 ? 2 : 3;
  let c = 4;
  c++;
  addOne(c);

  return `${firstName} ${lastName}`;
}

/**
 * @param n
 */
function addOne(n) {
  return n + 1;
}
