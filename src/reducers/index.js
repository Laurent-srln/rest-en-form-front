import { combineReducers } from 'redux';

import auth from './auth';
// import coachs from './coachs';
import coachings from './coachings';

const globalReducer = combineReducers({
  auth,
  // coachs,
  coachings,
});

export default globalReducer;
