import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const tabs = ['专利分析', '论文统计', '产学研合作企业', '工作站服务项目']

const rightExperts = [
  { initial: '邓', name: '邓恩强', desc: '某高校 · 微电子学院，副教授' },
  { initial: '李', name: '李勇强', desc: '某研究所 · 半导体中心，研究员' },
  { initial: '王', name: '王明', desc: '某高校 · 材料学院，副教授' },
  { initial: '张', name: '张科', desc: '某企业 · 显示器件部，高级工程师' },
  { initial: '陈', name: '陈杰', desc: '某高校 · 集成电路学院，教授' },
  { initial: '周', name: '周磊', desc: '某研究所 · 光电实验室，研究员' },
  { initial: '刘', name: '刘畅', desc: '某高校 · 电子工程学院，副教授' },
  { initial: '黄', name: '黄正午', desc: '某高校 · 光电学院，教授' }
]

const patentRows = [
  {
    idx: 1,
    title: '气体储存材料及其制备方法，传感器、检测装置',
    type: '发明专利',
    tag: '交叉学科',
    code: 'CN2024140069190X',
    apply: '2024-01-03',
    publish: '2025-07-04'
  },
  {
    idx: 2,
    title: '气体储存材料及其制备方法，传感器、检测装置',
    type: '发明专利',
    tag: '交叉学科',
    code: 'CN2023116439402A',
    apply: '2023-12-01',
    publish: '2025-06-03'
  },
  {
    idx: 3,
    title: '气体储存材料及其制备方法，传感器、检测装置',
    type: '发明专利',
    tag: '交叉学科',
    code: 'CN2023116474589A',
    apply: '2023-11-30',
    publish: '2025-06-03'
  },
  {
    idx: 4,
    title: '气体储存材料及其制备方法，传感器、检测装置',
    type: '发明专利',
    tag: '交叉学科',
    code: 'CN2023116445489A',
    apply: '2023-11-30',
    publish: '2025-06-03'
  },
  {
    idx: 5,
    title: '电池电解质复合微结构方法',
    type: '发明专利',
    tag: '材料科学',
    code: 'CN2023112414899A',
    apply: '2023-09-28',
    publish: '2025-03-28'
  }
]

const ExpertDetailPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center gap-1 hover:border-blue-300 hover:text-blue-700"
          >
            <ChevronLeft className="w-4 h-4" />
            返回上一级
          </button>
          <div className="text-sm text-gray-500">
            <span>首页</span>
            <span className="mx-2">/</span>
            <span>高端专家</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600">专家详情</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">杨</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="text-2xl font-semibold text-gray-900">杨志</div>
                    <span className="px-2 py-0.5 text-xs rounded bg-blue-50 text-blue-600 border border-blue-100">教授 · 博导</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">研究方向：微电子与集成电路、纳米材料与薄膜器件、微纳传感</div>
                  <div className="text-sm text-gray-600 mb-1">所在单位：某高校电子信息学院</div>
                  <div className="text-sm text-gray-600 mb-4">学历：博士研究生 学位：博士 职称：教授</div>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">68</div>
                      <div className="text-gray-600">专利</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">27</div>
                      <div className="text-gray-600">论文</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">11</div>
                      <div className="text-gray-600">项目</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">5</div>
                      <div className="text-gray-600">成果</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-6 border-b border-gray-100 pb-2">
                {tabs.map((t, i) => (
                  <div key={t} className={`text-sm font-medium pb-2 ${i === 0 ? 'text-blue-600' : 'text-gray-600'}`}>{t}</div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="text-sm font-semibold text-gray-900 mb-3">专利申请趋势</div>
                  <div className="h-56 md:h-64 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden">
                    <img src="/chart_new.png" alt="chart" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="text-sm font-semibold text-gray-900 mb-3">专业领域分布</div>
                  <div className="h-56 md:h-64 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden">
                    <img src="/chart_new.png" alt="chart" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-base font-semibold text-gray-900">专利信息(89)</div>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                    <option>公开类型</option>
                    <option>发明专利</option>
                    <option>实用新型</option>
                  </select>
                  <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                    <option>领域标签</option>
                    <option>交叉学科</option>
                    <option>材料科学</option>
                  </select>
                  <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                    <option>申请单位</option>
                    <option>某高校</option>
                    <option>某研究所</option>
                  </select>
                  <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                    <option>公开日期</option>
                    <option>近一年</option>
                    <option>近三年</option>
                  </select>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-3 py-2 text-left w-16">序号</th>
                        <th className="px-3 py-2 text-left">专利名称</th>
                        <th className="px-3 py-2 text-left w-28">公开类型</th>
                        <th className="px-3 py-2 text-left w-28">领域标签</th>
                        <th className="px-3 py-2 text-left w-40">公开编号</th>
                        <th className="px-3 py-2 text-left w-32">申请日</th>
                        <th className="px-3 py-2 text-left w-32">公开日期</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-900">
                      {patentRows.map((r) => (
                        <tr key={r.idx} className="hover:bg-gray-50">
                          <td className="px-3 py-2">{r.idx}</td>
                          <td className="px-3 py-2 text-blue-700">{r.title}</td>
                          <td className="px-3 py-2">{r.type}</td>
                          <td className="px-3 py-2">
                            <span className="px-2 py-0.5 rounded border border-gray-200 text-xs text-gray-700">{r.tag}</span>
                          </td>
                          <td className="px-3 py-2 text-gray-700">{r.code}</td>
                          <td className="px-3 py-2 text-gray-700">{r.apply}</td>
                          <td className="px-3 py-2 text-gray-700">{r.publish}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  {[1,2,3,4,5,6].map((n, i) => (
                    <span key={i} className={`w-8 h-8 rounded flex items-center justify-center text-sm ${n===1 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-700'}`}>{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 bg-blue-600 rounded" />
                <div className="text-base font-bold text-gray-900">同技术领域专家</div>
              </div>
              <div className="space-y-4">
                {rightExperts.map((ex, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">{ex.initial}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">{ex.name}</div>
                      <div className="text-xs text-gray-600">{ex.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ExpertDetailPage
