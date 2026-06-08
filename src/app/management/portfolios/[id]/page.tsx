import { createClient } from '@/utils/supabase/server'
import { savePortfolio } from '@/app/management/portfolios/actions'
import ImageUploader from '@/components/management/ImageUploader'
import AdminForm from '@/components/management/AdminForm'
import ProjectImageManager from '@/components/management/ProjectImageManager'

export default async function PortfolioFormPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const isNew = id === 'new'
  let portfolio = null

  if (!isNew) {
    const supabase = await createClient()
    const { data } = await supabase.from('portfolios').select(`
      *,
      project_images (*)
    `).eq('id', id).single()
    portfolio = data
  }

  return (
    <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        {isNew ? 'Tambah Proyek Baru' : 'Edit Proyek'}
      </h1>
      <p className="text-slate-500 mb-8">Isi informasi detail proyek yang ingin ditampilkan di galeri.</p>

      <AdminForm action={savePortfolio} cancelHref="/management/portfolios">
        {portfolio?.id && <input type="hidden" name="id" value={portfolio.id} />}

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Judul Proyek</label>
            <input required type="text" name="title" defaultValue={portfolio?.title} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Slug (URL unik)</label>
            <input required type="text" name="slug" defaultValue={portfolio?.slug} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="villa-modern-jakarta" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Kategori</label>
            <select required name="category" defaultValue={portfolio?.category ?? ''} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white">
              <option value="" disabled>Pilih kategori...</option>
              <option value="Residensial">🏠 Residensial</option>
              <option value="Komersial">🏢 Komersial</option>
              <option value="Industri">🏭 Industri</option>
              <option value="Interior">🛋️ Interior</option>
              <option value="Renovasi">🔨 Renovasi</option>
              <option value="Villa">🏡 Villa</option>
              <option value="Hotel">🏨 Hotel</option>
              <option value="Office">🏛️ Office / Kantor</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Lokasi</label>
            <input type="text" name="location" defaultValue={portfolio?.location} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Klien</label>
            <input type="text" name="client_name" defaultValue={portfolio?.client_name} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal Proyek</label>
            <input type="date" name="project_date" defaultValue={portfolio?.project_date} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Proyek</label>
            <textarea required name="description" defaultValue={portfolio?.description} rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Foto Utama / Thumbnail</label>
            <ImageUploader name="thumbnail" defaultValue={portfolio?.thumbnail} folder="portfolios" />
          </div>
          <div className="col-span-2 flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl">
            <input type="checkbox" name="is_featured" id="is_featured" defaultChecked={portfolio?.is_featured ?? false} className="w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
            <label htmlFor="is_featured" className="text-sm font-semibold text-slate-700 cursor-pointer">
              Tampilkan di halaman utama <span className="font-normal text-slate-500">(Featured)</span>
            </label>
          </div>
        </div>
      </AdminForm>

      {!isNew && portfolio && (
        <ProjectImageManager portfolioId={portfolio.id} initialImages={portfolio.project_images || []} />
      )}
    </div>
  )
}
