"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Portfolio } from "@/types/supabase";

// Icon mapping — tambah ikon baru di sini jika perlu
const categoryIconMap: Record<string, string> = {
  Komersial: "🏢",
  Residensial: "🏠",
  Industri: "🏭",
  Interior: "🛋️",
  Commercial: "🏢",
  Residential: "🏠",
  Industrial: "🏭",
  Renovation: "🔨",
  Renovasi: "🔨",
  Office: "🏛️",
  Hotel: "🏨",
  Villa: "🏡",
};

const getIcon = (cat: string) => categoryIconMap[cat] ?? "📁";

export default function GalleryClient({ initialProjects }: { initialProjects: Portfolio[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);

  // Derivasi kategori secara dinamis dari data yang ada
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(initialProjects.map((p) => p.category).filter(Boolean))
    ).sort();
    return ["Semua", ...cats];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua") return initialProjects;
    return initialProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, initialProjects]);

  // Count projects per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Semua: initialProjects.length };
    initialProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [initialProjects]);

  // Navigate between projects in lightbox
  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (direction === "prev" && currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    } else if (direction === "next" && currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,160,23,0.08),transparent_60%)]" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-5"
          >
            Galeri Proyek
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Hasil Karya{" "}
            <span className="text-accent">Terbaik</span> Kami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Jelajahi koleksi proyek konstruksi yang telah kami selesaikan — mulai dari
            gedung perkantoran, rumah tinggal, hingga proyek industri berskala besar.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: `${initialProjects.length}+`, label: "Proyek Selesai" },
              { value: "98%", label: "Klien Puas" },
              { value: "5+", label: "Kategori" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-slate-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Gallery */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#1A1A1A] text-white shadow-lg shadow-black/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-accent/40 hover:text-accent hover:shadow-md"
                  }`}
                >
                  {cat !== "Semua" && (
                    <span className="text-base">{getIcon(cat)}</span>
                  )}
                  {cat}
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-accent text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-[280px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-5 left-5 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                          <span>{getIcon(project.category)}</span>
                          {project.category}
                        </span>
                      </div>
                      {/* Featured Badge */}
                      {project.is_featured && (
                        <div className="absolute top-5 right-5 z-20">
                          <span className="bg-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                      {/* Location on hover */}
                      <div className="absolute bottom-4 left-5 z-20 flex items-center gap-1.5 text-white/90 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <MapPin size={14} />
                        <span className="text-sm font-medium">{project.location}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {project.project_date ? new Date(project.project_date).getFullYear() : '-'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">
                Belum ada proyek dalam kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              {filteredProjects.findIndex((p) => p.id === selectedProject.id) > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); navigateProject("prev"); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              {filteredProjects.findIndex((p) => p.id === selectedProject.id) < filteredProjects.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); navigateProject("next"); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              <div className="overflow-y-auto">
                {/* Image */}
                <div className="relative h-[300px] md:h-[400px]">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                      <span>{getIcon(selectedProject.category)}</span>
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <MapPin size={18} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Lokasi
                        </span>
                      </div>
                      <p className="font-semibold text-slate-800">
                        {selectedProject.location}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Calendar size={18} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Tahun
                        </span>
                      </div>
                      <p className="font-semibold text-slate-800">
                        {selectedProject.project_date ? new Date(selectedProject.project_date).getFullYear() : '-'}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Calendar size={18} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Klien
                        </span>
                      </div>
                      <p className="font-semibold text-slate-800">
                        {selectedProject.client_name || '-'}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/6285779568555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                    >
                      💬 Konsultasi Proyek Serupa
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium transition-all cursor-pointer"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
