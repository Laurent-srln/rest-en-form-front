import {
  SET_INPUT_SLOT_DATE_VALUE,
  SET_INPUT_START_VALUE,
  SET_INPUT_END_VALUE,
  SET_INPUT_COACH_VALUE,
  SAVE_SLOT_FORM,
} from 'src/actions/CreateSlotForm';

const initialState = {
  coachId: 0,
  selectedStart: '',
  selectedEnd: '',
  selectedDate: '',
};

const createSlot = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_SLOT_DATE_VALUE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case SET_INPUT_START_VALUE:
      return {
        ...state,
        selectedStart: action.payload,
      };
    case SET_INPUT_END_VALUE:
      return {
        ...state,
        selectedEnd: action.payload,
      };
    case SET_INPUT_COACH_VALUE:
      return {
        ...state,
        coachId: action.payload,
      };
    case SAVE_SLOT_FORM:
      return {
        ...state,
        coachId: 0,
        selectedStart: '',
        selectedEnd: '',
        selectedDate: '',
      };
    default:
      return state;
  }
};

export default createSlot;
