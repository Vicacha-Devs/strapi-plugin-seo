import lodashGet from 'lodash/get';

/**
 * Loosely typed `lodash/get`: the caller states the expected result type, which lodash
 * cannot infer from a dynamic string path.
 */
export const get = lodashGet as <T = any>(
  object: any,
  path: string | string[],
  defaultValue?: T
) => T;
