import { MetadataRoute } from 'next';
import { universityNames } from '@/constants';
import { getLectureListStatic } from '@/lib/lecture';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://all-class.vercel.app';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  const universityPages = universityNames.map((universityName) => ({
    url: `${baseUrl}/${encodeURIComponent(universityName)}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const lecturePages: MetadataRoute.Sitemap = [];

  for (const universityName of universityNames) {
    try {
      const lectures = await getLectureListStatic(universityName);
      if (lectures.success && lectures.lectures) {
        const pages = lectures.lectures.map((lecture) => ({
          url: `${baseUrl}/${encodeURIComponent(universityName)}/${lecture.lectureId}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }));
        lecturePages.push(...pages);
      }
    } catch (error) {
      console.error(`Error generating sitemap for ${universityName}:`, error);
    }
  }

  return [...staticPages, ...universityPages, ...lecturePages];
}
