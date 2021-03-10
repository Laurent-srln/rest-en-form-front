import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import getAllBookings from './getAllBookings';

const globalReducer = combineReducers({
  auth,
  coachs,
  getAllBookings,
});

export default globalReducer;
