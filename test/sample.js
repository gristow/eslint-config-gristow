/**
 * Sample JavaScript file to test ESLint configuration.
 * This file should pass all lint rules.
 */

const greeting = 'Hello, world!';

function add(a, b) {
  return a + b;
}

function greet(userName) {
  if (userName) {
    return `${greeting} My name is ${userName}.`;
  }
  return greeting;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);

const person = {
  name: 'Alice',
  age: 30,
};

const { name, age } = person;

export { add, greet, doubled, name, age };
