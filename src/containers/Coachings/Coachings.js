import { connect } from 'react-redux';
import Coachings from 'src/components/Coachings';

const mapStateToProps = (state) => ({
  coachings: state.coachings,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Coachings);
