import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, Bot } from 'lucide-react'

const counters = [
  { label: '教育领域', value: '41,353' },
  { label: '生命健康', value: '41,353' },
  { label: '新材料', value: '41,353' },
  { label: '信息技术', value: '41,353' }
]

const featuredExperts = [
  {
    initial: '杨',
    name: '杨志',
    link: '专家主页链接',
    desc:
      '研究方向：微电子、集成电路、半导体材料。所在单位：某高校电子信息学院。',
    stats: [
      { label: '专利', value: '68' },
      { label: '论文', value: '27' },
      { label: '项目', value: '11' },
      { label: '成果', value: '5' }
    ]
  },
  {
    initial: '权',
    name: '权国政',
    link: '专家主页链接',
    desc:
      '研究方向：新材料工程、功能薄膜、复杂工艺工程。所在单位：某工程研究中心。',
    stats: [
      { label: '专利', value: '40' },
      { label: '论文', value: '17' },
      { label: '项目', value: '9' },
      { label: '成果', value: '3' }
    ]
  }
]

const rightExperts = [
  {
    initial: '杨',
    name: '黄正午',
    desc: '研究方向：光电器件、量子材料、半导体、显示。',
    stats: [
      { label: '专利', value: '64' },
      { label: '论文', value: '43' },
      { label: '项目', value: '12' },
      { label: '成果', value: '1' }
    ]
  },
  {
    initial: '杨',
    name: '黄正午',
    desc: '研究方向：光电器件、量子材料、半导体、显示。',
    stats: [
      { label: '专利', value: '64' },
      { label: '论文', value: '43' },
      { label: '项目', value: '12' },
      { label: '成果', value: '1' }
    ]
  }
]

const domains = [
  '人工智能',
  '量子技术',
  '半导体',
  '新能源电池',
  '新材料',
  '航空航天',
  '高端装备',
  '量子芯片',
  '生物制造'
]

const ExpertPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden mb-8">
          <div className="relative p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">专家人才</h1>
              <div className="flex items-center gap-2 mb-4">
                <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                  <option>专家</option>
                </select>
                <input className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700" placeholder="请输入专家姓名、研究方向、机构名称等" />
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
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">专家推荐</h2>
          <span className="ml-auto text-sm text-gray-500 flex items-center gap-2">专家助手 <Bot className="w-4 h-4 text-purple-600" /></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            {featuredExperts.map((ex, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  {ex.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-semibold text-blue-700">{ex.name}</span>
                    <a href="#" className="text-xs text-blue-600 underline">{ex.link}</a>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{ex.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {ex.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-semibold text-gray-900">{s.value}</div>
                        <div className="text-gray-600">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {rightExperts.map((ex, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  {ex.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-semibold text-blue-700">{ex.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{ex.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {ex.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-semibold text-gray-900">{s.value}</div>
                        <div className="text-gray-600">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">特色领域</h2>
        </div>
        <div className="text-xs text-gray-500 mb-4">*416专线对接创新服务专属局 *3361专线优化供应链连接体系</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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

export default ExpertPage

