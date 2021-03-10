import { connect } from 'react-redux';
import dashboardCoach from 'src/components/dashboardCoach';

import { getNextBookings } from 'src/actions/nextBookings';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getNextBookings: () => {
    const action = getNextBookings();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(dashboardCoach);
