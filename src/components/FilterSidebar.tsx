import React, { useEffect, useMemo, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import * as Icons from 'lucide-react'
import { useSearch } from '../contexts/SearchContext'
import { searchConfig } from '../config/searchConfig'

const FilterSidebar: React.FC = () => {
  const { activeCategory, filters, setFilters } = useSearch()
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const sections = useMemo(() => searchConfig[activeCategory].filters, [activeCategory])

  useEffect(() => {
    setExpandedSections(sections.map(s => s.id))
  }, [sections])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId])
  }

  const onToggleOption = (sectionId: string, label: string) => {
    const current = filters?.[sectionId] || []
    const next = current.includes(label) ? current.filter((l: string) => l !== label) : [...current, label]
    setFilters({ ...filters, [sectionId]: next })
  }

  const iconFor = (name: string) => {
    const Icon = (Icons as any)[name] || Icons.Tag
    return <Icon className="w-4 h-4" />
  }

  const resetFilters = () => setFilters({})

  return (
    <div className="w-80 bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">筛选条件</h3>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 pb-4 last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-2">
                {iconFor(section.icon)}
                <span className="font-medium text-gray-900 text-sm">{section.title}</span>
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <div className="mt-3 space-y-2 pl-2">
                {section.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 hover:bg-gray-50 p-1 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(filters?.[section.id] || []).includes(option.label)}
                      onChange={() => onToggleOption(section.id, option.label)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 flex-1">{option.label}</span>
                    <span className="text-xs text-gray-500">({option.count})</span>
                  </label>
                ))}
                <button className="text-xs text-blue-600 hover:text-blue-800 mt-2">更多...</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">应用筛选</button>
        <button onClick={resetFilters} className="w-full mt-2 text-gray-600 hover:text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors">重置筛选</button>
      </div>
    </div>
  )
}

export default FilterSidebar