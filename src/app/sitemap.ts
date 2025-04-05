import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eken-consulting.com/sv',
      lastModified: '2025-03-30',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://eken-consulting.com/en',
      lastModified: '2025-03-30',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
