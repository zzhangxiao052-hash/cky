import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, FileText, ChevronRight, Wrench } from 'lucide-react'

const counters = [
  { label: '教育领域', value: '41,353' },
  { label: '生命健康', value: '41,353' },
  { label: '新材料', value: '41,353' },
  { label: '信息技术', value: '41,353' }
]

const quickCards = [
  { title: '国家科技计划平台成果', icon: FileText },
  { title: '国家科技成果平台成果', icon: FileText },
  { title: '国家科技成果数据', icon: FileText }
]

const baseBriefs = [
  { title: '发展产业内低温制备纳米结构的基础研究', source: '某国家重点实验室', date: '2024-02-26', region: '重庆市' },
  { title: '针对超导体中的微观机制研究实现关键器件小型化应用', source: '某高校材料学院', date: '2024-02-26', region: '重庆市' },
  { title: '流体控制系统的能效优化与新型智能传感网络应用推广', source: '某研究院智能制造中心', date: '2024-02-26', region: '重庆市' },
  { title: '中高温固体电解质材料的产业化验证与工程示范', source: '某国家工程中心', date: '2024-02-26', region: '重庆市' },
  { title: '新型纳米结构高效催化剂的可规模化绿色制备研究', source: '某高校化学与化工学院', date: '2024-02-26', region: '重庆市' }
]

const industryOptions = [
  { key: '农、林、牧、渔业', label: '农、林、牧、渔业' },
  { key: '采矿业', label: '采矿业' },
  { key: '制造业', label: '制造业' },
  { key: '电力、热力、燃气及水生产和供应业', label: '电力、热力、燃气及水生产和供应业' },
  { key: '建筑业', label: '建筑业' },
  { key: '批发和零售业', label: '批发和零售业' },
  { key: '交通运输、仓储和邮政业', label: '交通运输、仓储和邮政业' },
  { key: '信息传输、软件和信息技术服务业', label: '信息传输、软件和信息技术服务业' }
]

const industryBriefs: Record<string, typeof baseBriefs> = {
  '农、林、牧、渔业': [
    { title: '智慧渔业环境监测与养殖优化技术应用', source: '某水产研究院', date: '2024-02-26', region: '重庆市' },
    { title: '农作物精准灌溉与病害识别智能系统', source: '某农业科学院', date: '2024-02-26', region: '重庆市' },
    { title: '林业碳汇监测与生态修复关键技术', source: '某生态研究中心', date: '2024-02-26', region: '重庆市' }
  ],
  '采矿业': [
    { title: '智能矿山安全监测与无人化开采关键技术', source: '某矿业集团研究中心', date: '2024-02-26', region: '重庆市' },
    { title: '复杂地质条件下绿色选矿新工艺', source: '某国家工程研究中心', date: '2024-02-26', region: '重庆市' }
  ],
  '制造业': [
    { title: '数字孪生驱动的柔性制造生产线优化', source: '某智能制造研究院', date: '2024-02-26', region: '重庆市' },
    { title: '高端装备关键零部件的激光增材制造', source: '某先进制造创新中心', date: '2024-02-26', region: '重庆市' }
  ],
  '电力、热力、燃气及水生产和供应业': [
    { title: '电力系统多能互补调度与安全保障', source: '某电网研究院', date: '2024-02-26', region: '重庆市' },
    { title: '城市供水智能监测与泄漏预测模型', source: '某市政工程研究中心', date: '2024-02-26', region: '重庆市' }
  ],
  '建筑业': [
    { title: '装配式建筑结构安全与绿色施工技术', source: '某建筑科技公司', date: '2024-02-26', region: '重庆市' },
    { title: '超高层建筑光热舒适性与能效优化', source: '某高校建筑学院', date: '2024-02-26', region: '重庆市' }
  ],
  '批发和零售业': [
    { title: '供应链可视化与零售智能补货算法', source: '某数据应用研究中心', date: '2024-02-26', region: '重庆市' },
    { title: '生鲜零售冷链物流协同优化系统', source: '某现代物流研究院', date: '2024-02-26', region: '重庆市' }
  ],
  '交通运输、仓储和邮政业': [
    { title: '多式联运调度优化与港口智慧物流', source: '某交通运输研究院', date: '2024-02-26', region: '重庆市' },
    { title: '城市配送最后一公里智能调度平台', source: '某智慧物流企业', date: '2024-02-26', region: '重庆市' }
  ],
  '信息传输、软件和信息技术服务业': [
    { title: '工业互联网安全可信通信关键技术', source: '某网络安全研究中心', date: '2024-02-26', region: '重庆市' },
    { title: '企业级AI知识增强与智能问答平台', source: '某软件工程研究中心', date: '2024-02-26', region: '重庆市' }
  ]
}

