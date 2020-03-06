import React from 'react'
import TextDisplayBox from './TextDisplayBox'
import ImageDisplayBox from './ImageDisplayBox'

import {asciiToHex, asciiToBin} from '../helpers/binHex'


export default class Ascii extends React.Component {
  constructor(props) {
    super(props);
    this.sync = this.sync.bind(this);
    this.state = {
      inputText: 'abc',
    };
  }
  
  sync(inputText) {
    this.setState({inputText: inputText});
  }
  
  
  render() {
    
    return (
      <div class="section">
        <h2 className="title">ASCII</h2>
        <TextDisplayBox name="Binary" text={asciiToBin(this.state.inputText)} />
        <TextDisplayBox name="Hex" text={asciiToHex(this.state.inputText)} />
        <TextDisplayBox name="ASCII" text={this.state.inputText} sync={this.sync} />
      </div>
    )
  }
}