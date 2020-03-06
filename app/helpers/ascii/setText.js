import {asciiToHex, asciiToBin, hexToBin, binToHex, binToAscii, hexToAscii} from '../binHex'

export default function(inputText, inputType, outputType) {
  if (inputType === outputType) {
    return inputText;
  }

  if (inputType === 'binary') {
    if (outputType === 'hex') {
      return binToHex(inputText);
    } else if (outputType === 'ascii') {
      return binToAscii(inputText);
    }
  }

  if (inputType === 'hex') {
    if (outputType === 'binary') {
      return hexToBin(inputText);
    } else if (outputType === 'ascii') {
      return hexToAscii(inputText);
    }
  }

  if (inputType === 'ascii') {
    if (outputType === 'binary') {
      return asciiToBin(inputText);
    } else if (outputType === 'hex') {
      return asciiToHex(inputText);
    }
  }

  return 'Error';
}