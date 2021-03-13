import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingCoaching from 'src/components/BookingCoaching';

import {
  setInputDateBookingCoachingValue,
} from 'src/actions/coachings';

const mapStateToProps = (state, ownProps) => ({
  inputDateBookingCoachingValue: state.bookingCoaching.date,
  dateName: state.bookingCoaching.dateName,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputDateBookingCoachingValue: (value, name) => {
    const action = setInputDateBookingCoachingValue(value, name);
    console.log('setInputDateBookingCoachingValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookingCoaching);

export default withRouter(container);
