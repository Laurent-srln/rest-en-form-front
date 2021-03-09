import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from 'src/components/Auth';

import { saveMail } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  password: state.auth.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  
  saveMail: () => {
    const action = saveMail();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRouter(container);
