import {
  SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  SAVE_AVAILABLE_COACHINGS,
  SET_INPUT_SLOT_VALUE,
  SAVE_BOOKING_COACHING,
  SAVE_ERROR_AVAILABLE_COACHING,
} from 'src/actions/coachings';

const initialState = {
  date: '',
  selectedDate: [
    {
      id: 0,
      startTime: '',
      endTime: '',
      coachFirstname: '',
      coachLastname: '',
    },
  ],
  coachingId: 0,
  errorMessageAvailableCoaching: '',
  successMessageBookingCoaching: '',
  coaching: {},
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
        errorMessageAvailableCoaching: '',
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
            startTime: '',
            endTime: '',
            coachFirstname: '',
            coachLastname: '',
          },
        ],
        coachingId: '',
        successMessageBookingCoaching: action.payload.message,
        coaching: action.payload.coaching,
      };
    case SAVE_ERROR_AVAILABLE_COACHING:
      return {
        ...state,
        errorMessageAvailableCoaching: action.payload,
      };
    default:
      return state;
  }
};

export default bookingCoaching;
