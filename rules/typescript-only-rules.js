/**
 * Rules that apply only to TypeScript files
 */
export default {
  // Everything we get in .js from this, we get in .ts for free. And, if we
  // add this, we can't hoist type definitions any more.
  'no-use-before-define': 'off',

  // Disable import/no-duplicates for TS - it incorrectly flags different
  // subpath imports (e.g., 'svelte' vs 'svelte/transition') when they
  // resolve to the same .d.ts file
  'import/no-duplicates': 'off',
};
