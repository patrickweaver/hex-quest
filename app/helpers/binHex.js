function hexFromChar(x) {
  var c = x.charCodeAt(0);
  return c.toString(16);
}

function binFromChar(x) {
  var c = x.charCodeAt(0);
  return ('00000000' + c.toString(2)).substr(-8);
}

function binFromHex(hex) {
  return ('00000000' + (parseInt(hex, 16)).toString(2)).substr(-8);
}

export function asciiToHex(inputText) {
  return inputText.split('').map(hexFromChar).join(' ').toUpperCase();
}

export function asciiToBin(inputText) {
  return inputText.split('').map(binFromChar).join(' ');  
}

export function hexToBin(inputText) {
  return inputText.split(' ').map(binFromHex).join(' ');
}