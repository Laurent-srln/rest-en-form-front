import { combineReducers } from 'redux';

import auth from './auth';
// import coachs from './coachs';

const globalReducer = combineReducers({
  auth,
  // coachs,
});

export default globalReducer;
