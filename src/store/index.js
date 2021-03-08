/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth),
));

export default store;
