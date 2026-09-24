import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Asset Management Software',
  metaTitle: 'Asset Management Software in Egypt',
  description:
    'Manage vehicles, equipment, and tools across their full lifecycle. Asset management software with automated depreciation and real-time book values.',
  intro:
    'Beyond vehicles — track equipment, tools, and other physical assets from acquisition to disposal, with depreciation calculated automatically.',
  capabilities: [
    { title: 'Asset lifecycle', desc: 'Track each asset from purchase through assignment, service, and eventual disposal.' },
    { title: 'Automated depreciation', desc: 'Book values update automatically as assets age, instead of a manual spreadsheet.' },
    { title: 'Assignment tracking', desc: 'Know which team, site, or person currently holds each piece of equipment.' },
    { title: 'Financial reporting', desc: 'Export asset values and depreciation schedules for accounting.' },
    { title: 'Custom asset types', desc: 'Track equipment and tools alongside vehicles, not in a separate system.' },
    { title: 'Disposal records', desc: 'Log retirement, sale, or write-off with the reason and date on record.' },
  ],
  relatedFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/asset-management',
  arPath: '/ar/asset-management',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Asset Management',
              description: data.description,
              path: '/features/asset-management',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
