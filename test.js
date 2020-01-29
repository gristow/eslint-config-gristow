// Import should work:
import { greetJS } from './test-js-export';
import { greet } from './test-ts-export.ts';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

/**
 * @param firstName
 * @param lastName
 */
function userData(firstName, lastName) {
  // Should show error
  const a = 3;
  return `${firstName} ${lastName}`;
}
