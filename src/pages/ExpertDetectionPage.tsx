import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Award, Briefcase, Share2, User } from 'lucide-react';

const ExpertDetectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pb-12 relative">
        {/* Background Header */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-indigo-900 to-blue-800 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12">
          {/* Top Profile Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image & Basic Info */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                      alt="王浩" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
                      关注
                    </button>
                    <button className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      工作报告
                    </button>
                  </div>
                  <div className="flex gap-4 mt-4 text-xs text-gray-500">
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg">0</div>
                      <div>关注</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg">4</div>
                      <div>报告</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg">1061</div>
                      <div>论文</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg">283</div>
                      <div>专利</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-lg">17</div>
                      <div>项目</div>
                    </div>
                  </div>
                </div>

                {/* Info & Word Cloud */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        王浩 <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">院士</span>
                      </h1>
                      <p className="text-gray-600 mt-1">流域水循环模拟与调控国家重点实验室主任</p>
                      <p className="text-gray-500 text-sm mt-1">中国工程院院士，水文水资源专家，教授级高工，博导</p>
                    </div>
                    <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-50">
                      + 关注
                    </button>
                  </div>

                  {/* Word Cloud Simulation */}
                  <div className="relative h-40 bg-gray-50 rounded-lg p-4 overflow-hidden">
                    <span className="absolute top-4 left-10 text-xl font-bold text-blue-600">生态环境</span>
                    <span className="absolute top-12 left-1/3 text-2xl font-bold text-green-600">水资源</span>
                    <span className="absolute bottom-4 right-20 text-lg font-bold text-indigo-600">系统装置</span>
                    <span className="absolute top-8 right-10 text-sm text-gray-500">流域规划</span>
                    <span className="absolute bottom-10 left-20 text-base text-purple-600">风景园林</span>
                    <span className="absolute top-1/2 left-1/2 text-xs text-gray-400">二元水循环</span>
                    <span className="absolute bottom-2 left-1/2 text-sm text-yellow-600">分布式水文模型</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Intro */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" /> 个人简介
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                王浩，男，1953年8月出生于北京，1989年毕业于清华大学，中国工程院院士，水文水资源专家，教授级高工，博士生导师。现任流域水循环模拟与调控国家重点实验室主任，中国水利水电科学研究院水资源所名誉所长。2016年12月被水利部聘为水利部参事咨询委员会委员。王浩长期从事水文水资源研究，建立了“自然-人工”二元水循环理论，系统建立了水资源监测与模拟评价、水资源规划与管理方面的基础理论和技术方法体系，为我国水资源规划与管理实践做出了突出贡献。
              </p>
            </section>

            {/* Research Fields */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" /> 研究领域
              </h3>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">水利工程</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">水资源利用</span>
              </div>
            </section>

            {/* Work Experience */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> 教育经历
              </h3>
              <div className="space-y-6 relative pl-4 border-l-2 border-gray-100">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-medium text-gray-900">茶园湾吉首大学师范学院附小</h4>
                  <p className="text-xs text-gray-500">1963/07 - 1965/08</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-medium text-gray-900">清华大学公共管理学院</h4>
                  <p className="text-xs text-gray-500">1985/09 - 1989/07</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-300 rounded-full border-2 border-white shadow"></div>
                  <h4 className="font-medium text-gray-900">清华大学水利工程系</h4>
                  <p className="text-xs text-gray-500">1978/02 - 1982/01</p>
                </div>
                <button className="text-blue-600 text-sm hover:underline pl-2">查看更多 &gt;</button>
              </div>
            </section>

            {/* Papers List */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" /> 专利列表
                </h3>
                <div className="flex gap-2 text-sm">
                  <span className="text-blue-600 font-medium cursor-pointer">共 283 项</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 cursor-pointer">1/29</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: '一种批量灌平水槽的引流装置 [发明专利]', authors: '发明人：陈华进; 刘国华; 王浩; 汪亦凡; 上官军; 刘芳芳', id: 'CN201520367153.5' },
                  { title: '一种适用于地下水回用的古井 [实用新型]', authors: '发明人：陈华进; 刘国华; 王浩; 汪亦凡; 上官军; 刘芳芳', id: 'CN201520367153.5' },
                  { title: '一种水肥灌溉的计量控制装置 [实用新型]', authors: '发明人：陈华进; 刘国华; 王浩; 汪亦凡; 上官军; 刘芳芳', id: 'CN201520367153.5' },
                  { title: '一种水旱田灌溉多功能节水控制装置 [实用新型]', authors: '发明人：陈华进; 刘国华; 王浩; 汪亦凡; 上官军; 刘芳芳', id: 'CN201520367153.5' },
                ].map((paper, i) => (
                  <div key={i} className="border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                    <h4 className="text-blue-600 font-medium hover:underline cursor-pointer mb-1">{paper.title}</h4>
                    <p className="text-xs text-gray-500 mb-1">{paper.authors}</p>
                    <p className="text-xs text-gray-400">专利号：{paper.id}</p>
                  </div>
                ))}
              </div>
            </section>
            
             {/* Projects List */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" /> 项目列表
                </h3>
                <div className="flex gap-2 text-sm">
                  <span className="text-blue-600 font-medium cursor-pointer">共 17 项</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 cursor-pointer">1/5</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: '中国制造业企业全球供应链风险技术研究', date: '2019/01/01-2023/12/31' },
                  { title: '大河流域水资源与环境综合规划技术及工程化应用', date: '2019/01/01-2023/12/31' },
                  { title: '城市化流域生态水文过程演变机制与综合调控技术研究', date: '2019/01/01-2023/12/31' },
                  { title: '南水北调受水区地下水压采及生态修复模式与效益评价研究', date: '2019/01/01-2023/12/31' },
                ].map((project, i) => (
                  <div key={i} className="border-b border-gray-50 last:border-0 pb-4 last:pb-0 flex justify-between items-center">
                    <h4 className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer">{project.title}</h4>
                    <p className="text-xs text-gray-400">起止时间：{project.date}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Relationship Graph */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" /> 关系图谱
              </h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                 {/* Simple CSS Network Graph Simulation */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">王浩</div>
                    
                    {/* Nodes */}
                    <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs z-10">陈华</div>
                    <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs z-10">刘芳</div>
                    <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-400 rounded-full z-10"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-blue-400 rounded-full z-10"></div>

                    {/* Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="33%" y2="66%" stroke="#cbd5e1" strokeWidth="1" />
                    </svg>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                 {[1, 2, 3, 4, 5, 6].map(i => (
                   <div key={i} className="flex items-center gap-3 p-2 border rounded hover:bg-gray-50">
                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">{i}</div>
                     <div>
                       <div className="text-sm font-medium">合作者{i}</div>
                       <div className="text-xs text-gray-400">中国水利水电科学研究院</div>
                     </div>
                   </div>
                 ))}
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Charts */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">论文发表趋势</h3>
              <div className="h-48 flex items-end justify-between gap-1 px-2 pb-4 border-b border-gray-100">
                {[20, 35, 45, 30, 55, 40, 60, 75, 50, 65].map((h, i) => (
                  <div key={i} className="w-full bg-blue-100 rounded-t hover:bg-blue-200 transition-colors relative group">
                    <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-blue-500 rounded-t"></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                      {2014 + i}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>2014</span>
                <span>2023</span>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">核心论文占比</h3>
              <div className="flex items-center justify-center h-48">
                 <div className="relative w-32 h-32 rounded-full border-8 border-blue-100">
                   <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-l-transparent border-b-transparent rotate-45"></div>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                     <span className="text-2xl font-bold text-gray-900">32%</span>
                     <span className="text-xs text-gray-500">核心</span>
                   </div>
                 </div>
              </div>
              <div className="flex justify-center gap-4 text-xs mt-4">
                 <div className="flex items-center gap-1">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span>核心期刊</span>
                 </div>
                 <div className="flex items-center gap-1">
                   <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
                   <span>其他</span>
                 </div>
              </div>
            </section>

             <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">今日专利</h3>
              <div className="h-48 flex items-end justify-between gap-1 px-2 pb-4 border-b border-gray-100">
                 {/* Mock Line Chart */}
                 <svg className="w-full h-full overflow-visible">
                   <path d="M0,150 Q30,100 60,120 T120,80 T180,100 T240,40" fill="none" stroke="#3b82f6" strokeWidth="2" />
                   <path d="M0,150 Q30,100 60,120 T120,80 T180,100 T240,40 L240,180 L0,180 Z" fill="url(#gradient)" opacity="0.1" />
                   <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" stopColor="#3b82f6" />
                       <stop offset="100%" stopColor="white" />
                     </linearGradient>
                   </defs>
                 </svg>
              </div>
            </section>

             <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">今日项目</h3>
              <div className="h-48 flex items-end justify-around gap-2">
                 {[40, 60, 30, 80, 50].map((h, i) => (
                   <div key={i} className="w-8 bg-indigo-100 rounded-t relative group">
                     <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-indigo-500 rounded-t"></div>
                   </div>
                 ))}
              </div>
            </section>

          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpertDetectionPage;
