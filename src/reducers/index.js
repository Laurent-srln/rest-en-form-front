import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import coachings from './coachings';
import getAllBookings from './getAllBookings';

const globalReducer = combineReducers({
  auth,
  coachs,
  coachings,
  getAllBookings,

});

export default globalReducer;
