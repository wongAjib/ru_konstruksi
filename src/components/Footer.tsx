import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Globe } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-slate-300 py-16 border-t border-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Raffi Utama Konstruksi menghadirkan solusi konstruksi modern, profesional, dan terpercaya untuk mewujudkan bangunan impian Anda dengan standar kualitas tertinggi.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rukonstruksi.bogor?igsh=bDJyYzg0amd3bXlz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Layanan Kami</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">Desain Arsitektur</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Konstruksi Sipil</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Renovasi Bangunan</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Manajemen Proyek</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Interior & Eksterior</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Portofolio Proyek</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Testimoni Klien</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400">Jl. Raden Kan'an, Tanah Baru, Cimahpar, Bogor-Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-slate-400">+62 818-0234-4888 </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-slate-400">cv.raffi.utama@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#1A1A1A] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RU Konstruksi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
