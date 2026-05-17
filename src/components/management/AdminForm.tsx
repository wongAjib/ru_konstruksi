'use client'

import { useTransition } from 'react'
import { Loader2 } from 'lucide-react'

interface AdminFormProps {
  action: (formData: FormData) => Promise<void>
  children: React.ReactNode
  submitLabel?: string
  cancelHref: string
}

export default function AdminForm({ action, children, submitLabel = 'Simpan Data', cancelHref }: AdminFormProps) {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => action(formData))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}
      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
        <a href={cancelHref} className="px-6 py-3 rounded-xl font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors">
          Batal
        </a>
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 rounded-xl font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20 disabled:opacity-60 flex items-center gap-2"
        >
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {isPending ? 'Menyimpan...' : submitLabel}
        </button>
      </div>
    </form>
  )
}
