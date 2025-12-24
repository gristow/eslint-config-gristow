// @ts-check
/**
 * ESLint config for the eslint-config-gristow project itself.
 * Extends the base config and adds allowDefaultProject for test files.
 */
import { defineConfig } from 'eslint/config';
import baseConfig from './index.js';

export default defineConfig(
  // Use our own base config
  baseConfig,

  // Override to allow test files that aren't in tsconfig
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '*.config.js',
            '*.config.cjs',
            '*.config.mjs',
            '*.config.ts',
            '.*.js',
            '.*.cjs',
            '.*.mjs',
            'test/sample.js',
            'test/fixtures/*.js',
          ],
        },
      },
    },
  },
);
