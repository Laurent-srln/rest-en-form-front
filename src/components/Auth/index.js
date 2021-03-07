// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route
          path="/"
          exact
        >
          <Login />
        </Route>
        <Route
          path="/connexion"
          exact
        >
          <Password />
        </Route>
        <Route
          path="/new-password"
          exact
        >
          <NewPassword />
        </Route>
      </Switch>
    </div>
  </div>
);

// == Props Validation

// == Export
export default Auth;
