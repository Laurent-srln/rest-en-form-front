import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { setInputMailValue, addMail } from 'src/actions';

const mapStateToProps = (state) => ({
  inputMailValue: state.newMail,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputMailValue: (value) => {
    // console.log('Au click, je veux changer le state du mail', value);
    const action = setInputMailValue(value);
    // console.log('action', action);
    dispatch(action);
  },
  onSubmitForm: () => {
    // console.log('je veux ajouter un nouveau message dans le state');
    const action = addMail();
    // console.log('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
