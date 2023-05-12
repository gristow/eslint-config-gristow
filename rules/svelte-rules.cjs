module.exports = {
  // Must disable to make 2-way data binding possible
  'import/no-mutable-exports': 'off',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'no-labels': 'off',
  'no-restricted-syntax': 'off',
  // In svelte we often have to init an export ot undefined to mark it as an optional
  // property:
  'no-undef-init': 'off',
  // Svelte checking will handle verifying resolved imports, and eslint is unfortunately
  // unaware of vite paths:
  'import/no-unresolved': 'off',
};