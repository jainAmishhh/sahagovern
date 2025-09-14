import React from "react";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                सह
              </span>
              <span className="text-4xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">
                govern
              </span>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping" />
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors duration-300 font-medium"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
