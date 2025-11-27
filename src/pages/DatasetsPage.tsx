import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Database, Box, Share2, Layers, Calendar, ArrowRight } from 'lucide-react';

const categories = [
  { title: '成果转化', icon: Box, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: '成果转化', icon: Layers, color: 'text-indigo-600', bg: 'bg-indigo-50' }, // Kept same title as per screenshot, changed icon
  { title: '赋能产业', icon: Share2, color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

const datasets = [
  {
    id: 1,
    title: '重庆成果转化政策结构化数据集',
    desc: '政策基础信息（发布单位、文号、生效/失效日期、地域范围）；政策核心条款（扶持方向：研发补助/中试补贴/税收减免；适用对象：高校/企业/园区；申报条件与流程）；政策关联解读（官方解读文件、地方实施细则、典型应用案例）',
    date: '2025/8/1',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: 2,
    title: '跨领域技术成果转化案例数据集',
    desc: '案例基础信息（技术领域：生物医药/新能源/智能制造；转化主体：高校-企业合作/独立创业；转化周期）；转化关键环节（技术成熟度：实验室样品/中试产品/量产商品；资金投入：研发/生产/市场推广金额；合作模式：技术转让/许可/作价入股）；转化成效数据（经济效益：年营收/利润率；社会效益：就业带动/能耗降低；专利/标准产出）',
    date: '2025/8/1',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: 3,
    title: '技术经纪人职业服务能力数据集',
    desc: '经纪人基础信息（资质认证：国家/地方经纪人证书等级；专业领域：电子信息/材料科学；从业年限）服务实例记录（服务对象类型、转化技术名称、促成合作模式、服务收益标准）能力评价数据（客户满意度评分、转化项目成功率、跨领域服务匹配性）',
    date: '2025/8/1',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=300&h=200'
  }
];

const DatasetsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">科创开放数据集</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              引用网络分析、专家发现、命名排歧等开源开放大数据资料
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
             {/* Abstract 3D Cube Illustration */}
             <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
                <div className="relative w-full h-full transform rotate-x-12 rotate-y-12 rotate-z-6 transition-transform hover:rotate-0 duration-700">
                    <div className="absolute inset-0 border-4 border-blue-400/30 rounded-3xl transform translate-z-12"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl opacity-90 flex items-center justify-center">
                        <Database className="w-24 h-24 text-white/80" />
                    </div>
                    <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                        <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">AI</div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Intro & Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">开放&共享</h2>
          <p className="text-gray-500 mb-8">探索开放数据集，不仅让您接触到高质量的开放数据，更是一个全新的数据共享平台，让信息的流动更加自由，让每一份数据都能释放无限可能！</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className={`p-3 rounded-full ${cat.bg}`}>
                  <cat.icon className={`w-8 h-8 ${cat.color}`} />
                </div>
                <span className="text-lg font-bold text-gray-800">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dataset List */}
        <div className="space-y-6">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
              {/* Image */}
              <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img 
                  src={dataset.image} 
                  alt={dataset.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dataset.title}
                    </h3>
                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-blue-500/30">
                      立即申请
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {dataset.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-end text-xs text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  发布日期：{dataset.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DatasetsPage;
