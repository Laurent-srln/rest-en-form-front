// === Action Creator
export const GET_COACHINGS = 'GET_COACHINGS';
export const SAVE_COACHINGS = 'SAVE_COACHINGS';

export const SET_INPUT_DATE_BOOKING_COACHING_VALUE = 'SET_INPUT_DATE_BOOKING_COACHING_VALUE';
export const GET_AVAILABLE_COACHINGS_TO_A_DATE = 'GET_AVAILABLE_COACHINGS_TO_A_DATE';
export const SAVE_AVAILABLE_COACHINGS = 'SAVE_AVAILABLE_COACHINGS';

// === Action types
export const getCoachings = (payload) => ({
  type: GET_COACHINGS,
  payload,
});

export const saveCoachings = (payload) => ({
  type: SAVE_COACHINGS,
  payload,
});

export const setInputDateBookingCoachingValue = (date) => ({
  type: SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  date,
});

export const getAvailableCoachingsToADate = (payload) => ({
  type: GET_AVAILABLE_COACHINGS_TO_A_DATE,
  payload,
});

export const saveAvailableCoachings = (payload) => ({
  type: SAVE_AVAILABLE_COACHINGS,
  payload,
});
