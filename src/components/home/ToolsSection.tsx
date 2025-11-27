import React from 'react';
import { Wrench, Hammer, FileBarChart, Search, Users, Settings } from 'lucide-react';

const ToolsSection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-blue-600 rounded-full" />
        <h2 className="text-xl font-bold text-gray-900">科创精品工具</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: 成果转化辅助工具 */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-gray-600" />
            成果转化辅助工具
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '成果评估工具', icon: FileBarChart },
              { name: '成果推介工具', icon: Search },
              { name: '需求挖掘工具', icon: Settings },
              { name: '服务机构准入工具', icon: Users },
              { name: '服务机构筛选工具', icon: Search },
            ].map((tool, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <tool.icon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 科技攻关辅助工具 */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Hammer className="w-5 h-5 text-gray-600" />
            科技攻关辅助工具
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '项目申报工具', icon: FileBarChart },
              { name: '需求申报工具', icon: Search },
              { name: '企业攻关能力分析工具', icon: Settings },
              { name: '攻关资源推荐工具', icon: Users },
              { name: '自动生成图谱工具', icon: Search },
              { name: '要素自动上链工具', icon: Settings },
            ].map((tool, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <tool.icon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Reports & Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
         <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">AI 科创报告</h3>
            <div className="flex gap-4">
                {['产业报告', '台账研报', '成果评估报告', '企业分析报告', '人才分析报告'].map(item => (
                    <span key={item} className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm">{item}</span>
                ))}
            </div>
         </div>
         <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">AI 科创问答</h3>
            <div className="flex gap-4">
                {['成果伙伴智能对话', '科技攻关智能问答'].map(item => (
                    <span key={item} className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm">{item}</span>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ToolsSection;
