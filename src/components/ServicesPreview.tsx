"use client";

import { motion } from "framer-motion";
import { PenTool, HardHat, Hammer, ClipboardCheck, Sofa, Wrench } from "lucide-react";
import Link from "next/link";

import * as LucideIcons from "lucide-react";
import { Service } from "@/types/supabase";

// Helper to safely render icons dynamically
const getIconComponent = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
  return <Icon className="w-8 h-8 text-accent" />;
};

export default function ServicesPreview({ services }: { services: Service[] }) {
  if (!services || services.length === 0) return null;
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4"
          >
            Layanan Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Solusi Konstruksi <span className="text-accent">Terintegrasi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Kami menawarkan layanan end-to-end mulai dari tahap perencanaan, perancangan, hingga eksekusi pembangunan untuk memastikan hasil terbaik.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:border-accent hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:border-accent/30 transition-colors">
                <div className="transition-transform group-hover:scale-110 duration-300">
                  {getIconComponent(service.icon || 'Briefcase')}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{service.short_description}</p>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-slate-800 font-semibold group/link hover:text-accent transition-colors">
                Pelajari Lebih Lanjut
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
