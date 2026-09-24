import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';
import { buildMetadata } from '@/lib/seo';

const data: IndustryPageData = {
  title: 'Fleet & Equipment Management for Energy & Utilities',
  metaTitle: 'Fleet & Equipment Management Software for Energy & Utilities',
  description: 'Manage service vehicles, equipment, maintenance, inspections and operating expenses for energy and utilities operations.',
  intro: 'Field operations depend on vehicles and equipment being available, maintained and traceable. Axpense centralizes the records and costs behind those assets.',
  challenges: [
    'Tracking service vehicles and operational equipment across teams',
    'Scheduling preventive maintenance for assets used in field operations',
    'Recording inspections and maintenance issues with the asset history',
    'Connecting fuel, repair and operating expenses to the relevant asset',
    'Reporting on maintenance activity and operating costs across assets',
  ],
  relevantFeatures: [
    { label: 'Asset Management', href: '/features/asset-management' },
    { label: 'Vehicle Management', href: '/features/vehicle-management' },
    { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
    { label: 'Work Orders', href: '/features/work-orders' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/energy-utilities' });
export default function Page() { return <IndustryPage data={data} />; }
