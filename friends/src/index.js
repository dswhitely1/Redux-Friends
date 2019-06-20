import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import App from './components/App';

const application  = (<Provider
  store={store}><Router><App /></Router></Provider>);
const rootDocument = document.getElementById( 'root' );
console.log(application);
render( application, rootDocument );