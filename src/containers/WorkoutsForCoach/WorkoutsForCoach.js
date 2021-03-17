import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import WorkoutsForCoach from 'src/components/WorkoutsForCoach/WorkoutsForCoach';
import { getWorkoutsForCoach } from 'src/actions/workouts';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  const ownPropsMemberId = ownProps.match.params.id;
  return ({
    workoutsForCoach: state.workouts.workoutsForCoach,
    itemId: ownPropsMemberId,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getWorkoutsForCoach: () => {
    const action = getWorkoutsForCoach();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(WorkoutsForCoach);

export default withRouter(container);
