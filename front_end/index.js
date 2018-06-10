import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './createStore';
import Auth from './containers/Auth';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Auth />
    </ConnectedRouter >
  </Provider>,
 document.getElementById('app'),
)
