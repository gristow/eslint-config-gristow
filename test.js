// Import should work:
import { greetJS } from './test-js-export';
import { greet } from './test-ts-export.ts';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

function userData(firstName, lastName) {
  const a = 3;
  return `${firstName} ${lastName}`;
}
