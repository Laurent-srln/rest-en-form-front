// === Action Creator
export const GET_WORKOUTS = 'GET_WORKOUTS';
export const SAVE_WORKOUTS = 'SAVE_WORKOUTS';

export const SET_INPUT_DATE_VALUE = 'SET_INPUT_DATE_VALUE';

export const ADD_WORKOUT = 'ADD_WORKOUT';
export const SAVE_WORKOUT = 'SAVE_WORKOUT';

// === Action types
export const getWorkouts = (payload) => ({
  type: GET_WORKOUTS,
  payload,
});

export const saveWorkouts = (payload) => ({
  type: SAVE_WORKOUTS,
  payload,
});

export const setInputDateValue = (payload) => ({
  type: SET_INPUT_DATE_VALUE,
  payload,
});

export const addWorkout = () => ({
  type: ADD_WORKOUT,
});

export const saveWorkout = (payload) => ({
  type: SAVE_WORKOUT,
  payload,
});
