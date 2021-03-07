// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Imports

// import Login from './Login';
import Login from 'src/containers/Auth/Login';

// import Password from './Password';
import Password from 'src/containers/Auth/Password';

// import NewPassword from './NewPassword';
import NewPassword from 'src/containers/Auth/NewPassword';

import './style.scss';

// == Composant
const Auth = () => (
  <div className="auth">
    <p className="auth__title">Se connecter</p>
    <div className="auth__content">
      <Login />
      <Password />
      <NewPassword />
    </div>
  </div>
);

// == Props Validation

// == Export
export default Auth;
