/**
 * Airbnb Base Rules Aggregator
 * Combines all Airbnb ESLint rules for ESLint 9 compatibility
 *
 * This replaces the eslint-config-airbnb-base package which has not been
 * updated for ESLint 9's flat config format.
 *
 * @see https://github.com/airbnb/javascript
 */
import bestPractices from './airbnb-best-practices.js';
import errors from './airbnb-errors.js';
import es6 from './airbnb-es6.js';
import style from './airbnb-style.js';
import variables from './airbnb-variables.js';
import imports from './airbnb-imports.js';

export default {
  ...bestPractices,
  ...errors,
  ...es6,
  ...style,
  ...variables,
  ...imports,
};

// Also export individual rule sets for selective use
export {
  bestPractices,
  errors,
  es6,
  style,
  variables,
  imports,
};
