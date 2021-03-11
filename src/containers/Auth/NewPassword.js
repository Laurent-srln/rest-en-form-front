import { connect } from 'react-redux';

import NewPassword from 'src/components/Auth/NewPassword';

import {
  setInputNewPasswordValue,
  setInputConfirmNewPasswordValue,
  addConfirmNewPassword,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputNewPasswordValue: state.auth.newPassword,
  inputConfirmPasswordValue: state.auth.confirmNewPassword,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputNewPasswordValue: (value) => {
    // ('Au click, je veux changer le state du nouveau password', value);
    const action = setInputNewPasswordValue(value);
    // ('action', action);
    dispatch(action);
  },

  onChangeInputConfirmPasswordValue: (value) => {
    // ('Au click, je veux changer le state de la confirmation du new password', value);
    const action = setInputConfirmNewPasswordValue(value);
    // ('action', action);
    dispatch(action);
  },

  onSubmitNewPasswordForm: () => {
    // ('je veux ajouter un nouveau password dans le state');
    const action = addConfirmNewPassword();
    // ('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
