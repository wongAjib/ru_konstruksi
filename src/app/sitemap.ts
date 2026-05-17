import { MetadataRoute } from 'next'
import { createClient } from '@/utils/supabase/server'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Fetch all services to generate dynamic routes
  const supabase = await createClient()
  const { data: services } = await supabase.from('services').select('slug, updated_at')
  
  const serviceUrls = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updated_at ? new Date(service.updated_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...serviceUrls,
  ]
}
