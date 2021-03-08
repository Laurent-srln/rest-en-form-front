import { connect } from 'react-redux';

import Password from 'src/components/Auth/Password';

import { setInputPasswordValue, addPassword } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputPasswordValue: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputPasswordValue: (value) => {
    // console.log('Au click, je veux changer le state du mail', value);
    const action = setInputPasswordValue(value);
    // console.log('action', action);
    dispatch(action);
  },
  onSubmitPasswordForm: () => {
    // console.log('je veux ajouter un nouveau message dans le state');
    const action = addPassword();
    // console.log('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);
