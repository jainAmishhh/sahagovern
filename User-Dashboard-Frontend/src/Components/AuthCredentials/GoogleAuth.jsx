// GoogleAuth.jsx

import React from "react";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

const GoogleAuth = ({ isLogin, onGoogleAuth }) => {
  return (
    <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-200/50">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isLogin ? "Continue with Google" : "Sign up with Google"}
          </h3>
          <p className="text-gray-600 text-sm">
            {isLogin ? "Sign in using your Google account for quick access" : "Create your account instantly using your Google profile"}
          </p>
        </div>

        <button
          onClick={onGoogleAuth}
          className="group w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {isLogin ? "Sign in with Google" : "Sign up with Google"}
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
        </button>

        <div className="flex items-center gap-4 text-xs text-gray-500 justify-center">
          <div className="flex items-center gap-1">
            <Shield size={14} className="text-green-600" />
            <span>Secure OAuth</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={14} className="text-blue-600" />
            <span>Instant Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
