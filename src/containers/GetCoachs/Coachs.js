import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Coachs from 'src/components/Coachs';

import { getAllCoachs } from 'src/actions/Coachs';

const mapStateToProps = (state) => ({
  coach: state.coachs.coach,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoachs: () => {
    const action = getAllCoachs();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Coachs);

export default withRouter(container);
