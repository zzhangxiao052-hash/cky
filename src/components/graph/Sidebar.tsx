import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('上市企业');

  const stats = {
    module: [
      { value: '7605.36', unit: '亿', label: '产业规模', color: 'text-blue-600' },
      { value: '76056', unit: '人', label: '产业人才', color: 'text-blue-600' },
      { value: '76056', unit: '项', label: '计划项目', color: 'text-blue-600' },
    ],
    status: [
      { value: '7606', unit: '家', label: '企业总数', color: 'text-blue-600' },
      { value: '76056', unit: '项', label: '产业成果', color: 'text-blue-600' },
      { value: '76056', unit: '个', label: '创新平台', color: 'text-blue-600' },
    ]
  };

  const companies = [
    { id: 1, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
    { id: 2, name: '重庆长安汽车股份有限公司', area: '江北区' },
    { id: 3, name: '重庆千星科技股份有限公司', area: '渝北区' },
    { id: 4, name: '蓝黛科技集团股份有限公司', area: '璧山区' },
    { id: 5, name: '重庆宗申动力机械股份有限公司', area: '巴南区' },
    { id: 6, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
    { id: 7, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
    { id: 8, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
    { id: 9, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
    { id: 10, name: '赛力斯集团股份有限公司', area: '沙坪坝区' },
  ];

  return (
    <div className="w-96 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Stats Header */}
        <div className="flex items-center gap-8 mb-2">
          <h3 className="font-bold text-red-500 text-lg border-b-2 border-red-500 pb-1">电池模组</h3>
          <h3 className="font-bold text-blue-500 text-lg">创新现状</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.module.map((item, i) => (
            <div key={`m-${i}`} className="bg-blue-50/50 p-4 rounded-xl text-center">
              <div className={`text-xl font-bold ${item.color}`}>
                {item.value} <span className="text-xs text-gray-500 font-normal">{item.unit}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.label}</div>
            </div>
          ))}
          {stats.status.map((item, i) => (
            <div key={`s-${i}`} className="bg-blue-50/50 p-4 rounded-xl text-center">
              <div className={`text-xl font-bold ${item.color}`}>
                {item.value} <span className="text-xs text-gray-500 font-normal">{item.unit}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Company List Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center border-b border-gray-200 mb-4">
            {['企业', '人才', '成果', '需求'].map((tab) => (
              <button 
                key={tab}
                className={`pb-2 px-2 text-sm font-medium ${
                  tab === '企业' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {['上市企业', '高新技术企业', '科技型企业', '院所/高校'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`whitespace-nowrap px-3 py-1 text-xs rounded-md transition-colors ${
                  activeTab === type 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-400 mb-2 px-2">
            <span>序号</span>
            <span className="flex-1 ml-4">企业名称</span>
            <span>所在区域</span>
          </div>

          <div className="space-y-1">
            {companies.map((company) => (
              <div key={company.id} className="flex items-center text-sm py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
                <span className="w-6 text-gray-400 font-mono">{company.id}</span>
                <span className="flex-1 text-gray-700 group-hover:text-blue-600 truncate mr-2">
                  {company.name}
                </span>
                <span className="text-gray-400 text-xs whitespace-nowrap">{company.area}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-400 px-2">
            <span>共 658 项数据</span>
            <div className="flex gap-2">
               <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-4 h-4" /></button>
               <span className="px-2 py-1 bg-white border rounded">1</span>
               <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Collapse Toggle */}
      <div className="absolute left-96 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-r-lg p-1 cursor-pointer hover:bg-gray-50 z-10">
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default Sidebar;
