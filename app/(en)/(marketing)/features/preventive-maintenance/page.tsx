import type { Metadata } from 'next';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';

const data: FeaturePageData = {
  title: 'Preventive Maintenance Software for Fleets',
  metaTitle: 'Preventive Maintenance Software in Egypt',
  description: 'Plan and track scheduled vehicle maintenance by time or usage so service work stays visible before it becomes an unexpected interruption.',
  intro: 'Move preventive maintenance from reminders and spreadsheets into scheduled work that your operations team can see and act on.',
  capabilities: [
    { title: 'Maintenance schedules', desc: 'Define recurring maintenance activities for vehicles and assets based on the schedule your operation uses.' },
    { title: 'Due maintenance visibility', desc: 'See upcoming maintenance work and keep overdue items visible to the responsible team.' },
    { title: 'Service history', desc: 'Keep completed preventive work connected to the vehicle or asset record.' },
    { title: 'Work order connection', desc: 'Turn scheduled maintenance into work orders that can be assigned and tracked through completion.' },
    { title: 'Maintenance planning', desc: 'Give operations and maintenance teams one view of planned work instead of separate reminders.' },
    { title: 'Cost context', desc: 'Connect preventive work with maintenance expenses to understand the cost of keeping assets operational.' },
  ],
  outcomes: ['Fewer missed scheduled maintenance tasks', 'Clearer upcoming maintenance workload', 'A consistent maintenance history', 'Better visibility into planned maintenance costs'],
  relatedFeatures: [
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Work Orders', href: '/features/work-orders' },
    { label: 'Inspections', href: '/features/inspection-management' },
    { label: 'Vehicle Management', href: '/features/vehicle-management' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/features/preventive-maintenance', arPath: '/ar/preventive-maintenance' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: 'Axpense Preventive Maintenance', description: data.description, path: '/features/preventive-maintenance' })} /><FeaturePage data={data} /></>;
}
