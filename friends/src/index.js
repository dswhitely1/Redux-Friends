import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import App from './components/App';

import './index.scss'

const application  = (<Provider
  store={store}><Router><App /></Router></Provider>);
const rootDocument = document.getElementById( 'root' );

render( application, rootDocument );