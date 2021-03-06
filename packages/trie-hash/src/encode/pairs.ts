// Copyright 2017-2018 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Trie$Pairs } from '../types';

import encodeAux from './aux';

function calcLength (pairs: Trie$Pairs, preLength: number, index: number, start: number): number {
  let length = 0;

  for (let j = start; j < pairs.length; j++) {
    if (pairs[j].k[preLength] === index) {
      length++;
    } else {
      j = pairs.length;
    }
  }

  return length;
}

export default function encodePairs (pairs: Trie$Pairs, preLength: number): Array<any> {
  const result = [];

  let start = preLength === pairs[0].k.length
    ? 1
    : 0;

  for (let index = 0; index < 16; index++) {
    const length = calcLength(pairs, preLength, index, start);

    result.push(
      length === 0
        ? ''
        : encodeAux(
          pairs.slice(start, start + length),
          preLength + 1
        )
    );

    start += length;
  }

  return result;
}
