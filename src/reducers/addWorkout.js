import { SET_INPUT_DATE_VALUE } from 'src/actions/workouts';

const initialState = {
  date: '',
};

const addWorkout = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_DATE_VALUE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default addWorkout;
