import React from 'react';
import { Database, ArrowUp, FileText, Share2, Shield } from 'lucide-react';

const DataSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
          <Database className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">科创智数</h2>
        <span className="text-sm text-gray-500">支撑科研机构与高新企业开发，共建产业生态</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div className="space-y-6">
          <h3 className="font-bold text-gray-900 border-l-4 border-blue-500 pl-3">成果转化</h3>
          <div className="space-y-4">
            {[
              { title: '重点领域科技成果转化成熟度指数', tag: '成果分析' },
              { title: '技术成熟度与市场化潜力评估数据', tag: '成果评估' },
              { title: '技术转移认证职业能力/等级模型', tag: '成效评估' },
              { title: '企业技术需求与转化能力画像数据集', tag: '成果对接' },
              { title: '技术成果成交额与分布分类数据集', tag: '成果统计' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{item.title}</span>
                </div>
                <span className="text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <h3 className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-3">科技攻关</h3>
          <div className="space-y-4">
            {[
              { title: '科技攻关关键问题 (FAQ) 问答库数据集', tag: '问答库' },
              { title: '科技攻关专家资源推荐匹配模型', tag: '专家推荐' },
              { title: '研发投入与产出效能分析参考数据', tag: '效能评估' },
              { title: '科技攻关项目全流程监控评价数据集', tag: '项目监控' },
              { title: '科技攻关重难点与专利关联分析数据', tag: '专利分析' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{item.title}</span>
                </div>
                <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <h3 className="font-bold text-gray-900 border-l-4 border-green-500 pl-3">赋能产业</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700">企业创新资源与产业链协同数据</span>
              </div>
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded">协同发展</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700">AI 赋能场景案例与成效模型</span>
              </div>
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded">智能应用</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700">产业链主要供需关系质量数据库</span>
              </div>
              <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded">供需匹配</span>
            </div>

            {/* Promo Card */}
            <div className="mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white flex items-center justify-between shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
              <div>
                <h4 className="font-bold text-lg mb-1">我要分享 高质量数据集</h4>
                <p className="text-xs text-blue-100">小平台公平共建高质量共享数据，创造无限价值</p>
              </div>
              <Share2 className="w-8 h-8 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
