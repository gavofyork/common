// Copyright 2017-2018 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// TODO: For Node we can also use node-blake2 (npm blake2)
import blakejs from 'blakejs';

/**
 * @name blake2bAsU8a
 * @signature blake2bAsU8a (value: Uint8Array): Uint8Array
 * @summary Creates a blake2b Uint8Array from the input.
 * @description
 * From a `Uint8Array` input, create the blake2b and return the result as a `Uint8Array`.
 * @example
 *   import { blake2bAsU8a } from '@polkadot/util-crypto';
 *
 *   blake2bAsU8a('abc') // => Uint8Array('508c5e8c327c14e2e1a72ba34eeb452f37458b209ed63a294d999b4c86675982')
 */
export default function blake2bAsU8a (data: Uint8Array, bitLength: number = 512, key: Uint8Array | null = null): Uint8Array {
  return blakejs.blake2b(data, key, bitLength / 8);
}
