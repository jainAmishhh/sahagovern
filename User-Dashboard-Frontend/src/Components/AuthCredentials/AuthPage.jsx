import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AuthToggle from "./AuthToggle";
import AuthMethodSelector from "./AuthMethodSelector";
import GoogleAuth from "./GoogleAuth";
import AuthForm from "./AuthForm";
import { Shield } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState("email"); // 'email' | 'phone' | 'google'
  const [showOtp, setShowOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    city: "",
    state: "",
    otp: "",
  });

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSendOtp = () => {
    setShowOtp(true);
    setOtpTimer(30);
  };

  const handleGoogleAuth = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authMethod === "phone" && !showOtp) {
      handleSendOtp();
      return;
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const toggleForm = () => {
    setIsLogin((s) => !s);
    setShowOtp(false);
    setFormData({
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      city: "",
      state: "",
      otp: "",
    });
  };

  const switchAuthMethod = (method) => {
    setAuthMethod(method);
    setShowOtp(false);
    setFormData((s) => ({
      ...s,
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      otp: "",
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-x-hidden relative">
      {/* encapsulated background animation */}
      {/* <BackgroundAnimation /> */}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Logo / header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6 shadow-xl">
                <Shield className="text-white" size={32} />
              {/* Shield icon is inside AuthForm */}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back" : "Join सहGovern"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Sign in to continue making a difference in your community"
                : "Create your account and start reporting civic issues"}
            </p>
          </div>

          {/* Toggle, method selector & form */}
          <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="mt-4" />
          <AuthMethodSelector authMethod={authMethod} setAuthMethod={switchAuthMethod} />

          {authMethod === "google" ? (
            <div className="mt-6">
              <GoogleAuth isLogin={isLogin} onGoogleAuth={handleGoogleAuth} />
            </div>
          ) : (
            <div className="mt-6">
              <AuthForm
                isLogin={isLogin}
                authMethod={authMethod}
                formData={formData}
                onChange={handleInputChange}
                showOtp={showOtp}
                setShowOtp={setShowOtp}
                otpTimer={otpTimer}
                setOtpTimer={setOtpTimer}
                handleSendOtp={handleSendOtp}
                handleSubmit={handleSubmit}
                toggleForm={toggleForm}
                setIsLogin={setIsLogin}
              />
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-[100] bg-black/50 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl max-w-md mx-4 text-center border border-gray-200 transform animate-bounce">
            <div className="mb-6">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isLogin ? "Welcome Back!" : "Account Created!"}
            </h3>
            <p className="text-gray-600 mb-6">Authentication was successful.</p>
            <button
              onClick={() => {}}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
