import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Asset & Fleet Management for Real Estate',
  metaTitle: 'Fleet & Facility Asset Management for Real Estate',
  description: 'Manage delivery and service vehicles, facility equipment, and distribution assets. Built for real estate and property companies in Egypt.',
  intro: 'Property companies run vehicles and equipment across sites, not just buildings. Axpense keeps that side of the operation organized too.',
  challenges: [
    'Service and maintenance vehicles shared across multiple properties',
    'Facility equipment tracked by site rather than lost in a spreadsheet',
    'Maintenance scheduling for shared equipment across properties',
    'Cost tracking per site or per property',
    'Inspection records for equipment used across managed properties',
  ],
  relevantFeatures: [
    { label: 'Asset Management', href: '/features/asset-management' },
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/real-estate',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
