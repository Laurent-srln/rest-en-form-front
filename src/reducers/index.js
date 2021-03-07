import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SET_INPUT_NEW_PASSWORD_VALUE,
  SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
} from 'src/actions';

const initialState = {
  mail: '',
  password: '',
  newPassword: '',
  confirmNewPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        mail: action.value,
      };
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        password: action.value,
      };
    case SET_INPUT_NEW_PASSWORD_VALUE:
      return {
        ...state,
        newPassword: action.value,
      };
    case SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE:
      return {
        ...state,
        confirmNewPassword: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
