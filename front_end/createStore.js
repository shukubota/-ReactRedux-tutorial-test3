import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers/index';


export const history = createHistory();

const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(history),
    logger,
    thunk,
  ),
);

export default store;
