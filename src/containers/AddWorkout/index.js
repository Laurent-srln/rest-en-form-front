import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddWorkout from 'src/components/AddWorkout';

import { setInputDateValue, setInputWeightValue } from 'src/actions/workouts';

const mapStateToProps = (state) => ({
  inputDateValue: state.addWorkout.date,
  inputWeightValue: state.addWorkout.weight,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputDateValue: (value) => {
    const action = setInputDateValue(value);
    console.log('action setInputDateValue', action);
    dispatch(action);
  },
  onChangeInputWeightValue: (value) => {
    const action = setInputWeightValue(value);
    console.log('action setInputWeightValue', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(AddWorkout);

export default withRouter(container);
