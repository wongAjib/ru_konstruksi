import HeroSection from "@/components/HeroSection";
import CompanyHighlights from "@/components/CompanyHighlights";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import PartnerSection from "@/components/PartnerSection";
import CTASection from "@/components/CTASection";
import ConsultationForm from "@/components/ConsultationForm";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const [
    { data: services },
    { data: portfolios },
    { data: teams },
    { data: testimonials },
  ] = await Promise.all([
    supabase.from("services").select("*").order("created_at", { ascending: true }),
    supabase.from("portfolios").select("*, project_images(*)").eq("is_featured", true).limit(6),
    supabase.from("teams").select("*").order("sort_order", { ascending: true }),
    supabase.from("testimonials").select("*").eq("is_featured", true),
  ]);

  return (
    <>
      <HeroSection />
      <CompanyHighlights />
      <ServicesPreview services={services || []} />
      <PortfolioPreview portfolios={portfolios || []} />
      <TeamSection team={teams || []} />
      <TestimonialSection testimonials={testimonials || []} />
      <PartnerSection />
      <CTASection />
      <ConsultationForm />
    </>
  );
}
