module.exports = {
  // Everything we get in .js from this, we get in .ts for free. And, if we
  // add this, we can't hoist type definitions any more.
  'no-use-before-define': 'off',
};
