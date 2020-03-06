function binFromChar(x) {
  var c = x.charCodeAt(0);
  return ('00000000' + c.toString(2)).substr(-8);
}

function binFromHex(hex) {
  return ('00000000' + (parseInt(hex, 16)).toString(2)).substr(-8);
}

function hexFromBin(bin) {
  return ('00' + (parseInt(bin, 2)).toString(16)).substr(-2);
}

function hexFromChar(x) {
  var c = x.charCodeAt(0);
  return ('00' + c.toString(16)).substr(-2);
}

function charFrom(radix, number) {
  return String.fromCharCode(parseInt(number, radix))
}
export function binToHex(inputText) {
  return inputText.split(' ').map(hexFromBin).join(' ');
}

export function binToAscii(inputText) {
  return inputText.split(' ').map(charFrom.bind(this, 2)).join(' ');
}

export function hexToBin(inputText) {
  return inputText.split(' ').map(binFromHex).join(' ');
}

export function hexToAscii(inputText) {
  return inputText.split(' ').map(charFrom.bind(this, 16)).join(' ');
}

export function asciiToBin(inputText) {
  return inputText.split('').map(binFromChar).join(' ');  
}

export function asciiToHex(inputText) {
  return inputText.split('').map(hexFromChar).join(' ').toUpperCase();
}




