import {
  SET_INPUT_DATE_VALUE,
  SET_INPUT_WEIGHT_VALUE,
  SET_INPUT_MUSCLE_MASS_VALUE,
  SET_INPUT_FAT_MASS_VALUE,
  SET_INPUT_BONE_MASS_VALUE,
  SET_INPUT_BODY_WATER_VALUE,
  SET_INPUT_CONTENT_VALUE,
  SAVE_WORKOUT,
} from 'src/actions/workouts';

const initialState = {
  date: '',
  weight: 0,
  muscleMass: 0,
  fatMass: 0,
  boneMass: 0,
  bodyWater: 0,
  content: '',
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
    case SET_INPUT_FAT_MASS_VALUE:
      return {
        ...state,
        fatMass: action.payload,
      };
    case SET_INPUT_BONE_MASS_VALUE:
      return {
        ...state,
        boneMass: action.payload,
      };
    case SET_INPUT_BODY_WATER_VALUE:
      return {
        ...state,
        bodyWater: action.payload,
      };
    case SET_INPUT_CONTENT_VALUE:
      return {
        ...state,
        content: action.payload,
      };
    case SAVE_WORKOUT:
      return {
        ...state,
        date: '',
        weight: 0,
        muscleMass: 0,
        fatMass: 0,
        boneMass: 0,
        bodyWater: 0,
        content: '',
      };
    default:
      return state;
  }
};

export default addWorkout;
