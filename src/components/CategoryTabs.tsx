import React from 'react';
import { useSearch } from '../contexts/SearchContext';

const CategoryTabs: React.FC = () => {
  const { activeCategory, setActiveCategory } = useSearch();

  const categories = [
    { id: 'enterprise', label: '企业', count: 12580 },
    { id: 'expert', label: '专家', count: 8960 },
    { id: 'policy', label: '政策', count: 45620 },
    { id: 'achievement', label: '成果', count: 28940 },
    { id: 'project', label: '项目', count: 15680 },
    { id: 'demand', label: '需求', count: 7840 },
    { id: 'patent', label: '专利', count: 32450 },
    { id: 'resource', label: '资源', count: 5620 }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex border-b overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeCategory === category.id
                  ? 'text-blue-600 border-blue-600 bg-blue-50'
                  : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              <span>{category.label}</span>
              <span className="ml-2 text-xs text-gray-500">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;