// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import hexToBn from '../hex/toBn';
import u8aToHex from './toHex';

/**
 * @name u8aToBn
 * @signature u8aToHex (value?: Uint8Array, isLe: boolean = false): BN
 * @summary Creates a BN from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.
 * @example
 *   import { u8aToBn } from '@polkadot/util';
 *
 *   u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 */
export default function u8aToBn (value?: Uint8Array, isLe: boolean = false): BN {
  return hexToBn(
    u8aToHex(value),
    isLe
  );
}
