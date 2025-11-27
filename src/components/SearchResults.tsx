import React, { useMemo, useState } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { 
  mockPatents, 
  mockPolicies, 
  mockExperts, 
  mockProjects, 
  mockEnterprises,
  mockAchievements,
  mockDemands,
  mockResources
} from '../data/mockData';
import { 
  Building2, 
  Users, 
  FileText, 
  Award, 
  Search, 
  Lightbulb, 
  Target, 
  Database 
} from 'lucide-react';

const SearchResults: React.FC = () => {
  const { activeCategory, filters } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');

  const getCategoryData = () => {
    switch (activeCategory) {
      case 'enterprise':
        return { data: mockEnterprises, title: '企业', icon: <Building2 className="w-5 h-5" /> };
      case 'expert':
        return { data: mockExperts, title: '专家', icon: <Users className="w-5 h-5" /> };
      case 'policy':
        return { data: mockPolicies, title: '政策', icon: <FileText className="w-5 h-5" /> };
      case 'achievement':
        return { data: mockAchievements, title: '成果', icon: <Lightbulb className="w-5 h-5" /> };
      case 'project':
        return { data: mockProjects, title: '项目', icon: <Award className="w-5 h-5" /> };
      case 'demand':
        return { data: mockDemands, title: '需求', icon: <Target className="w-5 h-5" /> };
      case 'patent':
        return { data: mockPatents, title: '专利', icon: <FileText className="w-5 h-5" /> };
      case 'resource':
        return { data: mockResources, title: '资源', icon: <Database className="w-5 h-5" /> };
      default:
        return { data: mockEnterprises, title: '企业', icon: <Building2 className="w-5 h-5" /> };
    }
  };

  const { data, title, icon } = getCategoryData();

  const filteredData = useMemo(() => {
    if (!filters || Array.isArray(filters)) return data;

    const checkRangeFilter = (itemValue: number, filterValues: string[]) => {
      if (!filterValues || filterValues.length === 0) return true;
      return filterValues.some(filterValue => {
        if (filterValue.endsWith('+')) {
          const min = parseInt(filterValue.slice(0, -1));
          return itemValue >= min;
        } else if (filterValue.includes('-')) {
          const [minStr, maxStr] = filterValue.split('-');
          const min = parseInt(minStr);
          const max = parseInt(maxStr);
          return itemValue >= min && itemValue <= max;
        } else {
          return String(itemValue) === filterValue;
        }
      });
    };

    return data.filter((item: any) => {
      if (activeCategory === 'policy') {
        const yearOk = !filters.year || filters.year.length === 0 || filters.year.some((y: string) => (item.issueDate || '').startsWith(y));
        const levelOk = !filters.level || filters.level.length === 0 || filters.level.includes(item.level);
        const agencyOk = !filters.agency || filters.agency.length === 0 || filters.agency.includes(item.issuingAgency);
        const scopeOk = !filters.scope || filters.scope.length === 0 || filters.scope.includes(item.scope);
        const statusOk = !filters.status || filters.status.length === 0 || filters.status.includes(item.status);
        const keywordsOk = !filters.keywords || filters.keywords.length === 0 || filters.keywords.some((k: string) => item.summary?.includes(k) || item.title?.includes(k));
        const categoryOk = !filters.category || filters.category.length === 0 || filters.category.includes(item.category);
        return yearOk && levelOk && agencyOk && scopeOk && statusOk && keywordsOk && categoryOk;
      }
      if (activeCategory === 'expert') {
        const fieldOk = !filters.field || filters.field.length === 0 || filters.field.includes(item.field);
        const titleOk = !filters.title || filters.title.length === 0 || filters.title.includes(item.title);
        const institutionOk = !filters.institution || filters.institution.length === 0 || filters.institution.includes(item.institution);
        const regionOk = !filters.region || filters.region.length === 0 || filters.region.includes(item.region);
        const expertiseOk = !filters.expertise || filters.expertise.length === 0 || filters.expertise.some((e: string) => item.expertise?.includes(e));
        const publicationsOk = checkRangeFilter(item.publications, filters.publications);
        const patentsOk = checkRangeFilter(item.patents, filters.patents);
        const projectsOk = checkRangeFilter(item.projects, filters.projects);
        const hIndexOk = checkRangeFilter(item.hIndex, filters.hIndex);
        return fieldOk && titleOk && institutionOk && regionOk && expertiseOk && publicationsOk && patentsOk && projectsOk && hIndexOk;
      }
      if (activeCategory === 'paper') {
        const yearOk = !filters.year || filters.year.length === 0 || filters.year.includes(String(item.year));
        const journalOk = !filters.journal || filters.journal.length === 0 || filters.journal.includes(item.journal);
        const disciplineOk = !filters.discipline || filters.discipline.length === 0 || filters.discipline.includes(item.discipline);
        const authorOk = !filters.authors || filters.authors.length === 0 || filters.authors.some((a: string) => item.authors?.includes(a));
        const institutionOk = !filters.institution || filters.institution.length === 0 || filters.institution.includes(item.institution);
        const keywordsOk = !filters.keywords || filters.keywords.length === 0 || filters.keywords.some((k: string) => item.keywords?.includes(k));
        const citationsOk = checkRangeFilter(item.citations, filters.citations);
        return yearOk && journalOk && disciplineOk && authorOk && institutionOk && keywordsOk && citationsOk;
      }
      if (activeCategory === 'patent') {
        const yearOk = !filters.year || filters.year.length === 0 || filters.year.some((y: string) => (item.publicationDate || item.date || '').startsWith(y));
        const typeOk = !filters.type || filters.type.length === 0 || filters.type.includes(item.type); // Assuming 'type' exists in mockPatents
        const countryOk = !filters.country || filters.country.length === 0 || filters.country.includes(item.country); // Assuming 'country' exists
        const ipcOk = !filters.ipc || filters.ipc.length === 0 || filters.ipc.includes(item.ipc); // Assuming 'ipc' exists
        const fieldOk = !filters.field || filters.field.length === 0 || filters.field.includes(item.field); // Assuming 'field' exists
        const applicantOk = !filters.applicant || filters.applicant.length === 0 || filters.applicant.includes(item.applicant);
        const inventorOk = !filters.inventor || filters.inventor.length === 0 || filters.inventor.some((i: string) => item.inventors?.includes(i));
        const regionOk = !filters.region || filters.region.length === 0 || filters.region.includes(item.region); // Assuming 'region' exists
        const keywordsOk = !filters.keywords || filters.keywords.length === 0 || filters.keywords.some((k: string) => item.tags?.includes(k) || (item.abstract || '').includes(k));
        return yearOk && typeOk && countryOk && ipcOk && fieldOk && applicantOk && inventorOk && regionOk && keywordsOk;
      }
      if (activeCategory === 'project') {
        const yearOk = !filters.year || filters.year.length === 0 || filters.year.some((y: string) => (item.startDate || '').startsWith(y));
        const agencyOk = !filters.agency || filters.agency.length === 0 || filters.agency.includes(item.fundingAgency);
        const typeOk = !filters.type || filters.type.length === 0 || filters.type.includes(item.type); // Assuming 'type' exists
        const statusOk = !filters.status || filters.status.length === 0 || filters.status.includes(item.status);
        const leaderOk = !filters.leader || filters.leader.length === 0 || filters.leader.includes(item.leader);
        return yearOk && agencyOk && typeOk && statusOk && leaderOk;
      }
      if (activeCategory === 'institution') {
        const typeOk = !filters.type || filters.type.length === 0 || filters.type.includes(item.type);
        const regionOk = !filters.region || filters.region.length === 0 || filters.region.includes(item.location);
        const fieldOk = !filters.field || filters.field.length === 0 || filters.field.includes(item.field);
        const establishedYearOk = checkRangeFilter(item.establishedYear, filters.establishedYear);
        const researchersOk = checkRangeFilter(item.researchers, filters.researchers);
        return typeOk && regionOk && fieldOk && establishedYearOk && researchersOk;
      }
      return true;
    });
  }, [data, filters, activeCategory]);

  const renderEnterpriseCard = (enterprise: any) => (
    <div key={enterprise.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
          {enterprise.name}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {enterprise.status}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>行业:</strong> {enterprise.industry}</span>
          <span><strong>地区:</strong> {enterprise.location}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><strong>成立年份:</strong> {enterprise.establishedYear}</span>
          <span><strong>注册资本:</strong> {enterprise.registeredCapital}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {enterprise.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>简介:</strong> {enterprise.description}
      </p>
    </div>
  );

  const renderExpertCard = (expert: any) => (
    <div key={expert.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            {expert.name}
          </h3>
          {expert.tags && expert.tags.map((tag: string, index: number) => (
            <span key={index} className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div><strong>研究方向:</strong> {expert.field}</div>
        <div><strong>所在单位:</strong> {expert.institution}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold text-gray-900">{expert.patents}</div>
          <div className="text-gray-600">专利</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold text-gray-900">{expert.publications}</div>
          <div className="text-gray-600">论文</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold text-gray-900">{expert.projects}</div>
          <div className="text-gray-600">项目</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold text-gray-900">{expert.partners}</div>
          <div className="text-gray-600">合作单位</div>
        </div>
      </div>
    </div>
  );

  const renderPolicyCard = (policy: any) => (
    <div key={policy.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-800 cursor-pointer">
        {policy.title}
      </h3>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>文号:</strong> {policy.number}</span>
          <span><strong>发布机构:</strong> {policy.issuingAgency}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><strong>发布日期:</strong> {policy.issueDate}</span>
          <span><strong>生效日期:</strong> {policy.effectiveDate}</span>
        </div>
        <div><strong>政策类别:</strong> {policy.category}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {policy.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>摘要:</strong> {policy.summary}
      </p>
    </div>
  );

  const renderAchievementCard = (achievement: any) => (
    <div key={achievement.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
          {achievement.title}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {achievement.maturity}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>拥有方:</strong> {achievement.owner}</span>
          <span><strong>类型:</strong> {achievement.type}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><strong>转化方式:</strong> {achievement.transferMode}</span>
          <span><strong>价格:</strong> {achievement.price}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {achievement.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>简介:</strong> {achievement.description}
      </p>
    </div>
  );

  const renderProjectCard = (project: any) => (
    <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
          {project.title}
        </h3>
        <span className={`text-sm px-2 py-1 rounded ${
          project.status === '进行中' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>项目编号:</strong> {project.projectNumber}</span>
          <span><strong>资助机构:</strong> {project.fundingAgency}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><strong>开始日期:</strong> {project.startDate}</span>
          <span><strong>结束日期:</strong> {project.endDate}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><strong>负责人:</strong> {project.leader}</span>
          <span><strong>承担单位:</strong> {project.institution}</span>
        </div>
        <div><strong>经费:</strong> {project.budget}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.keywords.map((keyword: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {keyword}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>项目简介:</strong> {project.summary}
      </p>
    </div>
  );

  const renderDemandCard = (demand: any) => (
    <div key={demand.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
          {demand.title}
        </h3>
        <span className="text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
          预算: {demand.budget}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>需求方:</strong> {demand.requester}</span>
          <span><strong>行业:</strong> {demand.industry}</span>
        </div>
        <div><strong>截止日期:</strong> {demand.deadline}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {demand.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>需求描述:</strong> {demand.description}
      </p>
    </div>
  );

  const renderPatentCard = (patent: any) => (
    <div key={patent.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-blue-600 mb-3 hover:text-blue-800 cursor-pointer">
        {patent.title}
      </h3>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>申请号:</strong> {patent.applicationNumber}</span>
          <span><strong>申请日:</strong> {patent.applicationDate}</span>
        </div>
        <div><strong>公开日:</strong> {patent.publicationDate}</div>
        <div><strong>申请人:</strong> {patent.applicant}</div>
        <div><strong>发明人:</strong> {patent.inventors.join(', ')}</div>
        <div><strong>代理机构:</strong> {patent.agency}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {patent.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-3">
        <strong>摘要:</strong> {patent.abstract}
      </p>
      
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>专利号: {patent.patentNumber}</span>
        <span>{patent.date}</span>
      </div>
    </div>
  );

  const renderResourceCard = (resource: any) => (
    <div key={resource.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
          {resource.name}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {resource.type}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 mb-3 space-y-1">
        <div className="flex items-center space-x-4">
          <span><strong>提供方:</strong> {resource.provider}</span>
          <span><strong>地区:</strong> {resource.location}</span>
        </div>
        <div><strong>能力/资质:</strong> {resource.capacity}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {resource.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <strong>描述:</strong> {resource.description}
      </p>
    </div>
  );

  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {icon}
            <h2 className="text-lg font-semibold text-gray-900">
              {title}搜索结果 ({data.length})
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">排序:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="relevance">相关度</option>
                <option value="date">时间</option>
                <option value="popularity">热度</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Search className="w-4 h-4" />
            <span>为您找到 {filteredData.length} 条相关结果</span>
          </div>
          
          <div className="space-y-4">
            {(filteredData || []).map((item: any) => {
              switch (activeCategory) {
                case 'enterprise':
                  return renderEnterpriseCard(item);
                case 'expert':
                  return renderExpertCard(item);
                case 'policy':
                  return renderPolicyCard(item);
                case 'achievement':
                  return renderAchievementCard(item);
                case 'project':
                  return renderProjectCard(item);
                case 'demand':
                  return renderDemandCard(item);
                case 'patent':
                  return renderPatentCard(item);
                case 'resource':
                  return renderResourceCard(item);
                default:
                  return renderEnterpriseCard(item);
              }
            })}
          </div>
          
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              上一页
            </button>
            
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
