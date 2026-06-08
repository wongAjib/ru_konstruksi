import { createClient } from "@/utils/supabase/server";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("portfolios")
    .select("*, project_images(*)")
    .order("created_at", { ascending: false });

  return <GalleryClient initialProjects={projects || []} />;
}
