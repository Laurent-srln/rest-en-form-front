/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';
import coachings from 'src/middlewares/coachings';
import workouts from 'src/middlewares/workouts';
import coachs from 'src/middlewares/getCoaches';
import allBookings from 'src/middlewares/getAllBookings';
import allUsers from 'src/middlewares/getAllUsers';
import healthCheck from 'src/middlewares/healthCheck';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth, coachings),
  applyMiddleware(auth, workouts),
  applyMiddleware(coachs),
  applyMiddleware(allBookings, allUsers),
  applyMiddleware(auth, healthCheck),
));

export default store;
