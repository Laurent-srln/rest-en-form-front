// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Auth from 'src/components/Auth';
// import Auth from 'src/containers/Auth';

// import DashboardAdh from 'src/components/DashboardAdh';
// import DashboardCoach from 'src/components/DashboardCoach';
// import DashboardManager from 'src/components/DashboardManager';

// import Coachings from 'src/components/Coachings';
// import BookingCoaching from 'src/components/BookingCoaching';
// import Coachs from 'src/components/Coachs';

// import HealthCheck from 'src/components/HealthCheck';
// import AddTraining from 'src/components/AddTraining';
// import Members from 'src/components/Members';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Auth />
    {/* <DashboardAdh /> */}
    {/* <DashboardCoach /> */}
    {/* <DashboardManager /> */}
    {/* <Coachings /> */}
    {/* <Coachs /> */ }
    {/* <DashboardCoach /> */}
    {/* <DashboardManager /> */}
    {/* <HealthCheck /> */}
    {/* <BookingCoaching /> */}
    {/* <AddTraining /> */}
    {/* <Members /> */}
    <Footer />
  </div>
);

// == Export
export default App;
//
