import React, { useMemo, useState } from 'react'
import { X, Plus, Minus, Search } from 'lucide-react'
import { useSearch } from '../contexts/SearchContext'
import { searchConfig, combinators, operators } from '../config/searchConfig'

interface AdvancedSearchModalProps {
  onClose: () => void
}

type Condition = {
  combinator?: 'AND' | 'OR' | 'NOT'
  field: string
  operator: string
  value: string
}

const AdvancedSearchModal: React.FC<AdvancedSearchModalProps> = ({ onClose }) => {
  const { activeCategory, setFilters } = useSearch()
  const config = useMemo(() => searchConfig[activeCategory], [activeCategory])

  const [conditions, setConditions] = useState<Condition[]>([
    { field: config.fields[0]?.id || 'title', operator: 'contains', value: '' }
  ])
  const [globalMatch, setGlobalMatch] = useState<'exact' | 'fuzzy'>('fuzzy')

  const updateCondition = (index: number, patch: Partial<Condition>) => {
    setConditions(prev => prev.map((c, i) => i === index ? { ...c, ...patch } : c))
  }

  const addCondition = () => {
    setConditions(prev => [...prev, { combinator: 'AND', field: config.fields[0]?.id || 'title', operator: 'contains', value: '' }])
  }

  const removeCondition = (index: number) => {
    setConditions(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFilters({ ...conditions, globalMatch })
    console.log('高级搜索条件:', { conditions, globalMatch })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">高级筛选</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-3">
            {conditions.map((c, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-center">
                {index > 0 && (
                  <select
                    value={c.combinator}
                    onChange={(e) => updateCondition(index, { combinator: e.target.value as Condition['combinator'] })}
                    className="col-span-2 px-3 py-2 border border-gray-300 rounded"
                  >
                    {combinators.map((cb) => (
                      <option key={cb.id} value={cb.id}>{cb.label}</option>
                    ))}
                  </select>
                )}
                <select
                  value={c.field}
                  onChange={(e) => updateCondition(index, { field: e.target.value })}
                  className={`${index === 0 ? 'col-span-3' : 'col-span-3'} px-3 py-2 border border-gray-300 rounded`}
                >
                  {config.fields.map(f => (
                    <option key={f.id} value={f.id}>{f.label}</option>
                  ))}
                </select>
                <select
                  value={c.operator}
                  onChange={(e) => updateCondition(index, { operator: e.target.value })}
                  className="col-span-3 px-3 py-2 border border-gray-300 rounded"
                >
                  {operators.map(op => (
                    <option key={op.id} value={op.id}>{op.label}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={c.value}
                  onChange={(e) => updateCondition(index, { value: e.target.value })}
                  placeholder="请输入检索内容"
                  className="col-span-3 px-3 py-2 border border-gray-300 rounded"
                />
                <div className="col-span-1 flex items-center justify-end space-x-1">
                  {index > 0 && (
                    <button type="button" onClick={() => removeCondition(index)} className="p-2 text-gray-600 hover:text-red-600">
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <button type="button" onClick={addCondition} className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 flex items-center space-x-1">
                <Plus className="w-4 h-4" />
                <span>添加条件</span>
              </button>
              <div className="flex items-center space-x-3 ml-4">
                <span className="text-sm text-gray-600">匹配方式:</span>
                <label className="text-sm text-gray-700">
                  <input type="radio" className="mr-1" checked={globalMatch === 'fuzzy'} onChange={() => setGlobalMatch('fuzzy')} />模糊
                </label>
                <label className="text-sm text-gray-700">
                  <input type="radio" className="mr-1" checked={globalMatch === 'exact'} onChange={() => setGlobalMatch('exact')} />精确
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            <button type="button" onClick={onClose} className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium border border-gray-300 rounded-lg hover:bg-gray-50">取消</button>
            <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>应用筛选</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearchModal;