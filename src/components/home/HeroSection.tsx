import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const tabs = [
  '找企业', '找专家', '找政策', '找成果', '找项目', '找需求', '找专利', '找资源'
];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('找企业');

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl mb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-7/12 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">科创快找</h1>
            <p className="text-gray-500">精准查找科创资源，成果等级心愿单</p>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-lg">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4 px-2 pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex items-center p-2">
              <input
                type="text"
                placeholder={`请输入${activeTab.slice(1)}名称...`}
                className="w-full pl-4 pr-32 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-700 placeholder-gray-400"
              />
              <button 
                onClick={() => navigate('/search')}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                搜索
              </button>
            </div>
            
            {/* Hot Search Tags */}
            <div className="mt-3 px-4 pb-2 flex gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">🔥 重庆长安汽车股份有限公司</span>
              <span className="flex items-center gap-1">重庆千星科技股份有限公司</span>
            </div>
          </div>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/3]">
            {/* Abstract Tech Illustration using CSS */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-2xl transform rotate-y-12 hover:rotate-0 transition-transform duration-500">
               <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl opacity-10 flex items-center justify-center">
                  <span className="text-9xl">🏙️</span>
               </div>
               {/* Floating elements */}
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce delay-100">
                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">⚡</div>
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce delay-300">
                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">📊</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
