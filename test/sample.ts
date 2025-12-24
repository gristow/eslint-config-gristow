/**
 * Sample TypeScript file to test ESLint configuration.
 * This file should pass all lint rules.
 */

interface Person {
  name: string;
  age: number;
  email?: string;
}

type Status = 'active' | 'inactive' | 'pending';

const DEFAULT_STATUS: Status = 'pending';

function createPerson(name: string, age: number): Person {
  return { name, age };
}

function getStatus(person: Person): Status {
  if (person.age >= 18) {
    return 'active';
  }
  return DEFAULT_STATUS;
}

async function fetchPerson(id: number): Promise<Person | null> {
  try {
    // Simulated async operation
    const person = createPerson(`User ${id}`, 25);
    return person;
  } catch (error) {
    console.error('Failed to fetch person:', error);
    return null;
  }
}

class UserService {
  private users: Person[] = [];

  public addUser(person: Person): void {
    this.users.push(person);
  }

  public getUsers(): Person[] {
    return [...this.users];
  }

  public findByName(name: string): Person | undefined {
    return this.users.find((user) => user.name === name);
  }
}

export { createPerson, getStatus, fetchPerson, UserService };
export type { Person, Status };
