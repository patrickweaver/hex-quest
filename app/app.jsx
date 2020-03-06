import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, hashHistory} from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));