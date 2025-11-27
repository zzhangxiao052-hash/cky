import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import RecommendationSection from '../components/home/RecommendationSection';
import AIAgentSection from '../components/home/AIAgentSection';
import ReportSection from '../components/home/ReportSection';
import DataSection from '../components/home/DataSection';
import ToolsSection from '../components/home/ToolsSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <HeroSection />
        <RecommendationSection />
        <AIAgentSection />
        <ReportSection />
        <DataSection />
        <ToolsSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
