import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage, type SolutionPageData } from '@/components/SolutionPage';

const data: SolutionPageData = {
  title: 'Fleet Cost Management',
  metaTitle: 'Fleet Cost Management Software',
  description: 'Get a clear, per-vehicle picture of fuel, repair, and operating costs instead of reconstructing spend at month-end.',
  intro: 'Combines expense tracking, fuel logging, and reporting so you know exactly what each vehicle costs to run — not just the fleet total.',
  outcomes: [
    'Cost per vehicle instead of one fleet-wide number',
    'Fuel spend trends visible before they become a budget problem',
    'Repair costs tied to the vehicle and work order that caused them',
    'Monthly cost reports ready without manual spreadsheet work',
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/fleet-cost-management' });

export default function Page() {
  return <SolutionPage data={data} />;
}
