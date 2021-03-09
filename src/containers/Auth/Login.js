import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from 'src/components/Auth/Login';

import { setInputMailValue, addMail } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputMailValue: state.auth.login.email,
  password: state.auth.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMailValue: (value) => {
    const action = setInputMailValue(value);
    dispatch(action);
  },
  onSubmitMailForm: () => {
    const action = addMail();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(container);
