// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import DashboardManager from 'src/components/DashboardManager';
// import Login from 'src/components/Login';
import DashboardCoach from 'src/components/DashboardCoach';
// import DashboardAdh from 'src/components/DashboardAdh';
import Coachings from 'src/components/Coachings';
// import Coachs from 'src/components/Coachs';
import BookingCoaching from 'src/components/BookingCoaching';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <DashboardCoach date="28/03" name="Jeanbon" hour="9h00" /> */}
    <DashboardManager
      totalMembers={42}
      totalCoaches={3}
      specialityName="Chomeur pro"
      availableSlot="9h00 - 9h15"
      addStartSlot=""
      addEndSlot=""
      coachName="Soun"
      date="28/03"
      startSlot="9h45"
      endSlot="10h00"
    />
    {/* <Footer />
    <Login />
     <DashboardAdh /> */}
    {/* <Login /> */}
    {/* <DashboardCoach /> */}
    {/* <DashboardAdh /> */}
    {/* <Coachings /> */}
    {/* <Coachs /> */ }
    <Footer />
  </div>
);

// == Export
export default App;
//
