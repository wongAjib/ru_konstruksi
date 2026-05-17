'use client'

import { useState } from 'react'

interface PortfolioOption {
  id: string
  title: string
}

interface MultiSelectPortfolioProps {
  name: string
  defaultValue?: any
  options: PortfolioOption[]
}

export default function MultiSelectPortfolio({ name, defaultValue, options }: MultiSelectPortfolioProps) {
  // Parse initial selected IDs
  const initialData: string[] = defaultValue ? (typeof defaultValue === 'string' ? JSON.parse(defaultValue) : defaultValue) : []
  const [selectedIds, setSelectedIds] = useState<string[]>(initialData)

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(itemId => itemId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900">Proyek Terkait</h3>
        <p className="text-sm text-slate-500 mt-1">Pilih portfolio yang akan ditampilkan sebagai proyek terkait di halaman layanan ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-1">
        {options.map((portfolio) => (
          <label 
            key={portfolio.id} 
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
              selectedIds.includes(portfolio.id) 
                ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500' 
                : 'bg-white border-slate-200 hover:border-amber-300'
            }`}
          >
            <input 
              type="checkbox" 
              checked={selectedIds.includes(portfolio.id)}
              onChange={() => toggleSelection(portfolio.id)}
              className="w-4 h-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <span className={`font-medium text-sm ${selectedIds.includes(portfolio.id) ? 'text-amber-900' : 'text-slate-700'}`}>
              {portfolio.title}
            </span>
          </label>
        ))}

        {options.length === 0 && (
          <div className="col-span-full text-center p-4 text-slate-400">
            Belum ada data portfolio. Tambahkan portfolio terlebih dahulu.
          </div>
        )}
      </div>

      <input type="hidden" name={name} value={JSON.stringify(selectedIds)} />
    </div>
  )
}
