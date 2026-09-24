import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Medical Equipment & Fleet Management for Healthcare',
  metaTitle: 'Medical Equipment Management Software',
  description: 'Manage medical equipment, ensure compliance, and track device maintenance and service schedules. Built for healthcare providers in Egypt.',
  intro: 'Medical equipment and transport vehicles both need airtight maintenance and compliance records. Axpense tracks both in one system.',
  challenges: [
    'Medical device tracking with full service history',
    'Compliance documentation ready for audits and inspections',
    'Scheduled servicing that doesn’t get missed',
    'Ambulance or transport vehicle maintenance and fuel tracking',
    'Cost tracking for equipment across departments or facilities',
  ],
  relevantFeatures: [
    { label: 'Asset Management', href: '/features/asset-management' },
    { label: 'Inspections', href: '/features/inspection-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/healthcare',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
