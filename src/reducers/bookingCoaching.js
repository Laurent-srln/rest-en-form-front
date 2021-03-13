import {
  SET_INPUT_DATE_BOOKING_COACHING_VALUE,
} from 'src/actions/coachings';

const initialState = {
  date: '',
  dateName: '',
};

const bookingCoaching = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_DATE_BOOKING_COACHING_VALUE:
      return {
        ...state,
        date: action.date,
        dateName: action.dateName,
      };
    default:
      return state;
  }
};

export default bookingCoaching;
