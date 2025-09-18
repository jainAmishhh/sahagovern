import React from "react";
import Sidebar from "../UI/Sidebar.jsx";
import CategoryCard from "../UI/CategoryCard.jsx";

// ---------------- Categories Section ----------------
const CategoriesSection = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <Sidebar title="Categories" icon={Filter}>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Your Impact Section ----------------
const YourImpactSection = () => {
  const stats = [
    { label: 'Issues Reported', value: 12, color: 'text-blue-700', icon: AlertTriangle },
    { label: 'Issues Resolved', value: 8, color: 'text-green-700', icon: CheckCircle },
    { label: 'Community Score', value: 850, color: 'text-purple-700', icon: Star }
  ];

  return (
    <Sidebar title="Your Impact" icon={Target}>
      <div className="space-y-6 text-sm">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <stat.icon size={20} className={stat.color} />
              <span className="font-medium text-gray-700">{stat.label}</span>
            </div>
            <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Active Heroes Section ----------------
const ActiveHeroesSection = () => {
  const users = [
    { name: "Bhopal Municipal", avatar: "🏛️", status: "Responding to issues", online: true },
    { name: "Dr. Priya Sharma", avatar: "👩‍⚕️", status: "Sharing solutions", online: true },
    { name: "Local Electrician", avatar: "⚡", status: "Offering help", online: true }
  ];

  return (
    <Sidebar title="Active Heroes" icon={Users}>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center gap-4 p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative text-2xl">
              <span>{user.avatar}</span>
              {user.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.status}</div>
            </div>
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- LeftSidebar ----------------
const LeftSidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="space-y-6">
      <CategoriesSection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <YourImpactSection />
      <ActiveHeroesSection />
    </div>
  );
};

export default LeftSidebar;
