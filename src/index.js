import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import App from './App';
import './index.css';
import store from './dummy-store';

ReactDOM.render(
  <BrowserRouter>
    <App 
      state={store}
    />
  </BrowserRouter>, 
  document.getElementById('root')
);