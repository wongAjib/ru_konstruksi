'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Upload, X, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import { addProjectImages, deleteProjectImage, updateProjectImageOrder } from '@/app/management/portfolios/actions'
import { ProjectImage } from '@/types/supabase'

interface ProjectImageManagerProps {
  portfolioId: string
  initialImages: ProjectImage[]
}

export default function ProjectImageManager({ portfolioId, initialImages }: ProjectImageManagerProps) {
  const [images, setImages] = useState<ProjectImage[]>(
    [...initialImages].sort((a, b) => a.sort_order - b.sort_order)
  )
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const validFiles = files.filter(f => f.type.startsWith('image/') && f.size <= 5 * 1024 * 1024)
    if (validFiles.length !== files.length) {
      setError('Beberapa file diabaikan karena bukan gambar atau ukurannya > 5MB.')
    } else {
      setError('')
    }

    if (validFiles.length === 0) return

    setUploading(true)

    try {
      const supabase = createClient()
      const uploadedUrls: string[] = []

      for (const file of validFiles) {
        const ext = file.name.split('.').pop()
        const fileName = `portfolios/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(fileName, file, { upsert: true })

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(fileName)

        uploadedUrls.push(publicUrl)
      }

      await addProjectImages(portfolioId, uploadedUrls)
      
      // We rely on server action revalidatePath, but we can also optimistically update
      // For simplicity, we just reload the page to get the new images from server
      window.location.reload()
      
    } catch (err: any) {
      setError(`Gagal upload: ${err?.message || 'Pastikan bucket "media" sudah dibuat dan public.'}`)
      console.error(err)
      setUploading(false)
    }
  }

  const handleDelete = async (imageId: string) => {
    if (!confirm('Yakin ingin menghapus foto ini?')) return
    try {
      setImages(prev => prev.filter(img => img.id !== imageId))
      await deleteProjectImage(imageId, portfolioId)
    } catch (err) {
      console.error(err)
      window.location.reload()
    }
  }

  const handleMove = async (index: number, direction: 'left' | 'right') => {
    if (direction === 'left' && index === 0) return
    if (direction === 'right' && index === images.length - 1) return

    const newImages = [...images]
    const targetIndex = direction === 'left' ? index - 1 : index + 1
    
    // Swap
    const temp = newImages[index]
    newImages[index] = newImages[targetIndex]
    newImages[targetIndex] = temp

    // Update sort_order based on new array
    const updatedImages = newImages.map((img, i) => ({ ...img, sort_order: i }))
    setImages(updatedImages)

    try {
      await updateProjectImageOrder(updatedImages.map(i => ({ id: i.id, sort_order: i.sort_order })), portfolioId)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="space-y-6 mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Galeri Foto Proyek</h3>
        <p className="text-sm text-slate-500 mb-4">Tambahkan foto-foto lain untuk proyek ini. Anda bisa mengubah urutannya.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden bg-white border border-slate-200 group">
            <img src={img.image_url} alt="Project" className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleDelete(img.id)}
                  className="bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 shadow-md"
                  title="Hapus foto"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => handleMove(index, 'left')}
                  disabled={index === 0}
                  className="bg-white/90 text-slate-900 rounded-full p-1.5 hover:bg-white shadow-md disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMove(index, 'right')}
                  disabled={index === images.length - 1}
                  className="bg-white/90 text-slate-900 rounded-full p-1.5 hover:bg-white shadow-md disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Upload Button Box */}
        <div
          onClick={() => !uploading && fileInputRef.current?.click()}
          className={`aspect-square relative border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 text-center transition-all ${
            uploading
              ? 'border-amber-300 bg-amber-50 cursor-wait'
              : 'border-slate-300 hover:border-amber-400 hover:bg-amber-50/50 cursor-pointer bg-white'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            multiple
            onChange={handleFileChange}
            className="hidden"
            disabled={uploading}
          />
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 text-amber-500 animate-spin mb-2" />
              <span className="text-xs font-medium text-amber-700">Mengupload...</span>
            </>
          ) : (
            <>
              <Upload className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-600">Tambah Foto</span>
              <span className="text-[10px] text-slate-400 mt-1">Bisa pilih banyak</span>
            </>
          )}
        </div>
      </div>
      
      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg border border-red-100">
          {error}
        </p>
      )}
    </div>
  )
}
