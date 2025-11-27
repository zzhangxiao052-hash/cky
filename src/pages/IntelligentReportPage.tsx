import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, GitMerge, CheckCircle2, Building2, Upload, ChevronDown, Loader2 } from 'lucide-react';

const analysisTypes = [
  {
    id: 'industry',
    title: '产业分析',
    desc: '综合企业经营、创新、资源、风险等多维度数据，生成精准企业特征，发展潜力分析，为合作、投资决策提供依据。',
    icon: FileText
  },
  {
    id: 'chain',
    title: '创新链分析',
    desc: '通过智能挖掘与研判生成兼具趋势洞察、主体画像及落地指引的专业报告，为科创决策与资源协同提供精准支撑。',
    icon: GitMerge
  },
  {
    id: 'evaluation',
    title: '成果评估',
    desc: '聚焦技术核心指标、成熟度、应用场景及转化路径，输出技术价值与市场潜力分析，助力技术转化与资源对接。',
    icon: CheckCircle2
  },
  {
    id: 'portrait',
    title: '企业画像',
    desc: '基于人才能力、经历、领域及配族等核心信息，构建精准人才特征模型',
    icon: Building2
  }
];

const IntelligentReportPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-blue-50/30">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Top Slogan */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">科技成果转化全流程智能化</h1>
          <p className="text-gray-500 text-lg">通过智能化手段重构科创服务链条，显著提升效率与精准度。</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">创建新报告</h2>
              <p className="text-gray-400 text-sm mt-1">请填写以下信息，AI将为您生成科创服务核心场景报告</p>
            </div>
            <span className="text-gray-400 text-sm">历史报告/生成中</span>
          </div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {analysisTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedType === type.id
                    ? 'border-blue-500 bg-blue-50/50'
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  selectedType === type.id ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'
                }`}>
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${
                  selectedType === type.id ? 'text-blue-700' : 'text-gray-900'
                }`}>
                  {type.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {type.desc}
                </p>
                
                {selectedType === type.id && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Analysis Target */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">分析目标</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="请输入分析对象，如：某某汽车、锂电池材料"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <p className="text-xs text-gray-400 mt-2">支持行业关键词、企业名称、项目关键词等输入方式</p>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">补充资料上传</label>
              <p className="text-xs text-gray-400 mb-3">可选，上传相关文件以提升分析准确性</p>
              <div className="border-2 border-dashed border-blue-200 rounded-2xl p-8 text-center hover:bg-blue-50/30 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">将文件拖拽至此，或点击上传</p>
                <p className="text-xs text-blue-400">支持 PDF, DOC, DOCX, TXT, JPEG, PNG, GIF</p>
              </div>
            </div>

            {/* Extra Requirements */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">额外需求</label>
              <p className="text-xs text-gray-400 mb-3">可选，描述特殊分析要求和关注重点</p>
              <textarea
                rows={4}
                placeholder="请描述您的具体分析要求和关注重点"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <p className="text-xs text-gray-400">将生成智能研报，包含12个分析模块</p>
              <div className="flex gap-4 w-full justify-center">
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-12 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isGenerating && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isGenerating ? '生成中...' : '生成报告'}
                </button>
                <button className="px-12 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-medium hover:bg-blue-50 transition-all">
                  重置表单
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntelligentReportPage;
