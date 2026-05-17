'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Upload, X, ImageIcon, Loader2 } from 'lucide-react'

interface ImageUploaderProps {
  name: string
  defaultValue?: string
  folder?: string
}

export default function ImageUploader({
  name,
  defaultValue = '',
  folder = 'general',
}: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string>(defaultValue)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Hanya file gambar yang diperbolehkan (PNG, JPG, WEBP, dll).')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran file maksimal 5MB.')
      return
    }

    setError('')
    setUploading(true)

    try {
      const supabase = createClient()
      const ext = file.name.split('.').pop()
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(fileName, file, { upsert: true })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(fileName)

      setPreviewUrl(publicUrl)
    } catch (err: any) {
      setError(`Gagal upload: ${err?.message || 'Pastikan bucket "media" sudah dibuat di Supabase Storage dan bersifat Public.'}`)
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    setPreviewUrl('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="space-y-3">
      {/* Hidden field yang menyimpan URL ke form */}
      <input type="hidden" name={name} value={previewUrl} />

      {/* Preview gambar jika sudah ada */}
      {previewUrl && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <button
              type="button"
              onClick={handleRemove}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Drop zone / Upload area */}
      <div
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          uploading
            ? 'border-amber-300 bg-amber-50 cursor-wait'
            : 'border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 cursor-pointer'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={handleFileChange}
          className="hidden"
          disabled={uploading}
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
            <p className="text-sm text-amber-700 font-medium">Mengupload gambar...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center">
              <Upload className="w-7 h-7 text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">
                {previewUrl ? 'Klik untuk ganti gambar' : 'Klik untuk pilih gambar'}
              </p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP maksimal 5MB</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg border border-red-100">
          {error}
        </p>
      )}
    </div>
  )
}
