import type { Metadata } from 'next';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';

const data: FeaturePageData = {
  title: 'Fuel Management Software for Fleet Operations',
  metaTitle: 'Fuel Management Software in Egypt',
  description: 'Track fuel purchases, fuel costs and vehicle fuel activity in one system to understand fleet operating costs.',
  intro: 'Record fuel activity against the vehicle it belongs to and connect fuel spend with the wider cost picture of your fleet.',
  capabilities: [
    { title: 'Fuel transaction records', desc: 'Capture fuel purchases with the vehicle, date, quantity and cost information your team needs.' },
    { title: 'Vehicle-level fuel costs', desc: 'See fuel spending in the context of each vehicle instead of one unstructured total.' },
    { title: 'Fuel history', desc: 'Keep a searchable history of fuel activity for operational review and reporting.' },
    { title: 'Cost reporting', desc: 'Combine fuel data with maintenance and other expenses for a clearer fleet cost view.' },
    { title: 'Operational visibility', desc: 'Give managers a consistent record of fuel activity across the fleet.' },
    { title: 'Connected records', desc: 'Link fuel information to vehicle records and reports instead of separate spreadsheets.' },
  ],
  outcomes: ['A clearer picture of fuel operating costs', 'Less manual reconciliation of fuel records', 'Vehicle-level cost visibility for fleet reviews', 'Better inputs for fleet cost reports'],
  relatedFeatures: [
    { label: 'Vehicle Management', href: '/features/vehicle-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
    { label: 'Fleet Cost Management', href: '/solutions/fleet-cost-management' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/features/fuel-management', arPath: '/ar/fuel-management' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: 'Axpense Fuel Management', description: data.description, path: '/features/fuel-management' })} /><FeaturePage data={data} /></>;
}
