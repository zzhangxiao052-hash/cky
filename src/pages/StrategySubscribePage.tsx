import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const techItems = [
  { tag: '监测报告', badge: '新增', title: '《川渝地区人工智能产业链竞争态势监测周报》', date: '2025-11-10' },
  { tag: '监测报告', badge: '新增', title: '《人工智能研发与工业设计融合应用研究进展监测报告》', date: '2025-11-07' },
  { tag: '监测报告', badge: '新增', title: '《人工智能教育领域生成式技术应用趋势监测简报》', date: '2025-11-07' },
  { tag: '监测报告', badge: '监测中', title: '《算法安全合规·2025第三季度重点治理专题监测》', date: '2025-11-07' },
  { tag: '监测报告', badge: '监测中', title: '《智能制造数智化转型典型案例技术洞察报告》', date: '2025-11-07' },
  { tag: '监测报告', badge: '监测中', title: '《深度学习框架生态发展监测与开源评估》', date: '2025-11-07' },
  { tag: '监测报告', badge: '监测中', title: '《人工智能芯片研发进展与产业链协同化研究》', date: '2025-11-07' },
  { tag: '监测报告', badge: '监测中', title: '《智能语音交互核心算法与工程落地监测》', date: '2025-11-07' },
];

const orgItem = {
  name: '中电智能制造联合体（重庆）有限公司',
  level: '国家级',
  desc: '技改项目（人工智能）专项监测',
  date: '2025-11-05',
};

const experts = [
  { name: '李', title: '教授', org: '重庆大学', paper: '《认知智能增强的生成式系统》', count: 69, updated: '2025-09-15', color: 'bg-sky-100 text-sky-600' },
  { name: '潘', title: '研究员', org: '中科院', paper: '《仿生视觉感知芯片架构研究》', count: 99, updated: '2025-11-05', color: 'bg-amber-100 text-amber-600' },
  { name: '杨', title: '工程师', org: '某企业', paper: '《实时语音识别系统性能优化与应用》', count: 32, updated: '2025-11-19', color: 'bg-red-100 text-red-600' },
];

const StrategySubscribePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="text-sm text-gray-500 mb-4">首页 / 科创智策 / 监测订阅</div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-base font-bold text-gray-900">技术监测</div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">人工智能</span>
                <span className="px-2 py-0.5 text-[10px] rounded bg-red-100 text-red-600">NEW</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-blue-600">监测中心</button>
              <button className="px-3 py-1 rounded text-sm bg-blue-600 text-white">+ 新增监测</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
              <div className="divide-y divide-gray-100 border rounded-xl border-gray-100">
                {techItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">[{item.tag}]</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-100">{item.badge}</span>
                      <span className="text-sm text-blue-700 hover:text-blue-800 cursor-pointer line-clamp-1">{item.title}</span>
                    </div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                {[1,2,3,4,5,6,10].map((p) => (
                  <button key={p} className={`w-8 h-8 rounded border text-xs ${p===1? 'bg-blue-600 text-white border-blue-600':'bg-white text-gray-700 border-gray-200'}`}>{p}</button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-700">技术研报</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600">人工智能</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-700">技术专家</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600">人工智能</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-700">科技企业</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600">人工智能</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-base font-bold text-gray-900">竞合机构监测</div>
                <button className="text-sm text-blue-600">监测中心</button>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
                  <div className="absolute bottom-2 left-2 w-10 h-6 bg-white/80 rounded-md"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-blue-200 rounded"></div>
                </div>
                <div className="flex-1">
                  <div className="text-blue-700 font-semibold hover:text-blue-900 cursor-pointer">{orgItem.name}</div>
                  <div className="mt-1 text-xs text-gray-600">级别：{orgItem.level}</div>
                  <div className="mt-1 text-xs text-gray-600">{orgItem.desc}</div>
                </div>
                <div className="text-xs text-gray-500">{orgItem.date}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-base font-bold text-gray-900">专家监测</div>
                <button className="text-sm text-blue-600">监测中心</button>
              </div>
              <div className="space-y-4">
                {experts.map((e, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold ${e.color}`}>{e.name}</div>
                      <div>
                        <div className="text-sm text-gray-900">{e.title} · {e.org}</div>
                        <div className="text-xs text-gray-600">{e.paper}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{e.updated}</div>
                      <div className="text-xs text-blue-600">{e.count} 监测动态</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StrategySubscribePage;
