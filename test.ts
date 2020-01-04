import { greetJS } from './test-js-export';
import { greet } from './test-ts-export';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

export function completeName(firstName, lastName) {
  const a = 3;
  return `${firstName} ${lastName}`;
}
