import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Fleet Maintenance Software',
  metaTitle: 'Fleet Maintenance Software in Egypt',
  description:
    'Schedule preventive maintenance, manage work orders, and track repair history. Fleet maintenance software that catches problems before they cause downtime.',
  intro:
    'Stop reacting to breakdowns. Plan preventive maintenance on a schedule, open work orders when something needs attention, and keep a full repair history per vehicle.',
  capabilities: [
    { title: 'Preventive schedules', desc: 'Set maintenance intervals by mileage or time, and get reminded before service is due.' },
    { title: 'Work orders', desc: 'Create, assign, and track work orders from request through completion.' },
    { title: 'Repair history', desc: 'See every service event for a vehicle in one timeline, not scattered receipts.' },
    { title: 'Downtime tracking', desc: 'Know how much time and money each vehicle loses to maintenance.' },
    { title: 'Parts & cost log', desc: 'Record parts used and labor cost per work order for accurate cost tracking.' },
    { title: 'Service reminders', desc: 'Automatic alerts before maintenance is overdue, not after something breaks.' },
  ],
  relatedFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Inspections', href: '/features/inspection-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/fleet-maintenance',
  arPath: '/ar/fleet-maintenance',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Maintenance Management',
              description: data.description,
              path: '/features/fleet-maintenance',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
