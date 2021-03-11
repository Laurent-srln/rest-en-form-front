import { connect } from 'react-redux';
import Coachings from 'src/components/Coachings';

import { getCoachings } from 'src/actions/coachings';

const mapStateToProps = (state) => ({
  coachings: state.coachings.coachings,
});

const mapDispatchToProps = (dispatch) => ({
  getCoachings: () => {
    const action = getCoachings();
    console.log('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Coachings);
