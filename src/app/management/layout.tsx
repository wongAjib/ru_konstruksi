import { logout } from '@/app/management/login/actions'
import Link from 'next/link'
import {
  LogOut, Home, Briefcase, Users,
  MessageSquare, Image as ImageIcon,
} from 'lucide-react'

export const metadata = {
  title: 'Admin Panel | RU Konstruksi',
}

const navItems = [
  { href: '/management', label: 'Dashboard', icon: Home },
  { href: '/management/services', label: 'Services', icon: Briefcase },
  { href: '/management/portfolios', label: 'Portfolios', icon: ImageIcon },
  { href: '/management/teams', label: 'Teams', icon: Users },
  { href: '/management/testimonials', label: 'Testimonials', icon: MessageSquare },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 bg-slate-900 flex-col flex-shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/management" className="text-xl font-bold tracking-wider text-white">
            RU<span className="text-amber-500">KONSTRUKSI</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all font-medium text-sm group"
            >
              <item.icon className="w-5 h-5 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-slate-800 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-xl transition-all text-sm font-medium"
          >
            <span className="text-base">🌐</span> Lihat Website
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all text-sm font-medium"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" /> Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Topbar */}
        <header className="md:hidden h-14 bg-slate-900 flex items-center gap-2 px-4 flex-shrink-0">
          <Link href="/management" className="text-base font-bold text-white whitespace-nowrap mr-2">
            RU<span className="text-amber-500">Admin</span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex-shrink-0 px-2.5 py-1.5 text-slate-300 hover:text-amber-400 text-xs font-medium rounded-lg hover:bg-slate-800 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <form action={logout} className="ml-auto flex-shrink-0">
            <button type="submit" className="p-2 text-red-400 hover:text-red-300 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </form>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
