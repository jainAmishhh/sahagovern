import React from "react";
import Sidebar from "../UI/Sidebar.jsx";
import CategoryCard from "../UI/CategoryCard.jsx";

// ---------------- Categories Section ----------------
const CategoriesSection = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <Sidebar title="Categories">
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

// ---------------- Trending Section ----------------
const TrendingSection = () => {
  const trends = ["Water Supply", "Road Repair", "Garbage"];

  return (
    <Sidebar title="Trending">
      <ul className="space-y-2 text-sm">
        {trends.map((trend, i) => (
          <li key={i} className="flex justify-between items-center text-gray-700">
            <span>#{trend}</span>
            <span className="text-gray-400">+{Math.floor(Math.random() * 50)}</span>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
};

// ---------------- Your Impact Section ----------------
const YourImpactSection = () => {
  const impact = { reported: 12, resolved: 8, pending: 4 };

  return (
    <Sidebar title="Your Impact">
      <div className="space-y-2 text-sm">
        <p>Issues Reported: {impact.reported}</p>
        <p>Resolved: {impact.resolved}</p>
        <p>Pending: {impact.pending}</p>
      </div>
    </Sidebar>
  );
};

// ---------------- Active Heroes Section ----------------
const ActiveHeroesSection = () => {
  const heroes = ["Amit", "Sneha", "Ravi", "Priya"];

  return (
    <Sidebar title="Active Heroes">
      <div className="space-y-2">
        {heroes.map((hero, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              {hero[0]}
            </div>
            <span className="text-sm text-gray-700">{hero}</span>
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
      <TrendingSection />
      <YourImpactSection />
      <ActiveHeroesSection />
    </div>
  );
};

export default LeftSidebar;
