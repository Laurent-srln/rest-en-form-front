// == Import npm
import React from 'react';
import Header from '../Header';
import DashboardCoach from '../DashboardCoach';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <DashboardCoach />
  </div>
);

// == Export
export default App;
