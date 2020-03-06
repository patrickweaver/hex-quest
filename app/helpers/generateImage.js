import {hexToBase64} from './base64'

export default function generateImage(inputText) {
  
  var base64Text = hexToBase64(inputText);
  
  var imgSrc = 'data:image/bmp;base64,' + base64Text;
  return imgSrc;
}