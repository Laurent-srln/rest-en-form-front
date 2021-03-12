import {
  SET_INPUT_DATE_VALUE,
  SET_INPUT_WEIGHT_VALUE,
  SET_INPUT_MUSCLE_MASS_VALUE,
} from 'src/actions/workouts';

const initialState = {
  date: '',
  weight: 0,
  muscleMass: 0,
};

const addWorkout = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_DATE_VALUE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_INPUT_WEIGHT_VALUE:
      return {
        ...state,
        weight: action.payload,
      };
    case SET_INPUT_MUSCLE_MASS_VALUE:
      return {
        ...state,
        muscleMass: action.payload,
      };
    default:
      return state;
  }
};

export default addWorkout;
