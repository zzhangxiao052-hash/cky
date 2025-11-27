import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/graph/Sidebar';
import GraphCanvas from '../components/graph/GraphCanvas';
import { Search, RotateCcw } from 'lucide-react';

const InnovationChainGraphPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      
      {/* Top Toolbar */}
      <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white z-20">
        <h1 className="text-xl font-bold text-gray-900">创新链图谱</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="请输入用户名称" 
              className="w-64 pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
            />
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            搜索
          </button>
          <button className="px-6 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            重置
          </button>
        </div>

        <div className="w-24"></div> {/* Spacer for balance */}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <GraphCanvas />
        
        {/* Generate Report Button (Floating) */}
        <div className="absolute top-6 right-6 z-30">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
            生成报告
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationChainGraphPage;
