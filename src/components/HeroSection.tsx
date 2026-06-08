"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/75 z-10" />
        <img
          src="/hero-bg.png"
          alt="Modern Construction"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 backdrop-blur-md border border-accent/30 text-accent font-medium text-sm mb-6 shadow-lg">
              #1 Jasa Kontraktor Profesional
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-xl"
          >
            Bangun Masa Depan <br className="hidden md:block" />
            <span className="bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Bersama Kami
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed"
          >
            Kami menghadirkan solusi konstruksi modern, inovatif, dan terpercaya.
            Mewujudkan bangunan impian Anda dengan kualitas tanpa kompromi dan presisi tinggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/6281802344888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-accent/20 text-lg group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Hubungi via WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-accent text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg group"
            >
              Lihat Proyek
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-accent" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
