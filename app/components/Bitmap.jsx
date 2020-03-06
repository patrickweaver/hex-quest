import React from 'react'
import TextDisplayBox from './TextDisplayBox'
import ImageDisplayBox from './ImageDisplayBox'

import generateImage from '../helpers/generateImage'
import {hexToBin} from '../helpers/binHex'

const defaultImage = 
`42 4D 48 00 00 00 00 00
 00 00 36 00 00 00 28 00
 00 00 02 00 00 00 FE FF
 FF FF 01 00 20 00 00 00
 00 00 12 00 00 00 27 00
 00 00 27 00 00 00 00 00
 00 00 00 00 00 00 33 33
 FF 00 44 FF 22 00 77 66
 55 00 CC BB AA 00 00 00
`

export default class Bitmap extends React.Component {
  constructor(props) {
    super(props);
    this.sync = this.sync.bind(this);
    this.state = {
      inputText: defaultImage,
    };
  }
  
  sync(inputText) {
    this.setState({inputText: inputText});
  }
  
  
  render() {
    
    return (
      <div class="section">
        <h2 className="title">Bitmap</h2>
        <TextDisplayBox name="Image Binary" text={hexToBin(this.state.inputText)} />
        <ImageDisplayBox name="Bitmap" src={generateImage(this.state.inputText)} />
        <TextDisplayBox name="Image Hex" text={this.state.inputText} sync={this.sync} />
      </div>
    )
  }
}