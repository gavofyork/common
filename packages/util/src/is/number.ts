// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

/**
 * @name isNumber
 * @signature isNumber (value: any): boolean
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 *   import { isNumber } from '@polkadot/util';
 *
 *   console.log('isNumber', isNumber(1234)); // => true
 */
export default function isNumber (value: any): value is number {
  return typeof value === 'number';
}
