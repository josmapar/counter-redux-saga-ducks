import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';
import App from './app/App';
//initialialize store
//const store = configureStore();

ReactDOM.render(
  <Provider >
    <App />
  </Provider>, 
  document.getElementById('root')
);
