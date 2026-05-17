'use client'

import { useTransition } from 'react'
import { Trash2 } from 'lucide-react'

interface DeleteButtonProps {
  id: string
  action: (formData: FormData) => Promise<void>
  confirmMessage?: string
}

export default function DeleteButton({
  id,
  action,
  confirmMessage = 'Yakin ingin menghapus data ini?'
}: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!confirm(confirmMessage)) return
    const formData = new FormData()
    formData.append('id', id)
    startTransition(() => action(formData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        disabled={isPending}
        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40"
        title="Hapus"
      >
        {isPending ? (
          <div className="w-5 h-5 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
        ) : (
          <Trash2 className="w-5 h-5" />
        )}
      </button>
    </form>
  )
}
