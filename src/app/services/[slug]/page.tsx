import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import CTASection from "@/components/CTASection";
import PortfolioPreview from "@/components/PortfolioPreview";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const supabase = await createClient();

  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .single();

  if (!service) {
    notFound();
  }

  // Read JSON fields
  const features = service.features || [];
  const workflow = service.workflow || [];
  const faqs = service.faqs || [];

  // Fetch related portfolios if any
  let relatedPortfolios: any[] = [];
  if (service.related_projects && Array.isArray(service.related_projects) && service.related_projects.length > 0) {
    const { data } = await supabase.from('portfolios').select('*').in('id', service.related_projects);
    if (data) relatedPortfolios = data;
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.hero_image || '/images/default-hero.jpg'}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6">
            <Link href="/#services" className="hover:text-accent transition-colors">Layanan</Link>
            <ChevronRight size={14} />
            <span>{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            {service.short_description}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/20"
          >
            Konsultasi Sekarang
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* 2. About Service */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Tentang Layanan <span className="text-accent">Ini</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              {service.full_description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Features */}
      {features && features.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Keunggulan Kami</h2>
              <p className="text-slate-500 text-lg">Mengapa memilih layanan {service.title} di RU Konstruksi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature: { title: string; description?: string }, index: number) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Workflow */}
      {workflow && workflow.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tahapan <span className="text-accent">Kerja</span>
              </h2>
              <p className="text-slate-500 text-lg">Proses terstruktur untuk memastikan hasil yang maksimal dan tepat waktu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflow.map((step: { step_number: number; title: string; description?: string }, index: number) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-md flex items-center justify-center text-xl font-bold text-slate-400 mb-6 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    {step.step_number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pertanyaan <span className="text-accent">Umum</span>
              </h2>
              <p className="text-slate-500 text-lg">Jawaban atas pertanyaan yang sering diajukan terkait layanan {service.title}.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-4">
                    <span className="text-accent">Q:</span>
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Projects */}
      {relatedPortfolios.length > 0 && (
        <PortfolioPreview 
          portfolios={relatedPortfolios}
          title="Proyek Terkait"
          highlight={service.title}
          subtitle={`Lihat beberapa proyek konstruksi dan renovasi terbaru kami yang berkaitan dengan layanan ${service.title}.`}
          hideHeader={false}
        />
      )}

      {/* 7. CTA */}
      <CTASection />
    </main>
  );
}
