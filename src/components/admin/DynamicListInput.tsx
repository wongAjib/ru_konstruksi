'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

export type ListType = 'features' | 'workflows' | 'faqs'

interface DynamicListInputProps {
  name: string
  type: ListType
  defaultValue?: any
  title: string
  description: string
}

export default function DynamicListInput({ name, type, defaultValue, title, description }: DynamicListInputProps) {
  // Parse existing data if any, otherwise start with an empty array
  const initialData = defaultValue ? (typeof defaultValue === 'string' ? JSON.parse(defaultValue) : defaultValue) : []
  const [items, setItems] = useState<any[]>(initialData)

  const handleAddItem = () => {
    if (type === 'features') setItems([...items, { title: '', description: '' }])
    else if (type === 'workflows') setItems([...items, { step_number: items.length + 1, title: '', description: '' }])
    else if (type === 'faqs') setItems([...items, { question: '', answer: '' }])
  }

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index)
    // Re-adjust step numbers for workflows if needed
    if (type === 'workflows') {
      newItems.forEach((item, i) => { item.step_number = i + 1 })
    }
    setItems(newItems)
  }

  const handleChange = (index: number, field: string, value: string) => {
    const newItems = [...items]
    newItems[index][field] = value
    setItems(newItems)
  }

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{description}</p>
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          className="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-amber-200 transition-colors"
        >
          <Plus className="w-4 h-4" /> Tambah Item
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm relative group">
            {type === 'workflows' && (
              <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold rounded-lg flex items-center justify-center">
                {item.step_number}
              </div>
            )}
            
            <div className="flex-grow space-y-3">
              {type === 'features' && (
                <>
                  <input
                    type="text" placeholder="Judul Keunggulan (Contoh: Material Berkualitas)"
                    value={item.title || ''} onChange={(e) => handleChange(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                  <textarea
                    placeholder="Deskripsi singkat..." rows={2}
                    value={item.description || ''} onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                </>
              )}
              {type === 'workflows' && (
                <>
                  <input
                    type="text" placeholder="Tahapan (Contoh: Konsultasi Awal)"
                    value={item.title || ''} onChange={(e) => handleChange(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                  <textarea
                    placeholder="Deskripsi tahapan..." rows={2}
                    value={item.description || ''} onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                </>
              )}
              {type === 'faqs' && (
                <>
                  <input
                    type="text" placeholder="Pertanyaan (Contoh: Berapa lama waktu pengerjaan?)"
                    value={item.question || ''} onChange={(e) => handleChange(index, 'question', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                  <textarea
                    placeholder="Jawaban..." rows={3}
                    value={item.answer || ''} onChange={(e) => handleChange(index, 'answer', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                </>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="flex-shrink-0 text-slate-300 hover:text-red-500 transition-colors self-start"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center p-6 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
            Belum ada data. Klik &quot;Tambah Item&quot; untuk memulai.
          </div>
        )}
      </div>

      {/* Hidden input to pass data to formData */}
      <input type="hidden" name={name} value={JSON.stringify(items)} />
    </div>
  )
}
