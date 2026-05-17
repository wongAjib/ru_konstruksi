"use client";

import { motion } from "framer-motion";

const partners = [
  "Koperasi DPMS", "Koperasi Mandiri Finartha Melimpah", "Perusahaan Lainnya"
];

export default function PartnerSection() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <p className="text-center text-slate-500 font-medium mb-10 text-sm tracking-wider uppercase">
          Klien Kami : 
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-black text-slate-400 hover:text-slate-800 hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
