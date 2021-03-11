// === Action Creator
export const GET_COACHINGS = 'GET_COACHINGS';
export const SAVE_COACHINGS = 'SAVE_COACHINGS';

// === Action types
export const getCoachings = (payload) => ({
  type: GET_COACHINGS,
  payload,
});

export const saveCoachings = (payload) => ({
  type: SAVE_COACHINGS,
  payload,
});
