import { connect } from 'react-redux';
import dashboardCoach from 'src/components/DashboardCoach';

import { getNextBookings } from 'src/actions/nextBookings';

const mapStateToProps = (state) => ({
  nextBookingsArray: state.getAllBookings.nextBookings,
});

const mapDispatchToProps = (dispatch) => ({
  getNextBookings: () => {
    const action = getNextBookings();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(dashboardCoach);
