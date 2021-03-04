// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
// import Login from 'src/components/Login';
// import DashboardCoach from 'src/components/DashboardCoach';
// import DashboardAdh from 'src/components/DashboardAdh';
import Coachings from 'src/components/Coachings';
// import Coachs from 'src/components/Coachs';
// import BookingCoaching from 'src/components/BookingCoaching';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Login /> */}
    {/* <DashboardCoach /> */}
    {/* <DashboardAdh /> */}
    <Coachings />
    {/* <Coachs /> */ }
    {/* <BookingCoaching /> */}
    <Footer />
  </div>
);

// == Export
export default App;
//
