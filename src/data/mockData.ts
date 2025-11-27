export const mockPatents = [
  {
    id: 1,
    title: '一种锂电池电池管理设备',
    patentNumber: 'CN1175463A',
    applicationNumber: '202311234567.8',
    applicationDate: '2023-08-15',
    publicationDate: '2023-12-20',
    applicant: '浙江安全培训科技有限公司',
    inventors: ['张三', '李四', '王五'],
    agency: '杭州专利代理有限公司',
    abstract: '本发明涉及一种锂电池的管理设备，包括电池状态监测模块、充放电控制模块、安全保护模块和通信模块。该设备能够实时监测电池的电压、电流、温度等参数，并根据监测结果智能调节充放电过程，提高电池使用安全性和寿命。',
    tags: ['电池管理', '安全保护', '快速充电'],
    date: '2023-12-20'
  },
  {
    id: 2,
    title: '锂电池管理设备模块',
    patentNumber: 'CN2201879U',
    applicationNumber: '202322123456.7',
    applicationDate: '2023-06-10',
    publicationDate: '2024-01-15',
    applicant: '深圳新能源科技有限公司',
    inventors: ['李明', '陈华', '刘强'],
    agency: '深圳专利事务所',
    abstract: '本实用新型公开了一种锂电池管理设备模块，包括主控芯片、采样电路、保护电路和通信接口。该模块具有高精度采样、多重保护、智能均衡等功能，可有效提高电池组的安全性和使用寿命。',
    tags: ['锂电池', '管理模块', '保护'],
    date: '2024-01-15'
  },
  {
    id: 3,
    title: '一种锂电池快速保护装置',
    patentNumber: 'CN1176539A',
    applicationNumber: '202311345678.9',
    applicationDate: '2023-09-20',
    publicationDate: '2024-02-10',
    applicant: '神州顶级能源工业有限公司',
    inventors: ['赵六', '钱七', '孙八'],
    agency: '北京知识产权代理公司',
    abstract: '本发明提供一种锂电池快速保护装置，包括过充保护电路、过放保护电路、温度检测电路和快速断开开关。该装置能够在电池出现异常情况时快速切断电路，有效防止电池损坏和安全事故。',
    tags: ['快速保护', '安全', '温度检测'],
    date: '2024-02-10'
  },
  {
    id: 4,
    title: '一种在锂电池储能系统中的管理装置',
    patentNumber: 'CN1170696A',
    applicationDate: '2023-03-12',
    publicationDate: '2023-10-25',
    applicant: '无锡汉超新能源科技有限公司',
    inventors: ['周九', '吴十', '郑十一'],
    agency: '江苏专利代理中心',
    abstract: '本发明涉及一种在锂电池储能系统中的管理装置，包括电池管理系统、能量管理系统、热管理系统和安全监控系统。该装置能够实现对储能系统的全面监控和智能管理，提高系统效率和安全性。',
    tags: ['储能系统', '管理装置', '智能监控'],
    date: '2023-10-25'
  },
  {
    id: 5,
    title: '一种锂电池综合状态检测仪',
    patentNumber: 'CN1111721A',
    applicationDate: '2023-07-08',
    publicationDate: '2023-12-18',
    applicant: '山东丰轩环能科技有限公司',
    inventors: ['王十二', '李十三', '张十四'],
    agency: '山东知识产权服务公司',
    abstract: '本发明公开了一种锂电池综合状态检测仪，包括内阻测试模块、容量测试模块、健康状态评估模块和数据处理模块。该仪器能够准确检测电池的各项性能参数，为电池维护和管理提供科学依据。',
    tags: ['状态检测', '健康诊断', '参数采集'],
    date: '2023-12-18'
  },
  {
    id: 6,
    title: '一种锂电池热失控预警方法',
    patentNumber: 'CN116546A',
    applicationDate: '2023-05-22',
    publicationDate: '2023-10-30',
    applicant: '张港锁硬核新材料有限公司',
    inventors: ['陈十五', '林十六', '黄十七'],
    agency: '上海专利代理有限公司',
    abstract: '本发明提供一种锂电池热失控预警方法，通过多参数融合分析技术，结合温度、电压、内阻等参数的变化趋势，建立热失控预测模型，实现对电池热失控的早期预警。',
    tags: ['热失控', '预警', '多参数融合'],
    date: '2023-10-30'
  },
  {
    id: 7,
    title: '一种锂电池极片质量检测机构',
    patentNumber: 'CN1169471A',
    applicationDate: '2023-04-15',
    publicationDate: '2023-06-28',
    applicant: '中科院材料研究所',
    inventors: ['刘十八', '杨十九', '马二十'],
    agency: '中科院知识产权中心',
    abstract: '本发明涉及一种锂电池极片质量检测机构，包括厚度检测模块、表面缺陷检测模块、涂层均匀性检测模块和数据分析系统。该机构能够快速准确地检测极片质量，提高电池生产效率和产品质量。',
    tags: ['极片检测', '质量检测', '缺陷识别'],
    date: '2023-06-28'
  },
  {
    id: 8,
    title: '锂电池检测方法及装置',
    patentNumber: 'CN118771A',
    applicationDate: '2024-01-10',
    publicationDate: '2024-03-15',
    applicant: '清华大学',
    inventors: ['张教授', '李博士', '王研究员'],
    agency: '清华专利事务所',
    abstract: '本发明公开了锂电池检测方法及装置，通过采集电池的多维度参数，运用机器学习算法进行数据分析和故障诊断，实现对电池性能的智能评估和预测性维护。',
    tags: ['智能检测', '机器学习', '算法优化'],
    date: '2024-03-15'
  }
];

