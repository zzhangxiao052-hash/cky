import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tags = ['人工智能', '量子芯片', '显示器件', '工业视觉', '微机电系统', '嵌入式系统', '功率半导体', '柔性电子', '集成电路', '新型存储'];

const ranking = [
  { name: '王卫国', title: '某高校 · 智能制造研究院', score: '90+' },
  { name: '李建国', title: '某研究所 · 先进材料中心', score: '89+' },
  { name: '刘明辉', title: '某高校 · 电子工程学院', score: '88+' },
  { name: '张伟', title: '某企业 · 算法研究部', score: '86+' },
  { name: '卢洋', title: '某高校 · 测控技术系', score: '85+' },
  { name: '冯杰', title: '某研究所 · 机器人中心', score: '84+' },
  { name: '许涛', title: '某高校 · 计算机学院', score: '83+' },
  { name: '方圆', title: '某企业 · 嵌入式研发', score: '82+' },
  { name: '马宁', title: '某高校 · 集成电路学院', score: '81+' },
  { name: '赵亮', title: '某研究所 · 光电研究室', score: '80+' }
];

const categories = [
  { label: '高端装备人才', count: '589+' },
  { label: '人工智能人才', count: '527+' },
  { label: '新材料人才', count: '478+' },
  { label: '量子技术人才', count: '356+' },
  { label: '集成电路人才', count: '329+' },
  { label: '生物制造人才', count: '276+' },
  { label: '新能源人才', count: '243+' },
  { label: '显示器件人才', count: '228+' },
  { label: '微机电系统人才', count: '207+' },
  { label: '柔性电子人才', count: '189+' }
];

const ExpertPanoramaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        {/* 顶部区块：标题、搜索、标签 */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
          <div className="px-6 py-10 md:px-12 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">专家人才全景</h1>
              <div className="flex items-center gap-2 mb-4">
                <select
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700"
                  onChange={(e) => {
                    if (e.target.value === '专家人才') {
                      window.location.href = '/expert';
                    } else {
                      window.location.href = '/expert/panorama';
                    }
                  }}
                  value="专家全景"
                >
                  <option value="专家人才">专家人才</option>
                  <option value="专家全景">专家全景</option>
                </select>
                <input className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700" placeholder="精准输入人物姓名、机构与方向" />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm">检索</button>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                {tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white border border-gray-200">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="w-full h-52 md:h-64 rounded-2xl bg-gradient-to-tr from-indigo-100 to-blue-100" />
            </div>
          </div>
        </div>

        {/* 人才地图 + 榜单 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-blue-600 rounded" />
              <div className="text-base font-bold text-gray-900">人才地图</div>
              <span className="ml-auto text-sm text-blue-600">生成图谱</span>
            </div>
            {/* 中心节点 + 放射节点模拟 */}
            <div className="relative h-[340px] bg-gray-50 rounded-xl">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white border border-blue-300 shadow-sm flex items-center justify-center text-blue-600 font-semibold">核心研究</div>
              {['教育人才','微机电系统','嵌入式系统','工业视觉','新型存储','功率半导体','显示器件'].map((n, i) => (
                <div key={i} className="absolute w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 text-xs"
                  style={{
                    left: `${50 + 35*Math.cos((i/7)*2*Math.PI)}%`,
                    top: `${50 + 35*Math.sin((i/7)*2*Math.PI)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >{n}</div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-blue-600 rounded" />
              <div className="text-base font-bold text-gray-900">相关领域 · 领域专家</div>
            </div>
            <div className="divide-y divide-gray-100">
              {ranking.map((r, idx) => (
                <div key={idx} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-blue-600 text-white text-xs flex items-center justify-center">{idx+1}</span>
                    <div>
                      <div className="text-sm text-gray-900">{r.name}</div>
                      <div className="text-xs text-gray-600">{r.title}</div>
                    </div>
                  </div>
                  <div className="text-xs text-blue-600">{r.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 分布图 + 类型分布 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-blue-600 rounded" />
              <div className="text-base font-bold text-gray-900">人才分布</div>
            </div>
            <div className="h-[360px] rounded-xl bg-gray-50 border border-gray-100" />
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-blue-600 rounded" />
              <div className="text-base font-bold text-gray-900">专家类型图分布</div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100" />
              </div>
              <div className="col-span-7">
                <div className="space-y-2">
                  {categories.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded ${['bg-blue-400','bg-green-400','bg-yellow-400','bg-purple-400','bg-sky-400','bg-rose-400','bg-teal-400','bg-orange-400','bg-cyan-400','bg-lime-400'][i%10]}`}></span>
                        <span className="text-gray-700">{c.label}</span>
                      </span>
                      <span className="text-blue-600 text-xs">{c.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExpertPanoramaPage;
