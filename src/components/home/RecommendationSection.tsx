import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Award, Zap, ChevronRight } from 'lucide-react';

const RecommendationSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Left Card: 科创智推 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">科创智推</h2>
            <span className="text-xs text-gray-400 ml-2">精准匹配，为您不仅是企业提供专业科创服务</span>
          </div>
          <button className="text-gray-400 hover:text-blue-600 text-sm flex items-center">
            订阅 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-6 mb-4 border-b border-gray-100 pb-2">
          {['政策', '专家', '成果', '资源'].map((tab, i) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === '政策') navigate('/policy');
                if (tab === '专家') navigate('/expert');
                if (tab === '成果') navigate('/achievement');
                if (tab === '资源') navigate('/resource');
              }}
              className={`text-sm font-medium pb-2 relative ${i === 0 ? 'text-blue-600' : 'text-gray-500'}`}
            >
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { title: '固态电池电解质复合材料规模化制备技术研发...', tag: '竞业', color: 'purple' },
            { title: '突破 8 英寸及以上 SiC 功率器件外延生长的关键...', tag: '合作', color: 'blue' },
            { title: 'mRNA 疫苗高效递送系统及产业技术，解决现有...', tag: '合作', color: 'blue' },
            { title: '工业电机研发制造与智能化监测技术，实现设备...', tag: '竞业', color: 'purple' },
            { title: '开发具备高生物相容性的新型植入技术，攻克...', tag: '合作', color: 'blue' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start justify-between group cursor-pointer">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-gray-400 mt-1" />
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {item.title}
                </span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded border ${
                item.color === 'purple' 
                  ? 'text-purple-600 bg-purple-50 border-purple-100' 
                  : 'text-blue-600 bg-blue-50 border-blue-100'
              }`}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card: 科创智策 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">科创智策</h2>
            <span className="text-xs text-gray-400 ml-2">精准支撑社会效益，赋能决策与管理提效</span>
          </div>
          <button onClick={() => navigate('/strategy/subscribe')} className="text-gray-400 hover:text-blue-600 text-sm flex items-center">
            订阅 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-6 mb-4 border-b border-gray-100 pb-2">
          {['技术检测', '竞合机构检测', '专家检测'].map((tab, i) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === '竞合机构检测') navigate('/competitor-detection');
                if (tab === '专家检测') navigate('/expert-detection');
              }}
              className={`text-sm font-medium pb-2 relative ${i === 1 ? 'text-blue-600' : 'text-gray-500'}`}
            >
              {tab}
              {i === 1 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { title: '《8英寸 SiC 功率芯片全流程工艺优化及长期可靠性提升技术报告》' },
            { title: '《工业电机关键部件肌理裂纹建模与传感器融合监测系统开发报告》' },
            { title: '《mRNA 疫苗可电离 LNP 递送系统靶向性优化及规模化生产工艺研究报告》' },
            { title: '《固态电池电解质材料微纳结构调控及规模量产技术验证报告》' },
            { title: '《仿生视觉感知与神经工网络芯片的读写一体化技术及应用报告》' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start justify-between group cursor-pointer">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-gray-400 mt-1" />
                <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {item.title}
                </span>
              </div>
              {idx === 0 && <span className="w-2 h-2 bg-yellow-400 rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
