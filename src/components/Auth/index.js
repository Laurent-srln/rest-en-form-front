// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports

// import Login from './Login';
import Login from 'src/containers/Auth/Login';

// import Password from './Password';
import Password from 'src/containers/Auth/Password';

// import NewPassword from './NewPassword';
import NewPassword from 'src/containers/Auth/NewPassword';

import './style.scss';

// == Composant

const Auth = ({ password, saveMail }) => {
  
  {/* useEffect(saveMail, [password]); */}

  console.log('password', password);
  return (
    <div className="auth">
      <p className="auth__title">Se connecter</p>
      <div className="auth__content">

        <Route
          path="/"
          exact
        >
          <Login />
        </Route>
      
        <Route
          exact
          path="/connexion"
        >
          {password && (
            <Password />
          )}
          {!password && (
            <NewPassword />
          )}
        </Route>
      </div>
    </div>
  );
};

// == Props Validation
/*
Auth.propTypes = {
  password: PropTypes.bool.isRequired,
  saveMail: PropTypes.func.isRequired,
};
*/

// == Export
export default Auth;
