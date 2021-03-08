import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from 'src/components/Auth';

const mapStateToProps = (state) => ({
  password: state.auth.login.password,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default withRouter(container);
