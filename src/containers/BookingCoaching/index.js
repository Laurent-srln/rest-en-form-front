import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingCoaching from 'src/components/BookingCoaching';

import {
  setInputDateBookingCoachingValue,
} from 'src/actions/coachings';

const mapStateToProps = (state) => ({
  inputDateBookingCoachingValue: state.bookingCoaching.date,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputDateBookingCoachingValue: (value) => {
    const action = setInputDateBookingCoachingValue(value);
    console.log('onChangeInputDateBookingCoachingValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookingCoaching);

export default withRouter(container);
