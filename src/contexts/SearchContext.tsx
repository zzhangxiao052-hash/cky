import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchType: string;
  setSearchType: (type: string) => void;
  filters: any;
  setFilters: (filters: any) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('enterprise');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('专利');
  const [filters, setFilters] = useState({});

  return (
    <SearchContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        searchType,
        setSearchType,
        filters,
        setFilters
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};