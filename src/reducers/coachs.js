import { SAVE_COACHS } from 'src/actions/Coachs';

const initialState = {
  coach: [],
};

const coachs = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COACHS:
      console.log('reducers', SAVE_COACHS);
      return {
        ...state,
        coach: action.payload,
      };
    default:
      return state;
  }
};

export default coachs;
