// === Action Creator

export const SET_INPUT_MAIL_VALUE = 'SET_INPUT_MAIL_VALUE';
export const SET_INPUT_PASSWORD_VALUE = 'SET_INPUT_PASSWORD_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';

export const SEND_LOGIN_FROM_API = 'SEND_LOGIN_FROM_API';
export const LOGOUT = 'LOGOUT';

export const ADD_MAIL = 'ADD_MAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';
// export const SAVE_MAIL = 'SAVE_MAIL';


// export const SET_INPUT_NEW_PASSWORD_VALUE = 'SET_INPUT_NEW_PASSWORD_VALUE';
// export const ADD_NEW_PASSWORD = 'ADD_NEW_PASSWORD';

// export const SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE = 'SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE';
// export const ADD_CONFIRM_NEW_PASSWORD = 'ADD_CONFIRM_NEW_PASSWORD';

// === Action types
// Login
export const setInputMailValue = (payload) => ({
  type: SET_INPUT_MAIL_VALUE,
  payload,
});

export const setInputPasswordValue = (payload) => ({
  type: SET_INPUT_PASSWORD_VALUE,
  payload,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const sendLoginFromApi = (payload) => ({
  type: SEND_LOGIN_FROM_API,
  payload,
});

export const addMail = () => ({
  type: ADD_MAIL,
});

export const addPassword = () => ({
  type: ADD_PASSWORD,
});

export const onClickLogout = () => ({
  type: LOGOUT,
});

/*
export const saveMail = (payload) => ({
  type: SAVE_MAIL,
  payload,
});
*/




// new-password
/*
export const setInputNewPasswordValue = (value, name) => ({
  type: SET_INPUT_NEW_PASSWORD_VALUE,
  value,
  name,
});
*/

/*
export const addNewPassword = () => ({
  type: ADD_NEW_PASSWORD,
});
*/

/*
export const setInputConfirmNewPasswordValue = (value) => ({
  type: SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
  value,
});
*/

/*
export const addConfirmNewPassword = () => ({
  type: ADD_CONFIRM_NEW_PASSWORD,
});
*/
