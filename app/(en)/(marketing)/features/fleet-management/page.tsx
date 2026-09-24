import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Fleet Management Software for Egyptian Businesses',
  metaTitle: 'Fleet Management Software in Egypt',
  description:
    'Track every vehicle, driver, and document in one platform. Fleet management software built for logistics, transportation, and delivery operations in Egypt.',
  intro:
    'Register, track, and manage every vehicle in your fleet — with driver assignments, documents, and status all in one place instead of spread across spreadsheets and WhatsApp.',
  capabilities: [
    { title: 'Vehicle registry', desc: 'Keep make, model, plate number, registration, and ownership details for every vehicle in one record.' },
    { title: 'Driver assignment', desc: 'Assign drivers to vehicles, track licenses, and see who is responsible for what.' },
    { title: 'Document tracking', desc: 'Store licenses, insurance, and registration papers with renewal reminders before they expire.' },
    { title: 'Vehicle status', desc: 'See at a glance which vehicles are active, in maintenance, or out of service.' },
    { title: 'Utilization view', desc: 'Understand which vehicles are earning their keep and which are sitting idle.' },
    { title: 'Centralized records', desc: 'Replace scattered spreadsheets and paper files with one searchable system.' },
  ],
  relatedFeatures: [
    { label: 'Maintenance Management', href: '/features/fleet-maintenance' },
    { label: 'Expense Management', href: '/features/expense-management' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/fleet-management',
  arPath: '/ar/fleet-management',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Fleet Management',
              description: data.description,
              path: '/features/fleet-management',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
