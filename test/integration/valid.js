/**
 * Valid JavaScript file - should pass linting
 */
const greeting = 'Hello, World!';

function greet(name) {
  if (name) {
    return `${greeting} Welcome, ${name}!`;
  }
  return greeting;
}

export { greet };
