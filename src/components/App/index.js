// == Import npm
import React from 'react';
import Header from '../Header';
import DashboardCoach from '../DashboardCoach';

// == Import
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <DashboardCoach />
    <Footer />
  </div>
);

// == Export
export default App;
