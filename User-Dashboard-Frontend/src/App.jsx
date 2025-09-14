import React from 'react'
import Header from './Components/Header/Header.jsx'
import CommunityDashboard from './Components/CommunityDashboard/CommunityDashboard.jsx'
import SahGovern from './Components/SahGovern.jsx'
// import AuthPage from './Components/AuthCredentials/AuthCredentials.jsx'
import AuthPage from './Components/AuthCredentials/AuthPage.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Herosection from './Pages/Herosection/Herosection.jsx'
import Features from './Pages/Features/Features.jsx'
import HowItWorksSection from './Pages/HowItWorksSection/HowItWorksSection.jsx'
import ReportPreview from './Pages/Herosection/ReportPreview.jsx'
import DashboardPreview from './Pages/Herosection/DashboardPreview.jsx'

const App = () => {
  return (
    <div>
      <AuthPage />
      {/* <SahGovern /> */}
      {/* <Header />
      <Herosection />
      <Features />
      <HowItWorksSection />
      <ReportPreview />
      <DashboardPreview />
      <Footer /> */}
      {/* <HeroSection /> */}
      {/* <CommunityDashboard /> */}
    </div>
  )
}

export default App