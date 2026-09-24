import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage, type SolutionPageData } from '@/components/SolutionPage';

const data: SolutionPageData = {
  title: 'Equipment Cost Management',
  metaTitle: 'Equipment Cost Management Software',
  description: 'Understand true equipment cost across sites and projects, combining maintenance, expenses, and utilization in one view.',
  intro: 'Combines asset tracking, maintenance cost logs, and utilization reporting so you know what each piece of equipment actually costs to keep running.',
  outcomes: [
    'Equipment cost broken out by site or project',
    'Maintenance spend tied to the specific machine that needed it',
    'Utilization data showing idle equipment worth reallocating',
    'One view instead of separate spreadsheets per site',
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/equipment-cost-management' });

export default function Page() {
  return <SolutionPage data={data} />;
}
