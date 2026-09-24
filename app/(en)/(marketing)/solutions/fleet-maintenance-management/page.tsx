import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage, type SolutionPageData } from '@/components/SolutionPage';

const data: SolutionPageData = {
  title: 'Fleet Maintenance Management',
  metaTitle: 'Fleet Maintenance Management Solution',
  description: 'Move from reactive repairs to scheduled preventive maintenance, with work orders and repair history in one system.',
  intro: 'Combines preventive scheduling, work orders, and inspections so vehicles get serviced before they break down, not after.',
  outcomes: [
    'Preventive maintenance scheduled by mileage or time',
    'Work orders tracked from request to completion',
    'Inspection failures automatically flagged for service',
    'Full repair history per vehicle in one place',
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/fleet-maintenance-management' });

export default function Page() {
  return <SolutionPage data={data} />;
}
