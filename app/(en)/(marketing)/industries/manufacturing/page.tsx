import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Equipment Management for Manufacturing',
  metaTitle: 'Production Equipment Management Software',
  description: 'Monitor production equipment, reduce downtime, and optimize maintenance. Built for manufacturers in Egypt.',
  intro: 'Unplanned downtime on a production line is expensive. Axpense keeps maintenance ahead of failure instead of reacting to it.',
  challenges: [
    'Predictive maintenance scheduling instead of run-to-failure',
    'Tracking which production line equipment is due for service',
    'Spare parts inventory tied to specific machines',
    'Downtime logs that show which equipment costs the most in lost production',
    'Compliance and inspection records for safety-critical machinery',
  ],
  relevantFeatures: [
    { label: 'Asset Management', href: '/features/asset-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/manufacturing',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
