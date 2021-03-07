import { connect } from 'react-redux';

import NewPassword from 'src/components/Auth/NewPassword';

import {
  setInputNewPasswordValue,
  setInputConfirmNewPasswordValue,
  addConfirmNewPassword,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputNewPasswordValue: state.newPassword,
  inputConfirmPasswordValue: state.confirmNewPassword,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputNewPasswordValue: (value) => {
    // console.log('Au click, je veux changer le state du nouveau password', value);
    const action = setInputNewPasswordValue(value);
    // console.log('action', action);
    dispatch(action);
  },

  onChangeInputConfirmPasswordValue: (value) => {
    // console.log('Au click, je veux changer le state de la confirmation du new password', value);
    const action = setInputConfirmNewPasswordValue(value);
    // console.log('action', action);
    dispatch(action);
  },

  onSubmitNewPasswordForm: () => {
    // console.log('je veux ajouter un nouveau password dans le state');
    const action = addConfirmNewPassword();
    // console.log('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
