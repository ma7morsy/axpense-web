import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';
import { buildMetadata } from '@/lib/seo';

const data: IndustryPageData = {
  title: 'Fleet Management Software for Transportation Companies',
  metaTitle: 'Fleet Management Software for Transportation Companies in Egypt',
  description: 'Manage vehicles, drivers, maintenance, fuel and operating expenses for transportation fleets from one system.',
  intro: 'Transportation operations need a reliable record of vehicle status, driver assignments, maintenance and running costs. Axpense connects those records in one platform.',
  challenges: [
    'Vehicle and driver records that stay connected to daily assignments',
    'Maintenance planning for vehicles that need to stay available for operations',
    'Fuel and operating expense tracking by vehicle',
    'Inspection records and maintenance issues in one place',
    'Operational reports that reduce manual spreadsheet consolidation',
  ],
  relevantFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Vehicle Management', href: '/features/vehicle-management' },
    { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
    { label: 'Fuel Management', href: '/features/fuel-management' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/transportation' });
export default function Page() { return <IndustryPage data={data} />; }
