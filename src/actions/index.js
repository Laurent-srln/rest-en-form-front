export const SET_INPUT_MAIL_VALUE = 'SET_INPUT_MAIL_VALUE';
export const ADD_MAIL = 'ADD_MAIL';

export const setInputMailValue = (value) => ({
  type: SET_INPUT_MAIL_VALUE,
  value,
});

export const addMail = () => ({
  type: ADD_MAIL,
});
