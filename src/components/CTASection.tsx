"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-[#111111] to-[#1A1A1A] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-white/5">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Siap Memulai Proyek <br className="hidden md:block" />
                <span className="text-accent">Impian Anda?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg md:text-xl"
              >
                Konsultasikan kebutuhan konstruksi dan renovasi Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik sesuai anggaran Anda.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0"
            >
              <a
                href="https://wa.me/6285779568555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg text-lg group"
              >
                <Phone size={20} className="group-hover:-rotate-12 transition-transform" />
                Hubungi Sekarang
              </a>
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-accent/50 text-accent hover:bg-accent/10 px-8 py-4 rounded-full font-medium transition-all text-lg group"
              >
                Minta Penawaran
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
