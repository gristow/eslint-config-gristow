import { greetJS } from './test-js-export';
import { apple, snake_case_import, greet } from './test-ts-export';
import type { Apple } from './test-ts-export';

greetJS('Johnny', 'Appleseed');
greet('Jenny', 'Applesseed');

const a = {
  this_pRop_is_ok: 3,
  _this_prop_is_not: 4,
  neither__is_this_one: 5,
};
console.log(a);

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

// Should NOT complain we haven't used an arrow callback:
setTimeout(function isNotAnArrowFunction() {
  console.log('timeout');
}, 500);

function addOne(n) {
  return n + 1;
}

// error because not PascalCase
export class myClassName {}

const SNAKE_CASE_VARIABLE = 'snake case variable';
console.log(SNAKE_CASE_VARIABLE);

const this_is_a_problem = 'snake case variable';
console.log(this_is_a_problem);

console.log(snake_case_import);

const coordinates = {
  x_top: 0,
};

const { x_top } = coordinates;

const a: Apple = apple;
console.log(a);

throw 'hello';

console.log('unreachable code error!');
