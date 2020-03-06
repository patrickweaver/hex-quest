import {asciiToBin, asciiToHex} from '../../helpers/binHex'

test('"a" in ASCII should be "01100001" in binary', () => {
  const startDate = new Date('10-2-2019');
  const endDate = new Date('11-1-2019');
  expect(asciiToBin('a')).toBe('01100001');
})