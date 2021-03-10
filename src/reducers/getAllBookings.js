import { SAVE_NEXT_BOOKINGS } from 'src/actions/nextBookings';

const initialState = {
  nextBookings: [
    {
      memberFirstname: '',
    },
  ],
};

const getAllBookings = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NEXT_BOOKINGS:
      return {
        ...state,
        nextBookings: action.payload,
      };
    default:
      return state;
  }
};

export default getAllBookings;
