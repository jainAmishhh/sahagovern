// App.jsx

import React from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Herosection from "./Pages/Herosection/Herosection.jsx";
import Features from "./Pages/Features/Features.jsx";
import HowItWorksSection from "./Pages/HowItWorksSection/HowItWorksSection.jsx";
import ReportPreview from "./Pages/Herosection/ReportPreview.jsx";
import DashboardPreview from "./Pages/Herosection/DashboardPreview.jsx";
import AuthPage from "./Components/AuthCredentials/AuthPage.jsx";
import SocialCivicPlatform from "./Pages/SocialCivicPlatform/SocialCivicPlatform.jsx";
import AuthAccess from "./Components/AuthCredentials/AuthAccess.jsx";
import Home from "./Pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <AuthAccess />, // your landing page (before login)
  },
  {
    path: "/authPage",
    element: <AuthPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/platform",
    element: <SocialCivicPlatform />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
