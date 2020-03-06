import setText from '../../../helpers/ascii/setText'

test('"a" in ASCII should be "01100001" in binary', () => {
  expect(setText('a', 'ascii', 'binary')).toBe('01100001');
})

test('"a" in ASCII should be "61" in hex', () => {
  expect(setText('a', 'ascii', 'hex')).toBe('61');
})

test('"01100001" in binary should be "a" in ASCII', () => {
  expect(setText('01100001', 'binary', 'ascii')).toBe('a');
})

test('"01100001" in binary should be "61" in hex', () => {
  expect(setText('01100001', 'binary', 'hex')).toBe('61');
})

test('"61" in hex should be "a" in ASCII', () => {
  expect(setText('61', 'hex', 'ascii')).toBe('a');
})

test('"61" in hex should be "01100001" in binary', () => {
  expect(setText('61', 'hex', 'binary')).toBe('01100001');
})

// Test tab char
test('"	" (tab) in ASCII should be "00001001" in binary', () => {
  expect(setText('	', 'ascii', 'binary')).toBe('00001001');
})

test('"	" (tab) in ASCII should be "09" in hex', () => {
  expect(setText('	', 'ascii', 'hex')).toBe('09');
})

test('"00001001" in binary should be "09" in hex', () => {
  expect(setText('00001001', 'binary', 'hex')).toBe('09');
})