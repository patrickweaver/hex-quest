import React from 'react'

export default function ImageDisplayBox (props){
  return (
    <div class="data-display-box">
      <h3 className="title">{props.name}</h3>
      <img
        className="zoom-image"
        src={props.src}
      />
    </div>
  )
}