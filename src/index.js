import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, ReduxPromise)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
