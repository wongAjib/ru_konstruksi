import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, CheckCircle, MapPin, ImageIcon } from 'lucide-react'
import { deletePortfolio } from './actions'
import DeleteButton from '@/components/management/DeleteButton'

export default async function AdminPortfoliosPage() {
  const supabase = await createClient()
  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Portfolios</h1>
          <p className="text-slate-500 mt-1">Kelola proyek-proyek yang telah dikerjakan.</p>
        </div>
        <Link
          href="/management/portfolios/new"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 flex items-center gap-2 transition-all font-medium"
        >
          <Plus className="w-4 h-4" /> Tambah Proyek
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {portfolios?.map((portfolio) => (
          <div key={portfolio.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
            <div className="relative aspect-video bg-slate-100">
              {portfolio.thumbnail ? (
                <img
                  src={portfolio.thumbnail}
                  alt={portfolio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-slate-300" />
                </div>
              )}
              {portfolio.is_featured && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500 text-white shadow-md">
                  <CheckCircle className="w-3 h-3" /> Featured
                </span>
              )}
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">{portfolio.category}</span>
              <h3 className="font-bold text-slate-900 mt-3 mb-1">{portfolio.title}</h3>
              {portfolio.location && (
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> {portfolio.location}
                </p>
              )}
              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-50 justify-end">
                <Link href={`/management/portfolios/${portfolio.id}`} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                  <Edit className="w-5 h-5" />
                </Link>
                <DeleteButton id={portfolio.id} action={deletePortfolio} confirmMessage={`Hapus proyek "${portfolio.title}"?`} />
              </div>
            </div>
          </div>
        ))}
        {!portfolios?.length && (
          <div className="col-span-3 p-16 text-center bg-white rounded-2xl border border-slate-100">
            <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 mb-4">Belum ada data portfolio.</p>
            <Link href="/management/portfolios/new" className="text-amber-600 font-medium hover:underline">+ Tambah Proyek Pertama</Link>
          </div>
        )}
      </div>
    </div>
  )
}
