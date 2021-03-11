import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SAVE_USER,
} from 'src/actions/auth';

const initialState = {
  email: 'alext@coach.com',
  password: 'coach',
  login: {
    role: '',
    logged: false,
    // utilisation du token récupéré par la requete de login
    token: localStorage.getItem('token'),
  },
};
console.log('Reducer AUTH');
const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        email: action.payload,
        password: state.password,
      };
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        email: state.email,
        password: action.payload,
      };
    case SAVE_USER:
      return {
        ...state,
        email: state.email,
        password: state.password,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
