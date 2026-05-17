"use client";

import { motion } from "framer-motion";
import { Users, Building2, CheckCircle2, Award } from "lucide-react";

const highlights = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    value: "15+",
    label: "Tahun Pengalaman",
    description: "Dedikasi dalam industri konstruksi sejak 2008."
  },
  {
    icon: <Building2 className="w-8 h-8 text-accent" />,
    value: "250+",
    label: "Proyek Selesai",
    description: "Berbagai skala proyek dari residensial hingga komersial."
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    value: "100+",
    label: "Tenaga Ahli",
    description: "Tim profesional tersertifikasi dan berpengalaman."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
    value: "99%",
    label: "Kepuasan Klien",
    description: "Komitmen pada kualitas dan ketepatan waktu."
  }
];

export default function CompanyHighlights() {
  return (
    <section className="py-20 bg-white relative z-30 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F8F8] rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">{item.value}</h3>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">{item.label}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
