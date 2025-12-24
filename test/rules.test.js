/**
 * Tests that ESLint rules properly detect violations.
 *
 * This test suite verifies that:
 * 1. The config loads correctly
 * 2. Rules detect expected violations in fixture files
 * 3. Valid code passes without errors
 *
 * Run with: node --test test/rules.test.js
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { ESLint } from 'eslint';
import config from '../index.js';

/**
 * Create an ESLint instance with our config
 */
function createESLint() {
  return new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });
}

/**
 * Helper to get all rule IDs from lint results
 */
function getRuleIds(results) {
  return results.flatMap((r) => r.messages.map((m) => m.ruleId));
}

/**
 * Helper to check if a specific rule was triggered
 */
function hasRule(results, ruleId) {
  return getRuleIds(results).includes(ruleId);
}

describe('Config Loading', () => {
  it('should export a valid config array', () => {
    assert.ok(Array.isArray(config), 'Config should be an array');
    assert.ok(config.length > 0, 'Config should have at least one entry');
  });

  it('should create an ESLint instance without errors', () => {
    const eslint = createESLint();
    assert.ok(eslint instanceof ESLint);
  });
});

describe('JavaScript Rule Detection', () => {
  it('should detect no-unused-vars violations', async () => {
    const eslint = createESLint();
    const code = `const unused = 'never used';`;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(
      hasRule(results, '@typescript-eslint/no-unused-vars'),
      `Should detect unused variable, got: ${getRuleIds(results).join(', ')}`
    );
  });

  it('should detect no-var violations', async () => {
    const eslint = createESLint();
    const code = `var oldStyle = 'bad'; export default oldStyle;`;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(hasRule(results, 'no-var'), `Should detect var usage, got: ${getRuleIds(results).join(', ')}`);
  });

  it('should detect curly brace violations', async () => {
    const eslint = createESLint();
    const code = `const x = 1; if (x > 0) console.log('no braces');`;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(hasRule(results, 'curly'), `Should detect missing curly braces, got: ${getRuleIds(results).join(', ')}`);
  });

  it('should detect no-shadow violations', async () => {
    const eslint = createESLint();
    const code = `
      const name = 'outer';
      function test() {
        const name = 'inner';
        return name;
      }
      export { test };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(hasRule(results, 'no-shadow'), `Should detect variable shadowing, got: ${getRuleIds(results).join(', ')}`);
  });

  it('should detect eqeqeq violations', async () => {
    const eslint = createESLint();
    const code = `
      const x = 1;
      if (x == '1') { console.log('loose'); }
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(hasRule(results, 'eqeqeq'), `Should detect loose equality, got: ${getRuleIds(results).join(', ')}`);
  });

  it('should detect no-throw-literal violations', async () => {
    const eslint = createESLint();
    const code = `
      function fail() {
        throw 'error string';
      }
      export { fail };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(
      hasRule(results, 'no-throw-literal'),
      `Should detect throwing non-Error objects, got: ${getRuleIds(results).join(', ')}`
    );
  });

  it('should detect prefer-const violations', async () => {
    const eslint = createESLint();
    const code = `
      let neverReassigned = 'value';
      console.log(neverReassigned);
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.ok(
      hasRule(results, 'prefer-const'),
      `Should detect let that could be const, got: ${getRuleIds(results).join(', ')}`
    );
  });
});

describe('TypeScript Rule Detection', () => {
  it('should detect naming convention violations for classes', async () => {
    const eslint = createESLint();
    const code = `
      class badClassName {
        value: number = 0;
      }
      export { badClassName };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.ts' });

    assert.ok(
      hasRule(results, '@typescript-eslint/naming-convention'),
      `Should detect non-PascalCase class name, got: ${getRuleIds(results).join(', ')}`
    );
  });

  it('should detect naming convention violations for interfaces', async () => {
    const eslint = createESLint();
    const code = `
      interface badInterfaceName {
        prop: string;
      }
      export type { badInterfaceName };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.ts' });

    assert.ok(
      hasRule(results, '@typescript-eslint/naming-convention'),
      `Should detect non-PascalCase interface name, got: ${getRuleIds(results).join(', ')}`
    );
  });

  it('should detect consistent-type-imports violations', async () => {
    const eslint = createESLint();
    const code = `
      import { SomeType } from './types';
      const x: SomeType = { id: 1, name: 'test' };
      export { x };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.ts' });

    assert.ok(
      hasRule(results, '@typescript-eslint/consistent-type-imports'),
      `Should detect non-type import used only as type, got: ${getRuleIds(results).join(', ')}`
    );
  });
});

describe('Valid Code', () => {
  it('should pass valid JavaScript without errors', async () => {
    const eslint = createESLint();
    const code = `
      const greeting = 'Hello';

      function sayHello(userName) {
        if (userName) {
          return \`\${greeting}, \${userName}!\`;
        }
        return greeting;
      }

      export { sayHello };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.js' });

    assert.strictEqual(
      results[0].errorCount,
      0,
      `Should have no errors, but got: ${JSON.stringify(results[0].messages)}`
    );
  });

  it('should pass valid TypeScript without errors', async () => {
    const eslint = createESLint();
    const code = `
      interface Person {
        name: string;
        age: number;
      }

      function greet(person: Person): string {
        if (person.age >= 18) {
          return \`Hello, \${person.name}!\`;
        }
        return 'Hello!';
      }

      export { greet };
      export type { Person };
    `;
    const results = await eslint.lintText(code, { filePath: 'test/sample.ts' });

    assert.strictEqual(
      results[0].errorCount,
      0,
      `Should have no errors, but got: ${JSON.stringify(results[0].messages)}`
    );
  });
});

describe('Fixture Files', () => {
  it('should detect multiple violations in invalid.js fixture', async () => {
    const eslint = createESLint();
    const results = await eslint.lintFiles(['test/fixtures/invalid.js']);

    assert.ok(results[0].errorCount > 0, 'Should detect errors in invalid.js');

    const ruleIds = getRuleIds(results);

    // Check for expected violations
    const expectedRules = [
      '@typescript-eslint/no-unused-vars',
      'no-shadow',
      'curly',
      'no-var',
      'no-throw-literal',
    ];

    for (const rule of expectedRules) {
      assert.ok(
        ruleIds.includes(rule),
        `Should detect ${rule} violation in invalid.js, got: ${ruleIds.join(', ')}`
      );
    }
  });

  it('should detect multiple violations in invalid.ts fixture', async () => {
    const eslint = createESLint();
    const results = await eslint.lintFiles(['test/fixtures/invalid.ts']);

    assert.ok(results[0].errorCount > 0, 'Should detect errors in invalid.ts');

    const ruleIds = getRuleIds(results);

    // Check for expected violations
    const expectedRules = [
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/naming-convention',
      'no-shadow',
      'no-var',
    ];

    for (const rule of expectedRules) {
      assert.ok(
        ruleIds.includes(rule),
        `Should detect ${rule} violation in invalid.ts, got: ${ruleIds.join(', ')}`
      );
    }
  });

  it('should pass valid sample files without errors', async () => {
    const eslint = createESLint();
    const results = await eslint.lintFiles([
      'test/sample.js',
      'test/sample.ts',
    ]);

    for (const result of results) {
      assert.strictEqual(
        result.errorCount,
        0,
        `${result.filePath} should have no errors, but got: ${JSON.stringify(result.messages)}`
      );
    }
  });
});
