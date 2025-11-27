import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const stats = [
  { value: 35, label: '概念验证中心' },
  { value: 13, label: '中试平台' },
  { value: 17, label: '技术转移机构' },
  { value: 17, label: '孵化器' },
  { value: 30, label: '产业创新综合体' }
];

const categories = [
  { key: '概念验证中心' },
  { key: '中试平台' },
  { key: '技术转移机构' },
  { key: '孵化器' },
  { key: '产业创新综合体' }
];

const Card: React.FC = () => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <div className="absolute bottom-2 left-2 w-10 h-6 bg-white/80 rounded-md"></div>
      <div className="absolute bottom-3 right-3 w-6 h-6 bg-blue-200 rounded"></div>
    </div>
    <div className="flex-1">
      <div className="text-blue-700 font-semibold hover:text-blue-900 cursor-pointer">重庆环投互联网产业孵化园</div>
      <div className="mt-1 text-xs text-gray-600">级别：国家级</div>
      <div className="mt-1 text-xs text-gray-600">成立时间：2015-06-12</div>
      <div className="mt-1 text-xs text-gray-600">地址：重庆市南岸区南滨路242号7栋</div>
    </div>
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">AI</div>
  </div>
);

const Section: React.FC<{ title: string }> = ({ title }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div className="lg:col-span-2 flex items-center lg:items-start">
      <div className="text-gray-900 font-bold text-base lg:text-lg">{title}</div>
    </div>
    <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

const ResourcePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
          <div className="px-6 py-12 md:px-12 md:py-16">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">科创资源</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-700">{s.value}</div>
                  <div className="mt-2 text-gray-700 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {categories.map((c) => (
            <Section key={c.key} title={c.key} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcePage;
