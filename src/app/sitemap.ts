import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/lib/seo';

const publicRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/tournaments', changeFrequency: 'daily', priority: 0.9 },
  { path: '/login', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/register', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/forgot-password', changeFrequency: 'monthly', priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
