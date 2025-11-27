import React from 'react';
import { ChevronDown, Search, Filter } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

interface SearchBarProps {
  onAdvancedSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onAdvancedSearch }) => {
  const { searchType, setSearchType, searchQuery, setSearchQuery } = useSearch();

  const searchTypes = ['全部', '找企业', '找专家', '找政策', '找成果', '找项目', '找需求', '找专利', '找资源'];

  const handleSearch = () => {
    console.log('搜索:', searchQuery, '类型:', searchType);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {searchTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="请输入关键词"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>搜索</span>
          </button>
          
          <button
            onClick={onAdvancedSearch}
            className="text-gray-600 hover:text-blue-600 px-4 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 border border-gray-300 hover:border-blue-300"
          >
            <Filter className="w-4 h-4" />
            <span>高级筛选</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;