import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from 'src/components/Auth/Login';

import { setInputMailValue, addMail } from 'src/actions';

const mapStateToProps = (state) => ({
  inputMailValue: state.auth.email,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMailValue: (value) => {
    const action = setInputMailValue(value);
    dispatch(action);
  },
  onSubmitMailForm: (email) => {
    const action = addMail(email);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(container);
