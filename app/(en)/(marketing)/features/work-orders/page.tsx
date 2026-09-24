import type { Metadata } from 'next';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';

const data: FeaturePageData = {
  title: 'Work Order Management for Vehicle Maintenance',
  metaTitle: 'Work Order Management Software for Fleets',
  description: 'Create, track and close vehicle maintenance work orders while keeping labor, parts, costs and status connected to the asset.',
  intro: 'Turn maintenance requests into trackable work orders with clear status, assigned work and cost history.',
  capabilities: [
    { title: 'Create work orders', desc: 'Open a work order for planned or corrective maintenance and connect it to the relevant vehicle or asset.' },
    { title: 'Track status', desc: 'Follow work from open to in progress and completion so the team knows what is pending.' },
    { title: 'Record parts and costs', desc: 'Keep maintenance cost details with the work order rather than scattered receipts.' },
    { title: 'Assign maintenance work', desc: 'Make ownership of maintenance tasks clear to the people responsible for completing them.' },
    { title: 'Maintenance history', desc: 'Build a service history that can be reviewed by vehicle or asset.' },
    { title: 'Connected reporting', desc: 'Use completed work orders as an input for maintenance and fleet cost reporting.' },
  ],
  outcomes: ['Clearer maintenance workload and status', 'Better traceability for repair activity', 'Maintenance costs tied to the asset', 'A usable service history for operational decisions'],
  relatedFeatures: [
    { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Inspections', href: '/features/inspection-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/features/work-orders', arPath: '/ar/work-orders' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: 'Axpense Work Order Management', description: data.description, path: '/features/work-orders' })} /><FeaturePage data={data} /></>;
}
