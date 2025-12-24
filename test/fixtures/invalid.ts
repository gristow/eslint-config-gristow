/**
 * This file contains intentional TypeScript ESLint violations.
 * Each violation is annotated with the expected rule that should catch it.
 */

// @typescript-eslint/no-unused-vars: unused variable
const unusedTsVariable: string = 'never used';

// @typescript-eslint/naming-convention: class name should be PascalCase
class invalidClassName {
  value: number = 0;
}

// @typescript-eslint/naming-convention: interface should be PascalCase
interface badInterfaceName {
  prop: string;
}

// no-shadow: shadowing variable
const outerValue = 10;
function shadowingFunction(): number {
  const outerValue = 20; // shadows outer
  return outerValue;
}

// @typescript-eslint/consistent-type-imports: should use type import
import { SomeType } from './types';

// no-var in TypeScript
var tsOldStyle: string = 'bad';

// Using the imports to avoid "defined but never used" on the intentional violations
export { invalidClassName, shadowingFunction, tsOldStyle };
export type { badInterfaceName, SomeType };
