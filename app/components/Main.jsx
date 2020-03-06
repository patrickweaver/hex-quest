import React from 'react'
import {Link} from 'react-router-dom'
import Ascii from './Ascii'
import Bitmap from './Bitmap'

/* the main page for the index route of this app */
export default function HelloWorld(){
  return (
    <div>
      <h1>Hex Quest</h1>

      <Link to='/about'>About Hext Quest</Link>

      <Ascii />
      
      <Bitmap />

    </div>
  )
}