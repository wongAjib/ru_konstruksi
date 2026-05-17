import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Briefcase } from 'lucide-react'
import { deleteService } from './actions'
import DeleteButton from '@/components/management/DeleteButton'

export default async function AdminServicesPage() {
  const supabase = await createClient()
  const { data: services } = await supabase.from('services').select('*').order('created_at', { ascending: true })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Services</h1>
          <p className="text-slate-500 mt-1">Kelola daftar layanan yang ditawarkan perusahaan.</p>
        </div>
        <Link
          href="/management/services/new"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 flex items-center gap-2 transition-all font-medium"
        >
          <Plus className="w-4 h-4" /> Tambah Layanan
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Judul Layanan</th>
              <th className="p-4 font-semibold text-slate-600">Slug</th>
              <th className="p-4 font-semibold text-slate-600 hidden lg:table-cell">Deskripsi Singkat</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service) => (
              <tr key={service.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {service.hero_image ? (
                      <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={service.hero_image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-amber-600" />
                      </div>
                    )}
                    <span className="font-medium text-slate-900">{service.title}</span>
                  </div>
                </td>
                <td className="p-4 text-slate-500 font-mono text-sm">{service.slug}</td>
                <td className="p-4 text-slate-500 text-sm max-w-xs truncate hidden lg:table-cell">{service.short_description}</td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/management/services/${service.id}`} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </Link>
                    <DeleteButton id={service.id} action={deleteService} confirmMessage={`Hapus layanan "${service.title}"?`} />
                  </div>
                </td>
              </tr>
            ))}
            {!services?.length && (
              <tr>
                <td colSpan={4} className="p-12 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-3">
                    <Briefcase className="w-10 h-10 text-slate-300" />
                    <p>Belum ada data layanan.</p>
                    <Link href="/management/services/new" className="text-amber-600 font-medium hover:underline">+ Tambah Layanan Pertama</Link>
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
