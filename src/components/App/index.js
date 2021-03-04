// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import DashboardCoach from 'src/components/DashboardCoach';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
// import DashboardAdh from 'src/components/DashboardAdh';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <DashboardCoach />
    <Footer />
    <Login />
    {/* <DashboardAdh /> */}
  </div>
);

// == Export
export default App;
//
