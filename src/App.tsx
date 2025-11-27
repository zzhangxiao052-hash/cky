import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import IntelligentReportPage from './pages/IntelligentReportPage';
import InnovationChainGraphPage from './pages/InnovationChainGraphPage';
import DatasetsPage from './pages/DatasetsPage';
import DataAPIPage from './pages/DataAPIPage';
import PolicyPage from './pages/PolicyPage';
import ExpertPage from './pages/ExpertPage';
import ExpertPanoramaPage from './pages/ExpertPanoramaPage';
import ExpertDetailPage from './pages/ExpertDetailPage';
import AchievementPage from './pages/AchievementPage';
import ResourcePage from './pages/ResourcePage';
import StrategySubscribePage from './pages/StrategySubscribePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/expert/panorama" element={<ExpertPanoramaPage />} />
        <Route path="/expert/detail" element={<ExpertDetailPage />} />
        <Route path="/achievement" element={<AchievementPage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/report" element={<IntelligentReportPage />} />
        <Route path="/graph" element={<InnovationChainGraphPage />} />
        <Route path="/datasets" element={<DatasetsPage />} />
        <Route path="/api" element={<DataAPIPage />} />
        <Route path="/strategy/subscribe" element={<StrategySubscribePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
