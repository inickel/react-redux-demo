//import 'babel-core/browser';
import React from 'react';
import ReactDom from 'react-dom';
import Redux from 'react-redux';

import App from './containers/app';
import configureStore from './stores/';

const store = configureStore();

ReactDom.render(
  <Redux.Provider store={store}>
    <App />
  </Redux.Provider>,
  document.getElementById('react-root')
);
