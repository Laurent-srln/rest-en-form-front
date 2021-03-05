// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
// import Login from 'src/components/Login';
// import DashboardAdh from 'src/components/DashboardAdh';
// import DashboardCoach from 'src/components/DashboardCoach';
// import DashboardManager from 'src/components/DashboardManager';
// import Coachings from 'src/components/Coachings';
// import BookingCoaching from 'src/components/BookingCoaching';
// import Coachs from 'src/components/Coachs';
import AddTraining from 'src/components/AddTraining';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Login /> */}
    {/* <DashboardAdh /> */}
    {/* <DashboardCoach /> */}
    {/* <DashboardManager /> */}
    {/* <Coachings /> */}
    {/* <BookingCoaching /> */}
    {/* <Coachs /> */ }
    <AddTraining />
    <Footer />
  </div>
);

// == Export
export default App;
//
