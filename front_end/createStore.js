import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers/index';


export const history = createHistory();

// router使ったらmiddleware routerMiddlewareほぼ必須
const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(history),
    logger,
    thunk,
  ),
);

export default store;
