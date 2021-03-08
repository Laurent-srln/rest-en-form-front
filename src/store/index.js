/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';
import coachs from 'src/middlewares/getCoaches';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth),
  applyMiddleware(coachs),
));

export default store;
