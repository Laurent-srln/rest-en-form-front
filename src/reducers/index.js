import { combineReducers } from 'redux';

import auth from './auth';

const globalReducer = combineReducers({
  auth,
});

export default globalReducer;
