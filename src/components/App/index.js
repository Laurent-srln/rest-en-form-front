// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// import Auth from 'src/components/Auth';
import Auth from 'src/containers/Auth';

// import DashboardAdh from 'src/components/DashboardAdh';
// import DashboardCoach from 'src/components/DashboardCoach';
// import DashboardManager from 'src/components/DashboardManager';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Auth />
    {/* <DashboardAdh /> */}
    {/* <DashboardCoach /> */}
    {/* <DashboardManager /> */}
    <Footer />
  </div>
);

// == Export
export default App;
