// App.jsx

import React, { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Herosection from './Pages/Herosection/Herosection.jsx';
import Features from './Pages/Features/Features.jsx';
import HowItWorksSection from './Pages/HowItWorksSection/HowItWorksSection.jsx';
import ReportPreview from './Pages/Herosection/ReportPreview.jsx';
import DashboardPreview from './Pages/Herosection/DashboardPreview.jsx';
import AuthPage from './Components/AuthCredentials/AuthPage.jsx';
import SocialCivicPlatform from './Pages/SocialCivicPlatform/SocialCivicPlatform.jsx';
import AuthAccess from './Components/AuthCredentials/AuthAccess.jsx';
import Home from './Pages/Home/Home.jsx';

const App = () => {
  return (
    <div>
      {showAuth ? (
        <AuthPage onBack={handleBackToLanding} />
      ) : (
        <>
        {/* <Home /> */}
        <AuthAccess onLoginClick={handleAuthToggle}/>
         {/* <SocialCivicPlatform /> */}
          {/* <Header onLoginClick={handleAuthToggle} />
          <Herosection />
          <Features />
          <HowItWorksSection />
          <ReportPreview />
          <DashboardPreview />
          <Footer /> */}
        </>
      )}
    </div>
  );
};

export default App;
