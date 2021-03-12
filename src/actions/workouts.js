// === Action Creator
export const GET_WORKOUTS = 'GET_WORKOUTS';
export const SAVE_WORKOUTS = 'SAVE_WORKOUTS';

// === Action types
export const getWorkouts = (payload) => ({
  type: GET_WORKOUTS,
  payload,
});

export const saveWorkouts = (payload) => ({
  type: SAVE_WORKOUTS,
  payload,
});
