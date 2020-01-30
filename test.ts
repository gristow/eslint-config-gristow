import { greetJS } from './test-js-export';
import { greet } from './test-ts-export';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

export function completeName(fullName);
export function completeName(firstName, lastName?) {
  // Should show error, unused variable...
  const a = 3;
  const b = a > 3 ? 1 : a > 5 ? 2 : 3;
  let c = 4;
  c++;
  addOne(c);

  return `${firstName}${lastName ? ` ${lastName}` : ''}`;
}

function addOne(n) {
  return n + 1;
}
