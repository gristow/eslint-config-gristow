/**
 * Validates that the ESLint configuration loads correctly.
 * Run with: node test/validate-config.js
 */

import { ESLint } from 'eslint';
import config from '../index.js';

async function validateConfig() {
  console.log('Validating ESLint configuration...\n');

  // Verify config is an array (flat config format)
  if (!Array.isArray(config)) {
    console.error('ERROR: Config should be an array');
    process.exit(1);
  }

  console.log(`Config exports ${config.length} configuration object(s)`);

  // Create ESLint instance with our config
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });

  // Test linting sample files
  const testFiles = ['test/sample.js', 'test/sample.ts'];

  // Lint files sequentially for readable output
  for (const file of testFiles) {
    console.log(`\nLinting ${file}...`);
    try {
      // eslint-disable-next-line no-await-in-loop
      const results = await eslint.lintFiles([file]);
      const [result] = results;

      if (result.errorCount > 0) {
        console.log(`  Errors: ${result.errorCount}`);
        result.messages
          .filter((m) => m.severity === 2)
          .forEach((m) => {
            console.log(`    ${m.line}:${m.column} ${m.ruleId}: ${m.message}`);
          });
      }

      if (result.warningCount > 0) {
        console.log(`  Warnings: ${result.warningCount}`);
      }

      if (result.errorCount === 0 && result.warningCount === 0) {
        console.log('  No issues found');
      }
    } catch (error) {
      console.error(`  ERROR: ${error.message}`);
      process.exit(1);
    }
  }

  console.log('\nConfig validation complete!');
}

validateConfig().catch((error) => {
  console.error('Validation failed:', error);
  process.exit(1);
});
