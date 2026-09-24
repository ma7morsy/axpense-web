import type { Metadata } from 'next';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';

const data: FeaturePageData = {
  title: 'Vehicle Management Software for Growing Fleets',
  metaTitle: 'Vehicle Management Software in Egypt',
  description: 'Manage vehicle records, drivers, documents, assignments, status and operating history in one vehicle management system.',
  intro: 'Keep every vehicle record current and connected to the driver, maintenance, inspections and expenses that belong to it.',
  capabilities: [
    { title: 'Complete vehicle records', desc: 'Store identification, ownership, model, registration and operational information in one searchable record.' },
    { title: 'Driver assignments', desc: 'Connect drivers to vehicles and keep responsibility visible for the current assignment.' },
    { title: 'Document tracking', desc: 'Keep registration, license and insurance information organized with renewal dates.' },
    { title: 'Vehicle status', desc: 'Know which vehicles are active, available, under maintenance or otherwise unavailable.' },
    { title: 'History in context', desc: 'Connect maintenance, inspections, fuel and expenses to the vehicle record instead of separate files.' },
    { title: 'Searchable fleet data', desc: 'Give operations teams a single place to find the vehicle information they need.' },
  ],
  outcomes: ['Less time spent reconciling vehicle records', 'Clearer responsibility for vehicle assignments', 'A single operational history for each vehicle', 'Better visibility into vehicle status and cost'],
  relatedFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Fuel Management', href: '/features/fuel-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/features/vehicle-management', arPath: '/ar/vehicle-management' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: 'Axpense Vehicle Management', description: data.description, path: '/features/vehicle-management' })} /><FeaturePage data={data} /></>;
}
