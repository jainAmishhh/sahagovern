import React from "react";
import { Plus, Bell, Search, User } from "lucide-react";

const Header = ({ onNewPost, mousePosition }) => (
  <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/20 shadow-lg">
    <div
      className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/60 to-green-50/60"
      style={{ transform: `translateX(${mousePosition.x * 2}px)` }}
    />
    <div className="relative container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm"></div>
            <div className="relative flex items-center">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-green-700 bg-clip-text text-transparent animate-pulse">
                सह
              </span>
              <span className="text-3xl font-black bg-gradient-to-r from-green-700 via-blue-600 to-purple-700 bg-clip-text text-transparent animate-pulse">
                govern
              </span>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-sm"></div>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search issues, solutions, heroes..."
                className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-xl rounded-full border-0 shadow-lg focus:shadow-2xl focus:ring-4 focus:ring-blue-500/30 transition-all duration-500 placeholder-gray-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onNewPost}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <Plus size={20} className="animate-spin group-hover:animate-none" />
              <span className="hidden md:inline">Report Issue</span>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
          </button>

          <div className="relative group">
            <button className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110">
              <Bell size={22} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce">
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                  3
                </span>
              </div>
            </button>
          </div>

          <div className="relative group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <User className="text-white" size={20} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
