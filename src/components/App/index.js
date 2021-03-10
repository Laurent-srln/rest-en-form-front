// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Auth from 'src/containers/Auth';

import DashboardAdh from 'src/components/DashboardAdh';
import DashboardManager from 'src/components/DashboardManager';
import DashboardCoach from 'src/containers/DashboardCoach';

import './styles.scss';

// == Composant
const App = ({ isLogged, role, appInit }) => {
  useEffect(appInit, [isLogged, role]);
  console.log('isLogged', isLogged);
  console.log('role', role);

  return (
    <div className="app">
      <Header />
      <Switch>
        {!isLogged && (
          <Route path="/login" exact>
            <Auth />
          </Route>
        )}

        {role === 'MEMBER' && (
          <Redirect from="/login" to="/dashboard-member" />
        )}

        {role === 'COACH' && (
          <Redirect from="/login" to="/dashboard-coach" />
        )}
        
        {role === 'OWNER' && (
          <Redirect from="/login" to="/dashboard-manager" />
        )}

        <Route
          path="/dashboard-member"
          exact
        >
          <DashboardAdh />
        </Route>
        <Route
          path="/dashboard-coach"
          exact
        >
          <DashboardCoach />
        </Route>
        <Route
          path="/dashboard-manager"
          exact
        >
          <DashboardManager />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Props Validation
/*
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  login: PropTypes.func.isRequire,
};
*/

// == Export
export default App;
