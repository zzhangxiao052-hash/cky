import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

// 8个搜索类型：企业、专家、政策、成果、项目、需求、专利、资源
// 只有前3个选项有地图绑定，后5个选项点击后不切换地图
const resourceTypes = [
  { id: 'enterprise', label: '企业', count: '42319', mapImage: '/enterprise_map.png', chartImage: '/enterprise_chart.png' },
  { id: 'expert', label: '专家', count: '401899', mapImage: '/map_new.png', chartImage: '/chart_new.png' },
  { id: 'policy', label: '政策', count: '489', mapImage: '/policy_map.png', chartImage: '/resource_chart_chongqing.png' },
  { id: 'achievement', label: '成果', count: '27560' }, // 无地图绑定
  { id: 'project', label: '项目', count: '43956' }, // 无地图绑定
  { id: 'demand', label: '需求', count: '8501' }, // 无地图绑定
  { id: 'patent', label: '专利', count: '909967' }, // 无地图绑定
  { id: 'resource', label: '资源', count: '1620' } // 无地图绑定
];

const ResourceMap: React.FC = () => {
  const { activeCategory, setActiveCategory } = useSearch();
  const [isExpanded, setIsExpanded] = useState(true);
  const [displayType, setDisplayType] = useState('enterprise'); // 默认显示企业地图

  // 处理选项点击
  const handleTypeClick = (typeId: string) => {
    setActiveCategory(typeId);
    // 只有前3个选项（企业、专家、政策）才切换地图
    const typeWithMap = resourceTypes.find(t => t.id === typeId);
    if (typeWithMap && typeWithMap.mapImage) {
      setDisplayType(typeId);
    }
    // 如果点击的是后5个选项，保持当前地图不变
  };

  // 获取当前显示的地图配置
  const currentType = resourceTypes.find(type => type.id === displayType) || resourceTypes[1];

  return (
    <div className="w-full mx-auto mb-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Resource Type Buttons - 始终显示在地图标题之上 */}
        <div className="p-6">
          <div className="flex justify-between gap-2 mb-4">
            {resourceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeClick(type.id)}
                className={`
                  flex-1 border rounded-lg px-2 py-3 transition-all duration-200
                  ${activeCategory === type.id 
                    ? 'bg-blue-500 border-blue-600 text-white shadow-md' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-sm'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className={`text-xs font-medium ${activeCategory === type.id ? 'text-white' : 'text-gray-800'}`}>
                    {type.label}
                  </span>
                  <span className={`text-xs font-mono ${activeCategory === type.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {type.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Header with toggle */}
        <div 
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors relative"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-semibold text-gray-800">重庆市资源地图</h3>
          <button className="absolute right-6 text-gray-600 hover:text-blue-600 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Collapsible content */}
        {isExpanded && (
          <div className="p-6">
            {/* Map and Chart Side-by-Side - 动态显示当前选中类型的图片 */}
            <div className="flex gap-6">
              {/* Map Section */}
              <div className="flex-1 rounded-lg overflow-hidden bg-gray-50 p-2">
                <img 
                  src={currentType.mapImage}
                  alt={`${currentType.label}地图`}
                  className="w-full h-auto object-contain"
                  style={{ display: 'block' }}
                />
              </div>
              
              {/* Chart Section */}
              <div className="flex-1 rounded-lg overflow-hidden bg-gray-50 p-2">
                <img 
                  src={currentType.chartImage}
                  alt={`${currentType.label}分布图`}
                  className="w-full h-auto object-contain"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceMap;