const domainTabs = ['前沿科技', '生命健康', '新材料', '信息技术']
const domains = [
  '人工智能', '区块链', '云计算', '大数据',
  '创新药物', '特医医疗', '生物制造', '智慧农业',
  '高性能碳材料', '先进光电与量子材料', '新型半导体材料', '高分子纳米结构',
  '激光加工与新装备', '生化芯片与传感器', '绿色制造工艺', '再生医学应用'
]

import { Leaf, Mountain, Factory, Flame, Building2, ShoppingCart, Truck, Server } from 'lucide-react'

const industryIcons: Record<string, React.ElementType> = {
  '农、林、牧、渔业': Leaf,
  '采矿业': Mountain,
  '制造业': Factory,
  '电力、热力、燃气及水生产和供应业': Flame,
  '建筑业': Building2,
  '批发和零售业': ShoppingCart,
  '交通运输、仓储和邮政业': Truck,
  '信息传输、软件和信息技术服务业': Server
}

const AchievementPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('')
  const briefs = useMemo(() => {
    if (!activeIndustry) return baseBriefs
    return industryBriefs[activeIndustry] || baseBriefs
  }, [activeIndustry])
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden mb-8">
          <div className="relative p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">科创成果</h1>
              <div className="flex items-center gap-2 mb-4">
                <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                  <option>成果</option>
                </select>
                <input className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700" placeholder="请输入成果名称、技术关键词、机构名称等" />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  搜索
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {counters.map((c) => (
                  <div key={c.label} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{c.value}</div>
                    <div className="text-gray-600 text-sm">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-64 lg:h-72 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-2xl" />
          </div>
          <div className="px-10 md:px-14 pb-8">
            <div className="flex items-center gap-6">
              {quickCards.map((q) => (
                <div key={q.title} className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3 shadow-sm">
                  <q.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-800">{q.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">成果简报</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-6">
              {briefs.map((b, idx) => (
                <div key={idx} className="pb-6 border-b last:border-none">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {b.title}
                    </h3>
                    <span className="text-sm text-blue-600">{b.region}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex gap-6">
                    <span>入库日期：{b.date}</span>
                    <span>来源机构：{b.source}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <a href="#" className="text-sm text-blue-600">查看更多</a>
            </div>
          </div>

          <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-3">
              {industryOptions.map((opt) => {
                const Icon = industryIcons[opt.key]
                const active = activeIndustry === opt.key
                return (
                  <button
                    key={opt.key}
                    onClick={() => setActiveIndustry(active ? '' : opt.key)}
                    className={`group flex items-center gap-3 rounded-lg px-4 py-4 text-left transition-all border ${active ? 'bg-white border-blue-200 shadow-sm ring-2 ring-blue-400' : 'bg-white/60 border-white/70 hover:bg-white'} `}
                  >
                    <div className={`p-2 rounded-md ${active ? 'bg-blue-50' : 'bg-blue-100'} `}>
                      {Icon ? <Icon className="w-5 h-5 text-blue-600" /> : <Wrench className="w-5 h-5 text-blue-600" />}
                    </div>
                    <span className={`text-sm ${active ? 'text-blue-700 font-medium' : 'text-gray-700'} `}>{opt.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">优质成果</h2>
        </div>
        <div className="flex items-center gap-6 mb-4 text-sm">
          {domainTabs.map((t, i) => (
            <button key={t} className={`pb-2 ${i === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {domains.map((d) => (
            <div key={d} className="aspect-[4/3] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-lg text-gray-700">
              {d}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AchievementPage
