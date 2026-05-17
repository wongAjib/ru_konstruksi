import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Users } from 'lucide-react'
import { deleteTeam } from './actions'
import DeleteButton from '@/components/management/DeleteButton'

export default async function AdminTeamsPage() {
  const supabase = await createClient()
  const { data: teams } = await supabase.from('teams').select('*').order('sort_order', { ascending: true })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Teams</h1>
          <p className="text-slate-500 mt-1">Kelola data anggota tim konstruksi Anda.</p>
        </div>
        <Link
          href="/management/teams/new"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 flex items-center gap-2 transition-all font-medium"
        >
          <Plus className="w-4 h-4" /> Tambah Anggota
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 font-semibold text-slate-600">Foto</th>
              <th className="p-4 font-semibold text-slate-600">Nama</th>
              <th className="p-4 font-semibold text-slate-600">Posisi</th>
              <th className="p-4 font-semibold text-slate-600 text-center">Urutan</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {teams?.map((team) => (
              <tr key={team.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                    {team.photo ? (
                      <img src={team.photo} alt={team.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-lg font-bold">
                        {team.name?.charAt(0)}
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-4 font-medium text-slate-900">{team.name}</td>
                <td className="p-4 text-slate-600">{team.position}</td>
                <td className="p-4 text-slate-600 text-center">{team.sort_order}</td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Link href={`/management/teams/${team.id}`} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                      <Edit className="w-5 h-5" />
                    </Link>
                    <DeleteButton id={team.id} action={deleteTeam} confirmMessage={`Hapus anggota tim "${team.name}"?`} />
                  </div>
                </td>
              </tr>
            ))}
            {!teams?.length && (
              <tr>
                <td colSpan={5} className="p-12 text-center text-slate-500">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-slate-400" />
                    </div>
                    <p>Belum ada data anggota tim.</p>
                    <Link href="/management/teams/new" className="text-amber-600 font-medium hover:underline">+ Tambah Sekarang</Link>
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
