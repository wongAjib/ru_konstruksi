import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ru-konstruksi.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/management/', '/api/', '/_next/', '/management/*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
