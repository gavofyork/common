// Copyright 2017-2018 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import xxhash64AsValue from './asValue';

/**
 * @name xxhash64AsRaw
 * @signature xxhash64AsRaw (data: Buffer | Uint8Array | string, seed: number): string
 * @summary Creates a xxhash non-prefixed hex from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a non-prefixed hex string.
 * @example
 *   import { xxhash64AsRaw } from '@polkadot/util-crypto';
 *
 *   xxhash64AsRaw('abcd', 0xabcd)) // => e29f70f8b8c96df7
 */
export default function xxhash64AsRaw (data: Buffer | Uint8Array | string, seed: number): string {
  return xxhash64AsValue(data, seed).toString(16);
}
