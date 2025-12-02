import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronLeft, Building2, AlertTriangle, CheckCircle, TrendingUp, Activity, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompetitorDetectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Breadcrumbs & Back Button */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center gap-1 hover:border-blue-300 hover:text-blue-700"
          >
            <ChevronLeft className="w-4 h-4" />
            返回上一级
          </button>
          <div className="text-sm text-gray-500">
            <span>首页</span>
            <span className="mx-2">/</span>
            <span>科创智策</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600">竞合机构检测</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            
            {/* Institution Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">华芯半导体科技股份有限公司</h1>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 text-xs rounded bg-blue-50 text-blue-600 border border-blue-100">高新技术企业</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-green-50 text-green-600 border border-green-100">专精特新</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-purple-50 text-purple-600 border border-purple-100">瞪羚企业</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-4">
                      <span>成立时间：2015-08-12</span>
                      <span>注册资本：12000万元</span>
                      <span>地区：江苏省苏州市</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">竞合指数</div>
                  <div className="text-4xl font-bold text-blue-600">92.5</div>
                  <div className="text-xs text-green-500 flex items-center justify-end gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>排名前 5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Technical Capability */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">技术实力检测</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">专利总数</span>
                    <span className="font-bold">245 件</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">发明占比</span>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-700 leading-relaxed mt-2">
                    该企业在碳化硅功率器件领域拥有核心专利壁垒，近期研发活跃度高。
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-gray-900">风险因子检测</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">法律诉讼风险低</div>
                      <div className="text-xs text-gray-500">近三年无重大知识产权诉讼</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">人才流失预警</div>
                      <div className="text-xs text-gray-500">核心研发团队近期有变动迹象</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">经营状况稳定</div>
                      <div className="text-xs text-gray-500">连续两年营收增长超过 20%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cooperation Potential */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-gray-900">合作潜力评估</h3>
                </div>
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                      <circle cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="25.12" />
                    </svg>
                    <span className="absolute text-2xl font-bold text-gray-900">A+</span>
                  </div>
                  <p className="text-sm text-center text-gray-600 mt-2">
                    强烈推荐合作<br/>
                    <span className="text-xs text-gray-400">匹配度 95%</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Analysis Tabs/Content */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">详细检测报告</h3>
              
              <div className="space-y-6">
                {/* Section 1 */}
                <div className="border-b border-gray-100 pb-6">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                    技术路径重合度分析
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    通过对比双方专利布局与研发方向，发现该企业在 <span className="text-blue-600 font-medium">第三代半导体材料</span> 与 <span className="text-blue-600 font-medium">功率器件封装</span> 领域与我方具有高度互补性。其在SiC外延生长技术上的突破，可有效解决我方在原材料端的瓶颈问题。
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 h-48 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                     [此处为技术路径对比雷达图]
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                    供应链关系预测
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="text-sm font-bold text-green-700 mb-1">潜在供应商</div>
                        <p className="text-xs text-green-600">在晶圆切割设备方面，该企业具备量产供货能力，价格优势明显。</p>
                     </div>
                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-sm font-bold text-blue-700 mb-1">联合研发伙伴</div>
                        <p className="text-xs text-blue-600">适合共同申报国家级“芯片制造工艺提升”重点专项。</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">关联竞品机构</h3>
              <div className="space-y-4">
                {[
                  { name: '中微电子科技', tag: '直接竞争', color: 'red' },
                  { name: '北方创新集成', tag: '潜在合作', color: 'green' },
                  { name: '光华精密仪器', tag: '供应链', color: 'blue' },
                  { name: '东芯半导体', tag: '直接竞争', color: 'red' },
                  { name: '晶圆科技', tag: '潜在合作', color: 'green' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-bold">
                        {item.name.substring(0, 1)}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${
                      item.color === 'red' ? 'text-red-600 bg-red-50 border-red-100' :
                      item.color === 'green' ? 'text-green-600 bg-green-50 border-green-100' :
                      'text-blue-600 bg-blue-50 border-blue-100'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">生成完整报告</h3>
              <p className="text-blue-100 text-sm mb-4">
                下载详细的 PDF 版本竞合分析报告，包含更多深度数据与专家建议。
              </p>
              <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                立即下载
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitorDetectionPage;
