import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SAVE_USER,
} from 'src/actions/auth';

const initialState = {
  login: {
    email: 'alext@coach.com',
    password: 'coach',
    role: '',
    isLogged: false,
    token: '',
  },
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
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        login: {
          email: state.login.email,
          password: action.payload,
        },
      };
    case SAVE_USER:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
