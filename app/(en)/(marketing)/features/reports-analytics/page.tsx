import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Fleet & Asset Reports and Analytics',
  metaTitle: 'Fleet Reports & Analytics Software',
  description:
    'Turn fleet and asset data into decisions. Reports on utilization, maintenance, and cost trends without building a spreadsheet by hand.',
  intro:
    'Every vehicle, maintenance event, and expense you log feeds into reports you can actually use — no exporting to Excel to make sense of it.',
  capabilities: [
    { title: 'Utilization reports', desc: 'See which vehicles and assets are working hard and which are sitting idle.' },
    { title: 'Cost trend analysis', desc: 'Track operating costs over time and catch increases before they compound.' },
    { title: 'Maintenance summaries', desc: 'Understand which vehicles are costing the most in downtime and repairs.' },
    { title: 'Custom report builder', desc: 'Build the specific view your team needs instead of relying on fixed dashboards.' },
    { title: 'Exportable data', desc: 'Pull reports out for finance, ownership, or compliance reviews.' },
    { title: 'Scheduled delivery', desc: 'Get recurring reports sent automatically instead of pulling them manually.' },
  ],
  relatedFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
    { label: 'Asset Management', href: '/features/asset-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/reports-analytics',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Reports & Analytics',
              description: data.description,
              path: '/features/reports-analytics',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
