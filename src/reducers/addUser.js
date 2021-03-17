import {
  SET_INPUT_FIRSTNAME_VALUE,
  SET_INPUT_LASTNAME_VALUE,
  SET_INPUT_MEMBER_ROLE_VALUE,
  SET_INPUT_COACH_ROLE_VALUE,
  SET_INPUT_SPECIALITY_VALUE,
  SET_INPUT_MAIL_VALUE,
  SAVE_ALL_SPECIALITIES,
  SAVE_USER_FORM,
} from 'src/actions/addUserForm';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  checkboxSpecialities: [],
  specialties: [],
  speciality: [
    {
      id: 0,
      name: '',
      createdAt: '',
      updatedAt: null,
    },
  ],
};

const addUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_FIRSTNAME_VALUE:
      return {
        ...state,
        firstname: action.payload,
      };
    case SET_INPUT_LASTNAME_VALUE:
      return {
        ...state,
        lastname: action.payload,
      };
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        email: action.payload,
      };
    case SET_INPUT_MEMBER_ROLE_VALUE:
      return {
        ...state,
        role: 'MEMBER',
      };
    case SET_INPUT_COACH_ROLE_VALUE:
      return {
        ...state,
        role: 'COACH',
      };
    case SET_INPUT_SPECIALITY_VALUE:
      console.log(action.payload);
      return {
        ...state,
        checkboxSpecialities: [
          state.specialties.push(Number(action.payload)),
        ],
      };
    case SAVE_ALL_SPECIALITIES:
      return {
        ...state,
        speciality: action.payload,
      };
    case SAVE_USER_FORM:
      console.log('save user reducer');
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        role: action.payload.role,
        specialties: action.payload.speciality,
      };
    default:
      return state;
  }
};

export default addUser;
