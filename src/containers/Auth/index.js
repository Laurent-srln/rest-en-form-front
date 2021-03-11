import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from 'src/components/Auth';

import {
  setInputMailValue,
  setInputPasswordValue,
  login,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  inputMailValue: state.auth.email,
  inputPasswordValue: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMailValue: (value) => {
    const action = setInputMailValue(value);
    dispatch(action);
  },
  onChangeInputPasswordValue: (value) => {
    // console.log('Au click, je veux changer le state du mail', value);
    const action = setInputPasswordValue(value);
    // console.log('action', action);
    dispatch(action);
  },
  onSubmitMailForm: () => {
    const action = login();
    dispatch(action);
  },
  /*
  saveMail: () => {
    const action = saveMail();
    dispatch(action);
  },
  */
});

const container = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRouter(container);
