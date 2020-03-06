import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <p>This is a starter react app using react-router-dom to add client-side routes!</p>

      <Link to='/'>Go home</Link>
    </div>
  )
}