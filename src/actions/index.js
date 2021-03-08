// === Action Creator

export const SET_INPUT_MAIL_VALUE = 'SET_INPUT_MAIL_VALUE';
export const ADD_MAIL = 'ADD_MAIL';
export const SAVE_MAIL = 'SAVE_MAIL';

export const SET_INPUT_PASSWORD_VALUE = 'SET_INPUT_PASSWORD_VALUE';
export const ADD_PASSWORD = 'ADD_PASSWORD';

export const SET_INPUT_NEW_PASSWORD_VALUE = 'SET_INPUT_NEW_PASSWORD_VALUE';
export const ADD_NEW_PASSWORD = 'ADD_NEW_PASSWORD';

export const SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE = 'SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE';
export const ADD_CONFIRM_NEW_PASSWORD = 'ADD_CONFIRM_NEW_PASSWORD';

// === Action types

// Login-email
export const setInputMailValue = (value) => ({
  type: SET_INPUT_MAIL_VALUE,
  value,
});

export const addMail = () => ({
  type: ADD_MAIL,
});

export const saveMail = (payload) => ({
  type: SAVE_MAIL,
  payload,
});

// Login-password
export const setInputPasswordValue = (value) => ({
  type: SET_INPUT_PASSWORD_VALUE,
  value,
});

export const addPassword = () => ({
  type: ADD_PASSWORD,
});

// new-password
export const setInputNewPasswordValue = (value, name) => ({
  type: SET_INPUT_NEW_PASSWORD_VALUE,
  value,
  name,
});

export const addNewPassword = () => ({
  type: ADD_NEW_PASSWORD,
});

export const setInputConfirmNewPasswordValue = (value) => ({
  type: SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
  value,
});

export const addConfirmNewPassword = () => ({
  type: ADD_CONFIRM_NEW_PASSWORD,
});
