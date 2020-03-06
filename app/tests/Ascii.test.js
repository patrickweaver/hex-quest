import React from 'react'
import ReactDOM from 'react-dom'
import Ascii from '../components/Ascii'

import { shallow } from 'enzyme'


// the test
it('renders without crashing', () => {
  shallow(<Ascii />)
})