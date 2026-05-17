import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Briefcase, Image as ImageIcon, Users, MessageSquare, ArrowRight, TrendingUp } from 'lucide-react'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const [
    { count: servicesCount },
    { count: portfoliosCount },
    { count: teamsCount },
    { count: testimonialsCount },
  ] = await Promise.all([
    supabase.from('services').select('*', { count: 'exact', head: true }),
    supabase.from('portfolios').select('*', { count: 'exact', head: true }),
    supabase.from('teams').select('*', { count: 'exact', head: true }),
    supabase.from('testimonials').select('*', { count: 'exact', head: true }),
  ])

  const stats = [
    { label: 'Total Layanan', value: servicesCount ?? 0, icon: Briefcase, href: '/management/services', color: 'bg-amber-50 text-amber-600' },
    { label: 'Total Proyek', value: portfoliosCount ?? 0, icon: ImageIcon, href: '/management/portfolios', color: 'bg-blue-50 text-blue-600' },
    { label: 'Anggota Tim', value: teamsCount ?? 0, icon: Users, href: '/management/teams', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Testimoni', value: testimonialsCount ?? 0, icon: MessageSquare, href: '/management/testimonials', color: 'bg-purple-50 text-purple-600' },
  ]

  const quickLinks = [
    { label: 'Tambah Proyek Baru', href: '/management/portfolios/new', desc: 'Upload hasil kerja terbaru' },
    { label: 'Tambah Testimoni', href: '/management/testimonials/new', desc: 'Tambah ulasan dari klien' },
    { label: 'Tambah Anggota Tim', href: '/management/teams/new', desc: 'Perkenalkan anggota baru' },
    { label: 'Tambah Layanan', href: '/management/services/new', desc: 'Daftarkan layanan baru' },
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Selamat datang di Panel Admin RU Konstruksi.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions & Info Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Links */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-slate-900">Aksi Cepat</h2>
          </div>
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all group">
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm">{link.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-slate-900 p-6 rounded-2xl text-white">
          <h2 className="text-lg font-bold mb-5 text-white">💡 Panduan Singkat</h2>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">1.</span>
              <span>Buka menu <span className="text-white font-semibold">Portfolios</span>, lalu klik <span className="text-amber-400">Tambah Proyek</span> untuk menambahkan hasil kerja baru. Centang <strong className="text-white">Featured</strong> agar muncul di halaman utama.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">2.</span>
              <span>Buka menu <span className="text-white font-semibold">Testimonials</span> dan centang <span className="text-amber-400">Featured</span> pada testimoni yang ingin ditampilkan di halaman utama.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">3.</span>
              <span>Buka menu <span className="text-white font-semibold">Teams</span> dan atur <span className="text-amber-400">Sort Order</span> untuk menentukan urutan tampil anggota tim.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">4.</span>
              <span>Perubahan data akan langsung tampil di website setelah Anda menekan tombol <span className="text-amber-400">Simpan Data</span>.</span>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-700">
            <Link href="/" target="_blank" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
              Lihat Website → 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
