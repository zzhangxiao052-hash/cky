import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, Landmark, Users, BadgePercent, ShieldCheck, Cpu, Building2, Rocket, Award, Sparkles, ChevronRight, FileText, Bell } from 'lucide-react'

const iconItems = [
  { icon: Landmark, label: '税惠' },
  { icon: Users, label: '人才扶持' },
  { icon: BadgePercent, label: '研发补贴' },
  { icon: ShieldCheck, label: '资质认定' },
  { icon: Cpu, label: '数字化转型' },
  { icon: Building2, label: '研发平台' },
  { icon: Rocket, label: '新型样板' },
  { icon: Award, label: '奖励补助' }
]

const applyCards = [
  { title: '申报高新技术企业', tip: '认定成功率85%', stat: '近一年发布32条' },
  { title: '申报认定工程研究中心', tip: '区域覆盖率95%', stat: '近一年发布30条' },
  { title: '申报中国科学技术奖', tip: '竞赛支持充足', stat: '近一年发布15条' },
  { title: '申报中国专利奖', tip: '储备专利7万件', stat: '近一年发布20条' },
  { title: '申报国家级知识产权示范企业', tip: '成长型企业优选', stat: '近一年发布18条' },
  { title: '申报中国科学院相关奖项', tip: '科研单位专项', stat: '近一年发布12条' }
]

const latestColumns = [
  {
    title: '中国通知',
    items: [
      '关于推进新型工业化促进高质量发展工作要点',
      '关于开展人工智能创新应用重大专项项目申报',
      '关于实施“好技术转好产品”科技攻关行动方案',
      '关于加快数字化转型试点示范的通知',
      '关于进一步优化重点产业政策配套指引'
    ]
  },
  {
    title: '立项公示',
    items: [
      '国家2025年重点科技计划拟立项项目公示',
      '科技部专项（CS）拟立项清单',
      '省级重大科技项目立项名单',
      '重点研发计划青年项目立项公示',
      '智能制造示范工程拟立项单位'
    ]
  },
  {
    title: '政策公告',
    items: [
      '国家发展改革委关于“主动建圈入圈”政策公告',
      '工业和信息化部关于推进制造业数字化转型通知',
      '关于开展知识产权示范企业认定工作的公告',
      '关于开展科技人才引进专项行动的公告',
      '关于开展试点城市科技赋能计划的公告'
    ]
  }
]

const PolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop')] opacity-10" />
          <div className="relative p-10 md:p-14">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">科创政策</h1>
            <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>政策推荐热榜</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full">
                <Bell className="w-4 h-4" />
                <span>实时更新</span>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl">
              <div className="px-4 py-3 text-gray-500 text-sm">政策名称、关键词</div>
              <div className="flex-1" />
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-r-xl">
                <Search className="w-4 h-4" />
                <span>立即搜索</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-6 bg-blue-600 rounded" />
            <span className="text-gray-900 font-semibold">政策种类热榜推荐</span>
          </div>
          <button className="text-sm text-gray-500 hover:text-blue-600 flex items-center">更多<ChevronRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {iconItems.map(({ icon: Icon, label }, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 text-center hover:shadow-sm">
              <div className="mx-auto w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-700">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 relative">
          {applyCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{card.title}</h3>
                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">{card.tip}</span>
              </div>
              <div className="text-sm text-gray-500">{card.stat}</div>
            </div>
          ))}
          <div className="hidden lg:block absolute -right-10 top-1/3">
            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">AI</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-6 bg-blue-600 rounded" />
          <span className="text-gray-900 font-semibold">最新政策</span>
          <span className="text-gray-400 text-sm">每日更新</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestColumns.map((col, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-blue-600" />
                <h4 className="font-semibold text-gray-900">{col.title}</h4>
              </div>
              <div className="space-y-3">
                {col.items.map((t, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-gray-400 mt-2" />
                    <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer line-clamp-1">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PolicyPage
