import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs } from '@/lib/blog';

const FEATURE_SLUGS = ['fleet-management','fleet-maintenance','vehicle-management','asset-management','expense-management','fuel-management','inspection-management','work-orders','preventive-maintenance','reports-analytics'];
const INDUSTRY_SLUGS = ['logistics','transportation','construction','manufacturing','real-estate','healthcare','travel-hospitality','energy-utilities'];
const SOLUTION_SLUGS = ['fleet-cost-management','fleet-maintenance-management','asset-lifecycle-management','equipment-cost-management'];
const MARKETS = ['eg','sa','ae','qa','jo','iq','mena'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...FEATURE_SLUGS.map((slug) => ({ url: `${SITE_URL}/features/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE_URL}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...INDUSTRY_SLUGS.map((slug) => ({ url: `${SITE_URL}/industries/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...SOLUTION_SLUGS.map((slug) => ({ url: `${SITE_URL}/solutions/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...getAllSlugs().map((slug) => ({ url: `${SITE_URL}/blog/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 })),
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/resources/fleet-cost-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    // /landing/* campaign pages are noindex and intentionally not listed.
    { url: `${SITE_URL}/ar`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/ar/fleet-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/ar/fleet-maintenance`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/ar/asset-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['vehicle-management','fuel-management','work-orders','preventive-maintenance'].map((slug) => ({ url: `${SITE_URL}/ar/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE_URL}/ar/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/ar/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/ar/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ];

  for (const code of MARKETS) {
    pages.push({ url: `${SITE_URL}/en-${code}`, lastModified: now, changeFrequency: 'monthly', priority: code === 'eg' ? 0.9 : 0.75 });
    pages.push({ url: `${SITE_URL}/ar-${code}`, lastModified: now, changeFrequency: 'monthly', priority: code === 'eg' ? 0.9 : 0.75 });
  }

  return pages;
}
