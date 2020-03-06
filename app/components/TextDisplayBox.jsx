import React from 'react'

export default function TextDisplayBox (props){
  return (
    <div class="data-display-box">
      <h3 className="title">{props.name}</h3>
      
      <textarea
        className="text-io"
        value={props.text}
        onChange={(e) => {props.sync(e.target.value)}}
      />
      
    </div>
  )
}