import {
  SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  SAVE_AVAILABLE_COACHINGS,
  SET_INPUT_SLOT_VALUE,
  SAVE_BOOKING_COACHING,
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
  coachingId: 0,
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
    case SET_INPUT_SLOT_VALUE:
      return {
        ...state,
        coachingId: action.coachingId,
      };
    case SAVE_BOOKING_COACHING:
      return {
        ...state,
        selectedDate: [
          {
            id: 0,
            firstname: '',
            lastname: '',
            start_time: '',
            end_time: '',
          },
        ],
        coachingId: '',
      };
    default:
      return state;
  }
};

export default bookingCoaching;
