import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Star, CheckCircle, MessageSquare } from 'lucide-react'
import { deleteTestimonial } from './actions'
import DeleteButton from '@/components/management/DeleteButton'

export default async function AdminTestimonialsPage() {
  const supabase = await createClient()
  const { data: testimonials } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Testimonials</h1>
          <p className="text-slate-500 mt-1">Kelola ulasan dan testimoni dari klien Anda.</p>
        </div>
        <Link
          href="/management/testimonials/new"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 flex items-center gap-2 transition-all font-medium"
        >
          <Plus className="w-4 h-4" /> Tambah Testimoni
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Klien</th>
              <th className="p-4 font-semibold text-slate-600">Rating</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {testimonials?.map((testi) => (
              <tr key={testi.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                      {testi.avatar ? (
                        <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                          {testi.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{testi.name}</div>
                      <div className="text-sm text-slate-500">{testi.role}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < (testi.rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  {testi.is_featured ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                      <CheckCircle className="w-3 h-3" /> Featured
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      Normal
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/management/testimonials/${testi.id}`} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </Link>
                    <DeleteButton id={testi.id} action={deleteTestimonial} confirmMessage={`Hapus testimoni dari "${testi.name}"?`} />
                  </div>
                </td>
              </tr>
            ))}
            {!testimonials?.length && (
              <tr>
                <td colSpan={4} className="p-12 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-3">
                    <MessageSquare className="w-10 h-10 text-slate-300" />
                    <p>Belum ada data testimoni.</p>
                    <Link href="/management/testimonials/new" className="text-amber-600 font-medium hover:underline">+ Tambah Sekarang</Link>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
