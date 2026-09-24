import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Vehicle Inspection Software',
  metaTitle: 'Vehicle Inspection & Compliance Software',
  description:
    'Digital inspection forms, safety checks, and compliance documentation in one place. Vehicle inspection software that replaces paper checklists.',
  intro:
    'Move inspections off paper. Drivers complete digital checklists, failed items get flagged automatically, and every inspection is on record for compliance.',
  capabilities: [
    { title: 'Digital checklists', desc: 'Build inspection forms once and reuse them across every vehicle or asset type.' },
    { title: 'Failed item flags', desc: 'Anything that fails an inspection is flagged and can trigger a work order.' },
    { title: 'Photo evidence', desc: 'Attach photos to inspection items so issues are documented, not just described.' },
    { title: 'Compliance record', desc: 'Keep a full history of inspections for audits and regulatory requirements.' },
    { title: 'Scheduled inspections', desc: 'Set recurring inspection schedules so nothing gets skipped.' },
    { title: 'Driver accountability', desc: 'Know who completed which inspection and when.' },
  ],
  relatedFeatures: [
    { label: 'Maintenance Management', href: '/features/fleet-maintenance' },
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/inspection-management',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Inspections',
              description: data.description,
              path: '/features/inspection-management',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
