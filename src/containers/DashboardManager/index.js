import { connect } from 'react-redux';
import DashboardManager from 'src/components/DashboardManager';

import { getAllMembers } from 'src/actions/allUsers';
import {
  getAllSpecialities,
  setInputFirstnameValue,
  setInputLastnameValue,
  setInputMemberRoleValue,
  setInputCoachRoleValue,
  setInputSpecialityValue,
  setInputMailValue,
  submitUser,
} from 'src/actions/addUserForm';

const mapStateToProps = (state) => ({
  showAllMembers: state.getAllUsers.allMembers,
  setInputFirstnameValue: state.addUser.firstname,
  setInputLastnameValue: state.addUser.lastname,
  setInputMemberRoleValue: state.addUser.role,
  setInputCoachRoleValue: state.addUser.role,
  setInputSpecialityValue: state.addUser.specialties,
  setInputMailValue: state.addUser.mail,
  allSpecialities: state.addUser.speciality,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMembers: () => {
    const action = getAllMembers();
    dispatch(action);
  },
  getAllSpecialities: () => {
    const action = getAllSpecialities();
    console.log(action);
    dispatch(action);
  },
  onChangeInputFirstnameValue: (value) => {
    const action = setInputFirstnameValue(value);
    dispatch(action);
  },
  onChangeInputLastnameValue: (value) => {
    const action = setInputLastnameValue(value);
    dispatch(action);
  },
  onChangeInputMailValue: (value) => {
    const action = setInputMailValue(value);
    dispatch(action);
  },
  onChangeInputMemberRoleValue: (value) => {
    const action = setInputMemberRoleValue(value);
    dispatch(action);
  },
  onChangeInputCoachRoleValue: (value) => {
    const action = setInputCoachRoleValue(value);
    dispatch(action);
  },
  onChangeInputSpecialityValue: (value) => {
    const action = setInputSpecialityValue(value);
    console.log(action);
    dispatch(action);
  },
  onSubmitUserForm: () => {
    const action = submitUser();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardManager);
