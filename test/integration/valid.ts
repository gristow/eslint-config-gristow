/**
 * Valid TypeScript file - should pass linting
 */
interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  if (user.age >= 18) {
    return `Hello, ${user.name}! You are an adult.`;
  }
  return `Hello, ${user.name}!`;
}

export { greetUser };
export type { User };
