// Copyright 2017-2018 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aFromString from '@polkadot/util/u8a/fromString';
import hexToU8a from '@polkadot/util/hex/toU8a';

import { trieRoot } from './index';

describe('trieRoot', () => {
  it('encodes empty k/v pairs', () => {
    expect(
      trieRoot([])
    ).toEqual(
      hexToU8a(
        '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'
      )
    );
  });

  // https://github.com/paritytech/parity/blob/e95b09348386d01b71901365785c5fa3aa2f7a6d/util/triehash/src/lib.rs#L331
  it('encodes a simple k/v pair', () => {
    expect(
      trieRoot([{
        k: u8aFromString('A'),
        v: u8aFromString('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      }])
    ).toEqual(
      hexToU8a(
        '0xd23786fb4a010da3ce639d66d5e904a11dbc02746d1ce25029e53290cabf28ab'
      )
    );
  });

  it('encodes two simple k/v pairs', () => {
    expect(
      trieRoot([
        { k: u8aFromString('A'), v: u8aFromString('aaaa') },
        { k: u8aFromString('B'), v: u8aFromString('bbbb') }
      ])
    ).toEqual(
      hexToU8a(
        '0x59262fe132edbc936eeeec3450ab442c81dcbc6168fb558c61e7a8cc883108e3'
      )
    );
  });

  // https://github.com/paritytech/parity/blob/e95b09348386d01b71901365785c5fa3aa2f7a6d/util/triehash/src/lib.rs#L73
  it('encodes an array of k/v pairs', () => {
    expect(
      trieRoot([
        {
          k: u8aFromString('doe'),
          v: u8aFromString('reindeer')
        },
        {
          k: u8aFromString('dog'),
          v: u8aFromString('puppy')
        },
        {
          k: u8aFromString('dogglesworth'),
          v: u8aFromString('cat')
        }
      ])
    ).toEqual(
      hexToU8a(
        '0x8aad789dff2f538bca5d8ea56e8abe10f4c7ba3a5dea95fea4cd6e7c3a1168d3'
      )
    );
  });

  // https://github.com/paritytech/parity/blob/e95b09348386d01b71901365785c5fa3aa2f7a6d/util/triehash/src/lib.rs#L338
  it('matches out-of-order k/v pairs', () => {
    expect(
      trieRoot([
        { k: new Uint8Array([0x01]), v: new Uint8Array([0x23]) },
        { k: new Uint8Array([0x81]), v: new Uint8Array([0x23]) },
        { k: new Uint8Array([0xf1]), v: new Uint8Array([0x23]) }
      ])
    ).toEqual(
      trieRoot([
        { k: new Uint8Array([0x01]), v: new Uint8Array([0x23]) },
        { k: new Uint8Array([0xf1]), v: new Uint8Array([0x23]) },
        { k: new Uint8Array([0x81]), v: new Uint8Array([0x23]) }
      ])
    );
  });
});
