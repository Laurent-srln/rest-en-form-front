import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SAVE_USER,
  LOGOUT,
  SET_INPUT_NEW_PASSWORD_VALUE,
  SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
  SAVE_NEW_USER,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  login: {
    role: '',
    logged: localStorage.getItem('logged'),
    // utilisation du token récupéré par la requete de login
    token: localStorage.getItem('token'),
  },
  createPassword: {
    password: '',
    confirm: '',
    token: '',
  },
};

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
    case LOGOUT:
      return {
        ...state,
        login: {
          role: '',
          logged: false,
          token: '',
        },
      };
    case SET_INPUT_NEW_PASSWORD_VALUE:
      return {
        ...state,
        createPassword: {
          password: action.payload,
          confirm: state.createPassword.confirm,
        },
      };
    case SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE:
      return {
        ...state,
        createPassword: {
          password: state.createPassword.password,
          confirm: action.payload,
        },
      };
    case SAVE_NEW_USER:
      return {
        ...state,
        createPassword: {
          password: '',
          confirm: '',
        },
        login: {
          role: '',
          logged: false,
          token: '',
        },
      };
    default:
      return state;
  }
};

export default auth;
