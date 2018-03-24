import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';

//initialialize store
//const store = configureStore();

ReactDOM.render(
  <Provider >
    <h1>Hello World</h1>
  </Provider>, 
  document.getElementById('root')
);
