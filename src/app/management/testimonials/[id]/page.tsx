import { createClient } from '@/utils/supabase/server'
import { saveTestimonial } from '@/app/management/testimonials/actions'
import ImageUploader from '@/components/management/ImageUploader'
import AdminForm from '@/components/management/AdminForm'

export default async function TestimonialFormPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const isNew = id === 'new'
  let testimonial = null

  if (!isNew) {
    const supabase = await createClient()
    const { data } = await supabase.from('testimonials').select('*').eq('id', id).single()
    testimonial = data
  }

  return (
    <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        {isNew ? 'Tambah Testimoni' : 'Edit Testimoni'}
      </h1>
      <p className="text-slate-500 mb-8">Lengkapi informasi ulasan dari klien Anda.</p>

      <AdminForm action={saveTestimonial} cancelHref="/management/testimonials">
        {testimonial?.id && <input type="hidden" name="id" value={testimonial.id} />}

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Klien</label>
            <input required type="text" name="name" defaultValue={testimonial?.name} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Jabatan / Perusahaan</label>
            <input required type="text" name="role" defaultValue={testimonial?.role} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="CEO PT Maju Jaya" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Rating (1-5)</label>
            <input required type="number" name="rating" min="1" max="5" defaultValue={testimonial?.rating ?? 5} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-end">
            <div className="flex items-center gap-3 pb-3">
              <input type="checkbox" name="is_featured" id="is_featured" defaultChecked={testimonial?.is_featured ?? true} className="w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
              <label htmlFor="is_featured" className="text-sm font-semibold text-slate-700 cursor-pointer">Tampilkan di halaman utama</label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Isi Testimoni</label>
            <textarea required name="content" defaultValue={testimonial?.content} rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Foto Klien (Avatar)</label>
            <ImageUploader name="avatar" defaultValue={testimonial?.avatar} folder="testimonials" />
          </div>
        </div>
      </AdminForm>
    </div>
  )
}
