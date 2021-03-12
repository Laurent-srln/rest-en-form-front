import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import coachings from './coachings';
import workouts from './workouts';
import getAllBookings from './getAllBookings';
import getAllUsers from './getAllUsers';
import healthCheck from './healthCheck';

const globalReducer = combineReducers({
  auth,
  coachs,
  coachings,
  workouts,
  getAllBookings,
  getAllUsers,
  healthCheck,
});

export default globalReducer;
