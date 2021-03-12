import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddWorkout from 'src/components/AddWorkout';

import { setInputDateValue } from 'src/actions/workouts';

const mapStateToProps = (state) => ({
  inputDateValue: state.addWorkout.date,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputDateValue: (value) => {
    const action = setInputDateValue(value);
    console.log('action setInputDateValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(AddWorkout);

export default withRouter(container);
