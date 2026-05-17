"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Testimonial } from "@/types/supabase";

export default function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-slate-50 -z-10 transform -skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-100 text-slate-600 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Testimoni Klien
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Kepercayaan <span className="text-accent relative inline-block">
              Membangun
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> Reputasi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Pengalaman nyata dari klien yang telah mempercayakan proyek konstruksi dan renovasi mereka kepada tim profesional RU Konstruksi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-3xl p-10 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 relative flex flex-col h-full"
            >
              <div className="absolute top-10 right-10">
                <Quote className="w-12 h-12 text-slate-100 group-hover:text-accent/10 transition-colors duration-300" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow relative z-10 font-light">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto pt-6 border-t border-slate-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
