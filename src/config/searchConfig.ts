export type CategoryId = 'enterprise' | 'expert' | 'policy' | 'achievement' | 'project' | 'demand' | 'patent' | 'resource'

export const operators = [
  { id: 'contains', label: '包含' },
  { id: 'exact', label: '精确匹配' },
  { id: 'fuzzy', label: '模糊匹配' },
  { id: 'not', label: '不包含' }
]

export const combinators = [
  { id: 'AND', label: 'AND 与' },
  { id: 'OR', label: 'OR 或' },
  { id: 'NOT', label: 'NOT 非' }
]

type Field = { id: string; label: string }
type FilterOption = { label: string; count: number }
type FilterSection = { id: string; title: string; icon: string; options: FilterOption[] }

export type SearchCategoryConfig = {
  fields: Field[]
  filters: FilterSection[]
}

export const searchConfig: Record<CategoryId, SearchCategoryConfig> = {
  enterprise: {
    fields: [
      { id: 'name', label: '企业名称' },
      { id: 'industry', label: '所属行业' },
      { id: 'location', label: '所在地区' },
      { id: 'status', label: '经营状态' },
      { id: 'tags', label: '标签' }
    ],
    filters: [
      { id: 'industry', title: '所属行业', icon: 'Briefcase', options: [
        { label: '汽车制造', count: 1250 },
        { label: '电子信息', count: 980 },
        { label: '生物医药', count: 760 }
      ]},
      { id: 'location', title: '所在地区', icon: 'MapPin', options: [
        { label: '重庆', count: 3250 },
        { label: '四川', count: 2890 },
        { label: '北京', count: 1560 }
      ]},
      { id: 'status', title: '经营状态', icon: 'Activity', options: [
        { label: '存续', count: 12580 },
        { label: '在业', count: 890 }
      ]}
    ]
  },
  expert: {
    fields: [
      { id: 'name', label: '姓名' },
      { id: 'institution', label: '机构' },
      { id: 'field', label: '研究领域' },
      { id: 'title', label: '职称' },
      { id: 'region', label: '地区' },
      { id: 'keywords', label: '关键词' },
      { id: 'establishedYear', label: '成立年份' },
      { id: 'researchers', label: '研究人员数量' },
      { id: 'publications', label: '论文数量' },
      { id: 'patents', label: '专利数量' },
      { id: 'projects', label: '项目数量' },
      { id: 'hIndex', label: 'H指数' },
      { id: 'citations', label: '引用次数' }
    ],
    filters: [
      { id: 'field', title: '研究领域', icon: 'Tag', options: [
        { label: '材料科学', count: 320 },
        { label: '工程技术', count: 210 }
      ]},
      { id: 'establishedYear', title: '成立年份', icon: 'Calendar', options: [
        { label: '2000年以后', count: 500 },
        { label: '1950-1999年', count: 300 },
        { label: '1950年以前', count: 100 }
      ]},
      { id: 'researchers', title: '研究人员数量', icon: 'Users', options: [
        { label: '1000+', count: 200 },
        { label: '500-999', count: 300 },
        { label: '100-499', count: 400 }
      ]},
      { id: 'title', title: '职称', icon: 'Award', options: [
        { label: '教授', count: 860 },
        { label: '研究员', count: 520 },
        { label: '副教授', count: 740 }
      ]},
      { id: 'institution', title: '机构', icon: 'University', options: [
        { label: '清华大学', count: 320 },
        { label: '中科院物理所', count: 210 }
      ]},
      { id: 'region', title: '地区', icon: 'MapPin', options: [
        { label: '北京', count: 420 },
        { label: '上海', count: 280 }
      ]},
      { id: 'expertise', title: '专长', icon: 'Lightbulb', options: [
        { label: '锂电池材料', count: 300 },
        { label: '固态电池', count: 250 },
        { label: '电化学', count: 200 }
      ]},
      { id: 'publications', title: '论文数量', icon: 'FileText', options: [
        { label: '100+', count: 500 },
        { label: '50-99', count: 800 },
        { label: '10-49', count: 1200 }
      ]},
      { id: 'patents', title: '专利数量', icon: 'Patent', options: [
        { label: '20+', count: 100 },
        { label: '10-19', count: 200 },
        { label: '1-9', count: 500 }
      ]},
      { id: 'projects', title: '项目数量', icon: 'Folder', options: [
        { label: '10+', count: 80 },
        { label: '5-9', count: 150 },
        { label: '1-4', count: 300 }
      ]},
      { id: 'hIndex', title: 'H指数', icon: 'Hash', options: [
        { label: '50+', count: 50 },
        { label: '20-49', count: 150 },
        { label: '1-19', count: 400 }
      ]},
      { id: 'keywords', title: '关键词', icon: 'Tag', options: [
        { label: '正极材料', count: 420 },
        { label: '固态电解质', count: 310 }
      ]},
      { id: 'authors', title: '作者', icon: 'Users', options: [
        { label: '李明华', count: 156 },
        { label: '王建国', count: 203 },
        { label: '张教授', count: 100 }
      ]},
      { id: 'citations', title: '引用次数', icon: 'Hash', options: [
        { label: '1000+', count: 50 },
        { label: '500-999', count: 100 },
        { label: '100-499', count: 300 },
        { label: '1-99', count: 1000 }
      ]}
    ]
  },
  policy: {
    fields: [
      { id: 'subject', label: '主题' },
      { id: 'title', label: '标题' },
      { id: 'docNumber', label: '文号' },
      { id: 'agency', label: '发布机构' },
      { id: 'level', label: '政策级别' },
      { id: 'keywords', label: '关键词' },
      { id: 'issueDate', label: '发布日期' },
      { id: 'effectiveDate', label: '生效日期' },
      { id: 'scope', label: '适用范围' },
      { id: 'status', label: '政策状态' },
      { id: 'category', label: '政策类别' }
    ],
    filters: [
      { id: 'year', title: '年份', icon: 'Calendar', options: [
        { label: '2025', count: 1260 },
        { label: '2024', count: 1580 },
        { label: '2023', count: 1720 },
        { label: '2022', count: 1440 }
      ]},
      { id: 'level', title: '政策级别', icon: 'Award', options: [
        { label: '国家', count: 980 },
        { label: '省级', count: 1860 },
        { label: '市级', count: 2140 },
        { label: '部门', count: 760 }
      ]},
      { id: 'agency', title: '发布机构', icon: 'Building2', options: [
        { label: '国务院', count: 260 },
        { label: '科技部', count: 310 },
        { label: '工信部', count: 290 },
        { label: '省政府', count: 980 }
      ]},
      { id: 'category', title: '政策类别', icon: 'List', options: [
        { label: '产业政策', count: 1200 },
        { label: '科技政策', count: 900 },
        { label: '人才政策', count: 600 }
      ]}
    ]
  },
  achievement: {
    fields: [
      { id: 'title', label: '成果名称' },
      { id: 'owner', label: '拥有方' },
      { id: 'type', label: '成果类型' },
      { id: 'maturity', label: '成熟度' },
      { id: 'transferMode', label: '转化方式' }
    ],
    filters: [
      { id: 'type', title: '成果类型', icon: 'Lightbulb', options: [
        { label: '新材料', count: 860 },
        { label: '电子信息', count: 720 },
        { label: '智能制造', count: 650 }
      ]},
      { id: 'maturity', title: '成熟度', icon: 'BarChart', options: [
        { label: '中试阶段', count: 420 },
        { label: '产业化阶段', count: 360 },
        { label: '实验室阶段', count: 280 }
      ]},
      { id: 'transferMode', title: '转化方式', icon: 'RefreshCw', options: [
        { label: '技术转让', count: 520 },
        { label: '合作开发', count: 480 },
        { label: '技术入股', count: 320 }
      ]}
    ]
  },
  project: {
    fields: [
      { id: 'title', label: '项目名称' },
      { id: 'leader', label: '负责人' },
      { id: 'institution', label: '承担单位' },
      { id: 'agency', label: '资助机构' },
      { id: 'projectNumber', label: '项目编号' },
      { id: 'keywords', label: '关键词' },
      { id: 'startYear', label: '立项年度' },
      { id: 'startDate', label: '开始日期' },
      { id: 'endDate', label: '结束日期' },
      { id: 'type', label: '项目类型' },
      { id: 'status', label: '状态' },
      { id: 'leader', label: '负责人' }
    ],
    filters: [
      { id: 'year', title: '立项年份', icon: 'Calendar', options: [
        { label: '2025', count: 280 },
        { label: '2024', count: 460 },
        { label: '2023', count: 520 }
      ]},
      { id: 'agency', title: '资助机构', icon: 'Building2', options: [
        { label: '科技部', count: 210 },
        { label: '工信部', count: 180 },
        { label: '自然科学基金', count: 260 }
      ]},
      { id: 'status', title: '状态', icon: 'FileText', options: [
        { label: '进行中', count: 480 },
        { label: '立项', count: 260 },
        { label: '结题', count: 220 }
      ]},
      { id: 'leader', title: '负责人', icon: 'Users', options: [
        { label: '李明华', count: 100 },
        { label: '王建国', count: 80 }
      ]}
    ]
  },
  demand: {
    fields: [
      { id: 'title', label: '需求名称' },
      { id: 'requester', label: '需求方' },
      { id: 'industry', label: '所属行业' },
      { id: 'budget', label: '预算' },
      { id: 'deadline', label: '截止日期' }
    ],
    filters: [
      { id: 'industry', title: '所属行业', icon: 'Briefcase', options: [
        { label: '新能源', count: 320 },
        { label: '智能制造', count: 280 },
        { label: '生物医药', count: 150 }
      ]},
      { id: 'budget', title: '预算范围', icon: 'DollarSign', options: [
        { label: '100万以下', count: 420 },
        { label: '100-500万', count: 360 },
        { label: '500万以上', count: 120 }
      ]}
    ]
  },
  patent: {
    fields: [
      { id: 'title', label: '标题' },
      { id: 'applicant', label: '申请人' },
      { id: 'inventor', label: '发明人' },
      { id: 'applicationNumber', label: '申请号' },
      { id: 'patentNumber', label: '专利号' },
      { id: 'abstract', label: '摘要' },
      { id: 'ipc', label: 'IPC分类' },
      { id: 'publicationDate', label: '公开（公告）日' },
      { id: 'grantStatus', label: '授权状态' }
    ],
    filters: [
      { id: 'year', title: '年份', icon: 'Calendar', options: [
        { label: '2025', count: 10850 },
        { label: '2024', count: 12460 },
        { label: '2023', count: 15680 }
      ]},
      { id: 'type', title: '专利类型', icon: 'FileText', options: [
        { label: '发明专利', count: 15680 },
        { label: '实用新型', count: 8940 },
        { label: '外观设计', count: 4320 }
      ]},
      { id: 'country', title: '国家/地区', icon: 'Globe', options: [
        { label: '中国', count: 18750 },
        { label: '美国', count: 4320 },
        { label: '欧洲', count: 2890 }
      ]}
    ]
  },
  resource: {
    fields: [
      { id: 'name', label: '资源名称' },
      { id: 'type', label: '资源类型' },
      { id: 'provider', label: '提供方' },
      { id: 'location', label: '所在地区' },
      { id: 'capacity', label: '能力/资质' }
    ],
    filters: [
      { id: 'type', title: '资源类型', icon: 'Database', options: [
        { label: '算力资源', count: 120 },
        { label: '实验设施', count: 360 },
        { label: '数据资源', count: 280 }
      ]},
      { id: 'location', title: '所在地区', icon: 'MapPin', options: [
        { label: '重庆', count: 420 },
        { label: '四川', count: 280 }
      ]}
    ]
  }
}