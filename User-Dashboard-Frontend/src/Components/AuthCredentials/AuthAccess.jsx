import React from "react";
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx";
import Herosection from "../../Pages/Herosection/Herosection.jsx";
import Features from "../../Pages/Features/Features.jsx";
import HowItWorksSection from "../../Pages/HowItWorksSection/HowItWorksSection.jsx";
import ReportPreview from "../../Pages/Herosection/ReportPreview.jsx";
import DashboardPreview from "../../Pages/Herosection/DashboardPreview.jsx";

const AuthAccess = ({onLoginClick}) => {
  return (
    <>
     <Header onLoginClick={onLoginClick} />
      <Herosection />
      <Features />
      <HowItWorksSection />
      <ReportPreview />
      <DashboardPreview />
      <Footer />
    </>
  );
};

export default AuthAccess;