export const mockPolicies = [
  {
    id: 1,
    title: '新能源汽车产业发展规划',
    number: '国发〔2023〕15号',
    issuingAgency: '国务院',
    issueDate: '2023-06-15',
    effectiveDate: '2023-07-01',
    category: '产业政策',
    summary: '加快推进新能源汽车产业高质量发展，完善产业生态体系。',
    tags: ['新能源汽车', '产业发展', '政策扶持']
  },
  {
    id: 2,
    title: '科技创新支撑碳达峰碳中和实施方案',
    number: '国科发社〔2023〕45号',
    issuingAgency: '科技部',
    issueDate: '2023-08-20',
    effectiveDate: '2023-09-01',
    category: '科技政策',
    summary: '加强科技创新对碳达峰碳中和目标的支撑作用。',
    tags: ['碳达峰', '碳中和', '科技创新']
  }
];

export const mockExperts = [
  {
    id: 1,
    name: '李明华',
    tags: ['中国科学院院士'],
    institution: '清华大学',
    field: '材料科学与工程',
    expertise: ['锂电池材料', '新能源技术', '材料表征'],
    publications: 156,
    patents: 23,
    projects: 12,
    partners: 45
  },
  {
    id: 2,
    name: '王建国',
    tags: ['国家杰出青年基金获得者'],
    institution: '中科院物理所',
    field: '凝聚态物理',
    expertise: ['固态电池', '离子导体', '电化学'],
    publications: 203,
    patents: 34,
    projects: 18,
    partners: 52
  }
];

export const mockProjects = [
  {
    id: 1,
    title: '高安全性锂电池关键技术研发',
    projectNumber: '2023YFB1503200',
    fundingAgency: '科技部',
    startDate: '2023-01-01',
    endDate: '2026-12-31',
    budget: '2500万元',
    leader: '李明华',
    institution: '清华大学',
    status: '进行中',
    summary: '开发高安全性锂电池关键技术，提升电池安全性能。',
    keywords: ['锂电池', '安全性', '关键技术']
  },
  {
    id: 2,
    title: '固态电池产业化技术攻关',
    projectNumber: '2023JSYF156800',
    fundingAgency: '工信部',
    startDate: '2023-03-01',
    endDate: '2025-02-28',
    budget: '1800万元',
    leader: '王建国',
    institution: '中科院物理所',
    status: '立项',
    summary: '突破固态电池产业化关键技术瓶颈。',
    keywords: ['固态电池', '产业化', '技术攻关']
  }
];

export const mockEnterprises = [
  {
    id: 1,
    name: '重庆长安汽车股份有限公司',
    industry: '汽车制造',
    location: '重庆',
    establishedYear: 1996,
    registeredCapital: '480264.85万元',
    status: '存续',
    description: '中国汽车四大集团阵营企业，拥有160年历史底蕴，38年造车积累，全球有14个生产基地，33个整车、发动机及变速器工厂。',
    tags: ['整车制造', '新能源汽车', '智能网联']
  },
  {
    id: 2,
    name: '重庆千星科技股份有限公司',
    industry: '电子信息',
    location: '重庆',
    establishedYear: 2018,
    registeredCapital: '5000万元',
    status: '存续',
    description: '专注于卫星互联网终端设备研发、生产和销售的高新技术企业。',
    tags: ['卫星通信', '终端设备', '高新技术']
  }
];

export const mockAchievements = [
  {
    id: 1,
    title: '高性能固态电池电解质材料',
    owner: '中科院物理所',
    type: '新材料',
    maturity: '中试阶段',
    transferMode: '技术转让',
    price: '面议',
    description: '开发了一种新型高离子电导率固态电解质，解决了界面阻抗大的问题。',
    tags: ['固态电池', '电解质', '新材料']
  },
  {
    id: 2,
    title: '智能网联汽车辅助驾驶系统',
    owner: '重庆大学',
    type: '电子信息',
    maturity: '产业化阶段',
    transferMode: '合作开发',
    price: '500万元',
    description: '基于深度学习的视觉感知与决策规划系统，实现了L3级辅助驾驶功能。',
    tags: ['自动驾驶', '人工智能', '智能交通']
  }
];

export const mockDemands = [
  {
    id: 1,
    title: '高镍三元正极材料前驱体合成技术',
    requester: '某新能源材料公司',
    industry: '新能源',
    budget: '200万元',
    deadline: '2024-12-31',
    description: '寻求高镍三元正极材料前驱体（Ni>80%）的控制结晶合成工艺，要求粒径分布窄，振实密度高。',
    tags: ['正极材料', '合成工艺', '技术攻关']
  },
  {
    id: 2,
    title: '工业机器人高精度减速器设计',
    requester: '某智能装备制造企业',
    industry: '智能制造',
    budget: '150万元',
    deadline: '2024-06-30',
    description: '征集高精度、长寿命RV减速器设计方案，要求传动效率>90%，背隙<1arcmin。',
    tags: ['机器人', '减速器', '机械设计']
  }
];

export const mockResources = [
  {
    id: 1,
    name: '国家超级计算重庆中心',
    type: '算力资源',
    provider: '重庆市大数据局',
    location: '重庆',
    capacity: '30PFlops',
    description: '提供高性能计算、云计算、大数据处理等服务，支持科学计算、工程仿真、人工智能等应用。',
    tags: ['超算', '云计算', '大数据']
  },
  {
    id: 2,
    name: '新能源汽车检测中心',
    type: '实验设施',
    provider: '中国汽研',
    location: '重庆',
    capacity: 'CNAS认证',
    description: '具备新能源汽车整车、动力电池、电机电控等关键零部件的检测评价能力。',
    tags: ['检测认证', '新能源汽车', '实验室']
  }
];