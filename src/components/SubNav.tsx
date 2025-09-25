import React from 'react';
import { useCategories } from '../hooks/useCategories';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b-2 border-inasal-orange shadow-inasal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 overflow-x-auto py-4 scrollbar-hide">
          {loading ? (
            <div className="flex space-x-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-10 w-24 bg-inasal-lightGray rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={() => onCategoryClick('all')}
                className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-inasal text-white shadow-inasal-lg scale-105'
                    : 'bg-inasal-lightGray text-inasal-dark hover:bg-inasal-orange hover:text-white hover:shadow-inasal'
                }`}
              >
                <span className="text-lg">🍽️</span>
                <span>All</span>
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onCategoryClick(c.id)}
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                    selectedCategory === c.id
                      ? 'bg-gradient-inasal text-white shadow-inasal-lg scale-105'
                      : 'bg-inasal-lightGray text-inasal-dark hover:bg-inasal-orange hover:text-white hover:shadow-inasal'
                  }`}
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNav;


