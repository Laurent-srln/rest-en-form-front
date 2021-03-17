// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';

import Auth from 'src/containers/Auth';
import NewPassword from 'src/containers/Auth/NewPassword';

import DashboardAdh from 'src/containers/DashboardAdh';
import DashboardManager from 'src/containers/DashboardManager';
import DashboardCoach from 'src/containers/DashboardCoach/DashboardCoach';

import Coachings from 'src/containers/Coachings/Coachings';
import Workouts from 'src/containers/Workouts/Workouts';
import AddWorkout from 'src/containers/AddWorkout';
import BookingCoaching from 'src/containers/BookingCoaching';

import Members from 'src/containers/GetAllMembers';
import Coachs from 'src/containers/GetCoachs/Coachs';

import './styles.scss';

// == Composant
const App = ({
  isLogged, role, appInit,
}) => {
  useEffect(appInit, []);
  // useEffect(onClickLogout, []);

  return (
    <div className="app">
      <Header />
      {!isLogged && (
      <Redirect to="/login" />
      ) }
      <Switch>
        <Redirect exact from="/" to="/login" />

        {role === 'MEMBER' && (
          <Redirect from="/login" to="/dashboard-member" />
        )}

        {role === 'COACH' && (
          <Redirect from="/login" to="/dashboard-coach" />
        )}

        {role === 'OWNER' && (
          <Redirect from="/login" to="/dashboard-manager" />
        )}

        <Route path="/login" exact>
          <Auth />
        </Route>
        <Route
          exact
          path="/register"
        >
          <NewPassword />
        </Route>
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

        <Route
          exact
          path="/coachings"
        >
          <Coachings />
        </Route>

        <Route
          exact
          path="/booking-coaching"
        >
          <BookingCoaching />
        </Route>

        <Route exact path="/members">
          <Members />
        </Route>

        <Route
          exact
          path="/workout"
        >
          <Workouts />
        </Route>

        <Route
          exact
          path="/add-workout"
        >
          <AddWorkout />
        </Route>
        <Route
          exact
          path="/coachs"
        >
          <Coachs />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Props Validation
/*
App.propTypes = {
  isLogged: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  appInit: PropTypes.func,
};
*/

// == Export
export default App;
