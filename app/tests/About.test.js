import React from 'react'
import ReactDOM from 'react-dom'
import About from '../components/About'

import { shallow } from 'enzyme'


// the test
it('renders without crashing', () => {
  shallow(<About />)
})