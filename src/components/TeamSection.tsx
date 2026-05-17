"use client";

import { motion } from "framer-motion";

import { TeamMember } from "@/types/supabase";

export default function TeamSection({ team }: { team: TeamMember[] }) {
  if (!team || team.length === 0) return null;
  return (
    <section id="team" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-white -z-10 transform skew-x-12 -translate-x-20"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white shadow-sm text-slate-600 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Tim Profesional
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Pakar di Balik <span className="text-accent relative inline-block">
              Keunggulan
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Didukung oleh tenaga ahli tersertifikasi dan berpengalaman yang berdedikasi penuh untuk mewujudkan setiap detail visi konstruksi Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-4 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="px-3 pb-4 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-4 tracking-wide uppercase">{member.position}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
