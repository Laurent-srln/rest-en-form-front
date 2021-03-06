import { SET_INPUT_MAIL_VALUE } from 'src/actions';

const initialState = {
  newMail: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        newMail: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
