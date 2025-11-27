import React from 'react';
import { BarChart3, GitMerge, CheckCircle2, Building2 } from 'lucide-react';

const reports = [
  {
    title: '产业分析报告',
    desc: '产业全景洞察，认定核心机遇',
    icon: BarChart3,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    img: '📊'
  },
  {
    title: '创新链分析报告',
    desc: '产业链全景，认定核心机遇',
    icon: GitMerge,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    img: '🔗'
  },
  {
    title: '成果评估报告',
    desc: '产业全景洞察，认定核心机遇',
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-50',
    img: '📋'
  },
  {
    title: '企业分析报告',
    desc: '产业全景洞察，认定核心机遇',
    icon: Building2,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    img: '🏢'
  }
];

const ReportSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {reports.map((report, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className={`${report.bg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
              <report.icon className={`w-6 h-6 ${report.color}`} />
            </div>
            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">{report.img}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{report.title}</h3>
          <p className="text-sm text-gray-500">{report.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportSection;
