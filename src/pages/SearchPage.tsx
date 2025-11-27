import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import SearchResults from "../components/SearchResults";
import FilterSidebar from "../components/FilterSidebar";
import AdvancedSearchModal from "../components/AdvancedSearchModal";
import ResourceMap from "../components/ResourceMap";
import { SearchProvider } from "../contexts/SearchContext";

const SearchPage: React.FC = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">
              科创知识综合检索
            </h1>
            <p className="text-gray-600 text-lg">
              精准查找科技政策、成果等核心资源
            </p>
          </div>

          <SearchBar onAdvancedSearch={() => setShowAdvancedSearch(true)} />
          <ResourceMap />
          {/* CategoryTabs removed as per request */}

          <div className="flex gap-6 mt-8">
            <FilterSidebar />
            <SearchResults />
          </div>
        </div>

        {showAdvancedSearch && (
          <AdvancedSearchModal onClose={() => setShowAdvancedSearch(false)} />
        )}
      </div>
    </SearchProvider>
  );
};

export default SearchPage;
