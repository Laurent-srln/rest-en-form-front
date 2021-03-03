// == Import npm
import React from 'react';

// == Import
import Login from 'src/components/Login';
import DashboardAdh from 'src/components/DashboardAdh';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Login />
    {/* <DashboardAdh /> */}
  </div>
);

// == Export
export default App;
