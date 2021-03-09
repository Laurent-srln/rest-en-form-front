import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SAVE_USER,
} from 'src/actions/auth';

const initialState = {
  login: {
    email: 'sountidly@gmail.com',
    password: '',
    role: '',
  },
  isLogged: false,
};
console.log('Reducer AUTH');
const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        login: {
          email: action.payload,
          password: state.login.password,
        },
      };
    case SAVE_USER:
      return {
        ...state,
        login: action.payload,
      };
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        login: {
          email: state.login.email,
          password: action.payload,
        },
      };
    default:
      return state;
  }
};

export default auth;
