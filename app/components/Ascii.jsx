import React from 'react'
import TextDisplayBox from './TextDisplayBox'
import ImageDisplayBox from './ImageDisplayBox'

import setText from '../helpers/ascii/setText'


export default class Ascii extends React.Component {
  constructor(props) {
    super(props);
    this.sync = this.sync.bind(this);
    this.state = {
      inputText: 'abc',
      inputType: 'ascii'
    };
  }
  
  sync(inputText, type) {
    this.setState({
      inputText: inputText,
      inputType: type
    });
  }

  render() {

    const inputText = this.state.inputText;
    const inputType = this.state.inputType;
    
    return (
      <div class="section">
        <h2 className="title">ASCII</h2>

        <TextDisplayBox
          name="Binary"
          type="binary"
          text={setText(inputText, inputType, 'binary')}
          sync={this.sync}
        />
        
        <TextDisplayBox
          name="Hex"
          type="hex"
          text={setText(inputText, inputType, 'hex')}
          sync={this.sync}
        />

        <TextDisplayBox
          name="ASCII"
          type="ascii"
          text={setText(inputText, inputType, 'ascii')}
          sync={this.sync}
        />

      </div>
    )
  }
}