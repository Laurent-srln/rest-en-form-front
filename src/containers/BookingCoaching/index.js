import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingCoaching from 'src/components/BookingCoaching';

import {
  setInputDateBookingCoachingValue,
  setInputSlotValue,
  bookingCoaching,
} from 'src/actions/coachings';

const mapStateToProps = (state) => ({
  startDate: state.bookingCoaching.date,
  selectedDate: state.bookingCoaching.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (date) => {
    const action = setInputDateBookingCoachingValue(date);
    // console.log('setInputDateBookingCoachingValue', action);
    dispatch(action);
  },

  onChangeInputSlotValue: (value) => {
    const action = setInputSlotValue(value);
    dispatch(action);
  },

  onSubmitAddCoachingForm: () => {
    const action = bookingCoaching();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookingCoaching);

export default withRouter(container);
