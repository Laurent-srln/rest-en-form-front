import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import coachings from './coachings';
import getAllBookings from './getAllBookings';
import getAllUsers from './getAllUsers';

const globalReducer = combineReducers({
  auth,
  coachs,
  coachings,
  getAllBookings,
  getAllUsers,
});

export default globalReducer;
