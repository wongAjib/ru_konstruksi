"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Format the WhatsApp message
      const text = `Halo, saya ingin konsultasi proyek:

*Nama:* ${formData.name}
*No. WA:* ${formData.phone}
*Jenis Proyek:* ${formData.projectType}
*Estimasi Budget:* ${formData.budget}
*Pesan:* ${formData.message}`;
      
      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/6281802344888?text=${encodedText}`;
      
      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');
      
      // Reset form after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          phone: "",
          projectType: "",
          budget: "",
          message: ""
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="consultation-form" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Form Konsultasi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Ceritakan rencana proyek Anda, dan tim kami akan segera menghubungi Anda.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pesan Terkirim!</h3>
              <p className="text-slate-600">
                Terima kasih, kami akan segera memproses permintaan Anda dan Anda akan diarahkan ke WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Contoh: 0812xxxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="projectType" className="text-sm font-medium text-slate-700">Jenis Proyek</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>Pilih Jenis Proyek</option>
                    <option value="Bangun Baru">Bangun Baru</option>
                    <option value="Renovasi">Renovasi</option>
                    <option value="Desain Interior">Desain Interior</option>
                    <option value="Konstruksi Sipil">Konstruksi Sipil</option>
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="budget" className="text-sm font-medium text-slate-700">Estimasi Budget</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Contoh: Rp 500.000.000"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Pesan / Detail Tambahan</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Ceritakan detail proyek atau pertanyaan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Permintaan
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
