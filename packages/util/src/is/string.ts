// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

/**
 * @name isString
 * @signature isString (value: any): boolean
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 *   import { isString } from '@polkadot/util';
 *
 *   console.log('isString', isString('test')); // => true
 */
export default function isString (value: any): value is string {
  return typeof value === 'string';
}
