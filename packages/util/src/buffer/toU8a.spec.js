// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { bufferToU8a } from './index';

describe('bufferToU8a', () => {
  it('returns an empty buffer when null provided', () => {
    expect(
      bufferToU8a(null)
    ).toEqual(new Uint8Array([]));
  });

  it('returns a Uint8Buffer with the correct values', () => {
    expect(
      bufferToU8a(Buffer.from([128, 0, 10]))
    ).toEqual(new Uint8Array([128, 0, 10]));
  });
});
