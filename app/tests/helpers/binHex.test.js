import {asciiToBin, asciiToHex} from '../../helpers/binHex'

test('"a" in ASCII should be "01100001" in binary', () => {
  expect(asciiToBin('a')).toBe('01100001');
})