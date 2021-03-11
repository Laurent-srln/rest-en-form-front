import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import coachings from './coachings';
import workouts from './workouts';
import getAllBookings from './getAllBookings';

const globalReducer = combineReducers({
  auth,
  coachs,
  coachings,
  workouts,
  getAllBookings,

});

export default globalReducer;
