import {
  SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  SAVE_AVAILABLE_COACHINGS,
} from 'src/actions/coachings';

const initialState = {
  date: '',
  selectedDate: [
    {
      id: 0,
      firstname: '',
      lastname: '',
      start_time: '',
      end_time: '',
    },
  ],
};

const bookingCoaching = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_DATE_BOOKING_COACHING_VALUE:
      return {
        ...state,
        date: action.date,
      };
    case SAVE_AVAILABLE_COACHINGS:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

export default bookingCoaching;
