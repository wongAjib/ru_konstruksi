"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { Portfolio } from "@/types/supabase";

export default function PortfolioPreview({ 
  portfolios, 
  title = "Karya Terbaik", 
  highlight = "RU Konstruksi",
  subtitle = "Lihat beberapa proyek konstruksi dan renovasi terbaru yang telah kami selesaikan dengan hasil yang memuaskan klien kami.",
  hideHeader = false
}: { 
  portfolios: Portfolio[];
  title?: string;
  highlight?: string;
  subtitle?: string;
  hideHeader?: boolean;
}) {
  if (!portfolios || portfolios.length === 0) return null;
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4"
              >
                Portofolio Kami
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                {title} <span className="text-accent">{highlight}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-accent text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg whitespace-nowrap group"
            >
              Lihat Semua Proyek
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
