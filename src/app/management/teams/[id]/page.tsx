import { createClient } from '@/utils/supabase/server'
import { saveTeam } from '@/app/management/teams/actions'
import ImageUploader from '@/components/management/ImageUploader'
import AdminForm from '@/components/management/AdminForm'

export default async function TeamFormPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const isNew = id === 'new'
  let team = null

  if (!isNew) {
    const supabase = await createClient()
    const { data } = await supabase.from('teams').select('*').eq('id', id).single()
    team = data
  }

  return (
    <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        {isNew ? 'Tambah Anggota Tim' : 'Edit Anggota Tim'}
      </h1>
      <p className="text-slate-500 mb-8">Lengkapi informasi di bawah ini untuk mengelola data anggota tim.</p>

      <AdminForm action={saveTeam} cancelHref="/management/teams">
        {team?.id && <input type="hidden" name="id" value={team.id} />}

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
            <input required type="text" name="name" defaultValue={team?.name} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Posisi / Peran</label>
            <input required type="text" name="position" defaultValue={team?.position} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Contoh: Chief Architect" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Urutan Tampil</label>
            <input type="number" name="sort_order" defaultValue={team?.sort_order ?? 0} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">LinkedIn URL</label>
            <input type="text" name="linkedin" defaultValue={team?.linkedin} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="https://linkedin.com/in/username" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Singkat</label>
            <textarea name="description" defaultValue={team?.description} rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Foto Profil</label>
            <ImageUploader name="photo" defaultValue={team?.photo} folder="teams" />
          </div>
        </div>
      </AdminForm>
    </div>
  )
}
