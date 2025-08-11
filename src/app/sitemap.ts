import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

const staticPaths = ['', '/about', '/services', '/solutions', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultLocale = routing.defaultLocale;
  const locales = routing.locales;

  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    const localizedUrls: Record<string, string> = {};

    for (const locale of locales) {
      const prefix = locale === defaultLocale ? '' : `/${locale}`;
      localizedUrls[locale] = `${baseUrl}${prefix}${path}`;
    }

    const canonicalUrl = localizedUrls[defaultLocale];

    entries.push({
      url: canonicalUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: {
          ...localizedUrls,
          'x-default': canonicalUrl
        }
      }
    });
  }

  return entries;
}


