import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cloud, Wrench, FileText, User, Cpu, MessageSquare, Search, PenTool, Share2, BarChart } from 'lucide-react';

const aiCapabilities = [
  { title: '产业报告', icon: FileText, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { title: '技术报告', icon: Cpu, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: '企业画像', icon: BarChart, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { title: '人才画像', icon: User, color: 'text-orange-500', bg: 'bg-orange-50' },
];

const toolApis = [
  { title: '智能问答 (专家/技术)', bg: 'bg-blue-50 text-blue-700' },
  { title: '专利分析 (分类/聚类)', bg: 'bg-blue-50 text-blue-700' },
  { title: '技术图谱工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '企业/高校/人才/合作工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '专利/论文/项目工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '成果/需求/匹配工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '跨领域/人才库/管理工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '质量/价值/评估工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '自动生成图谱工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '技术/成果/推荐工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '攻关/监控/预警工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '成果/转化/监测工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '同业/竞品/分析工具', bg: 'bg-blue-50 text-blue-700' },
  { title: '部分/全流程/辅助工具', bg: 'bg-blue-50 text-blue-700' },
];

const DataAPIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI赋能科技情报挖掘</h1>
            <p className="text-xl text-gray-600">海量学术高性能数据API</p>
          </div>
          
          {/* 3D Illustration Placeholder */}
          <div className="md:w-1/2 flex justify-center relative">
             <div className="relative w-80 h-64">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>
                <div className="relative w-full h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl transform rotate-y-12 rotate-x-6 flex flex-col items-center justify-center gap-4">
                   <div className="text-6xl font-black text-blue-600/20 tracking-widest">API</div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce delay-100">
                        <Cloud className="text-white w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce delay-300">
                        <Wrench className="text-white w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce delay-500">
                        <Cpu className="text-white w-6 h-6" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* AI Capabilities Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cloud className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-bold text-gray-900">AI 能力组件</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group">
                <div className={`p-3 rounded-lg ${item.bg} group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <span className="font-bold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tool APIs Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cloud className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-bold text-gray-900">应用工具 API</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {toolApis.map((item, idx) => (
              <div key={idx} className={`${item.bg} px-4 py-3 rounded-lg text-xs font-medium text-center hover:bg-blue-100 transition-colors cursor-pointer truncate`}>
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* Diagram Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <div className="relative bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">自动生成图谱工具</h3>
                <p className="text-gray-400">配图</p>
             </div>
          </div>
          <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
          </div>
        </div>

        {/* Diagram Section 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-xs text-gray-500 leading-relaxed order-2 lg:order-1">
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
          </div>
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden group order-1 lg:order-2">
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <div className="relative bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">自动生成图谱工具</h3>
                <p className="text-gray-400">配图</p>
             </div>
          </div>
        </div>

        {/* Diagram Section 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <div className="relative bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">自动生成图谱工具</h3>
                <p className="text-gray-400">配图</p>
             </div>
          </div>
          <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
            <p>工具通过文本挖掘技术从海量科技文献中抽取实体关系，构建知识图谱。支持自定义实体类型和关系类型，提供可视化编辑界面。</p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default DataAPIPage;
