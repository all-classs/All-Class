import { MetadataRoute } from 'next';
import { universityNames } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://allclass.vercel.app';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  const universityPages: MetadataRoute.Sitemap = universityNames.map((universityName) => ({
    url: `${baseUrl}/${encodeURIComponent(universityName)}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticPages, ...universityPages];
}
