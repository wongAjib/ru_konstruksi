import { createClient } from '@/utils/supabase/server'
import { saveService } from '@/app/management/services/actions'
import ImageUploader from '@/components/management/ImageUploader'
import AdminForm from '@/components/management/AdminForm'
import DynamicListInput from '@/components/management/DynamicListInput'
import MultiSelectPortfolio from '@/components/management/MultiSelectPortfolio'

export default async function ServiceFormPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const id = (await params).slug
  const isNew = id === 'new'
  let service = null

  const supabase = await createClient()

  if (!isNew) {
    const { data } = await supabase.from('services').select('*').eq('id', id).single()
    service = data
  }

  const { data: portfolios } = await supabase.from('portfolios').select('id, title').order('created_at', { ascending: false })

  const iconOptions = [
    { value: 'Briefcase', label: '🧰 Briefcase (Umum)' },
    { value: 'Building2', label: '🏢 Building (Gedung)' },
    { value: 'Home', label: '🏠 Home (Rumah)' },
    { value: 'Ruler', label: '📐 Ruler (Desain/Ukur)' },
    { value: 'HardHat', label: '👷 HardHat (Konstruksi)' },
    { value: 'PaintBucket', label: '🎨 PaintBucket (Pengecatan)' },
    { value: 'Wrench', label: '🔧 Wrench (Renovasi)' },
    { value: 'Layers', label: '📦 Layers (Arsitektur)' },
    { value: 'Hammer', label: '🔨 Hammer (Pembangunan)' },
    { value: 'Lightbulb', label: '💡 Lightbulb (Elektrikal)' },
    { value: 'Droplets', label: '💧 Droplets (Plumbing)' },
    { value: 'Sofa', label: '🛋️ Sofa (Interior)' },
  ]

  return (
    <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        {isNew ? 'Tambah Layanan Baru' : 'Edit Layanan'}
      </h1>
      <p className="text-slate-500 mb-8">Isi informasi layanan yang ingin ditampilkan di halaman utama.</p>

      <AdminForm action={saveService} cancelHref="/management/services">
        {service?.id && <input type="hidden" name="id" value={service.id} />}

        <div className="grid grid-cols-2 gap-6">
          {/* Judul */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Judul Layanan</label>
            <input
              required type="text" name="title"
              defaultValue={service?.title}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
            />
          </div>

          {/* Slug */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Slug (URL unik)</label>
            <input
              required type="text" name="slug"
              defaultValue={service?.slug}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              placeholder="bangun-rumah"
            />
            <p className="text-xs text-slate-400 mt-1">Huruf kecil + tanda hubung. Contoh: bangun-rumah</p>
          </div>

          {/* Ikon */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Ikon Layanan</label>
            <select
              name="icon"
              defaultValue={service?.icon ?? 'Briefcase'}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
            >
              {iconOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <p className="text-xs text-slate-400 mt-1">Ikon ini akan tampil di kartu layanan halaman utama.</p>
          </div>

          {/* Deskripsi Singkat */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Singkat</label>
            <textarea
              required name="short_description"
              defaultValue={service?.short_description}
              rows={2}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              placeholder="Deskripsi singkat yang muncul di halaman utama..."
            />
          </div>

          {/* Deskripsi Lengkap */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Lengkap</label>
            <textarea
              required name="full_description"
              defaultValue={service?.full_description}
              rows={6}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              placeholder="Deskripsi lengkap yang muncul di halaman detail layanan..."
            />
          </div>

          {/* Hero Image */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Gambar Hero (Cover Layanan)</label>
            <ImageUploader name="hero_image" defaultValue={service?.hero_image} folder="services" />
          </div>

          <div className="col-span-2 mt-8 space-y-8">
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2">Fitur Tambahan</h2>
            
            <DynamicListInput 
              name="features" 
              type="features" 
              defaultValue={service?.features} 
              title="Keunggulan Kami" 
              description="Tambahkan fitur atau keunggulan spesifik dari layanan ini." 
            />

            <DynamicListInput 
              name="workflow" 
              type="workflows" 
              defaultValue={service?.workflow} 
              title="Tahapan Kerja" 
              description="Jelaskan langkah demi langkah proses pengerjaan layanan ini." 
            />

            <DynamicListInput 
              name="faqs" 
              type="faqs" 
              defaultValue={service?.faqs} 
              title="Pertanyaan Umum (FAQ)" 
              description="Tambahkan pertanyaan yang sering diajukan beserta jawabannya." 
            />

            <MultiSelectPortfolio 
              name="related_projects" 
              defaultValue={service?.related_projects} 
              options={portfolios || []} 
            />
          </div>
        </div>
      </AdminForm>
    </div>
  )
}
