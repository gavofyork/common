// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Signature } from '../../base';
import { JsonSignature } from '../types';

import hashEncode from '../hash/encode';

export default function signatureEncode (value: Signature): JsonSignature {
  return hashEncode(value);
}