import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Fleet Management for Logistics & Transportation',
  metaTitle: 'Fleet Management Software for Logistics & Transportation',
  description: 'Optimize fleet operations, reduce fuel costs, and keep vehicles compliant. Built for logistics and transportation companies in Egypt.',
  intro: 'Delivery fleets live or die on uptime and cost control. Axpense keeps every vehicle, driver, and expense visible in one place.',
  challenges: [
    'Real-time visibility into which vehicles are active, idle, or in maintenance',
    'Driver assignment and license tracking across a large fleet',
    'Fuel cost tracking per vehicle and per route',
    'Preventive maintenance that keeps delivery vehicles from breaking down mid-route',
    'Compliance documentation for inspections and vehicle licensing',
  ],
  relevantFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Expense Management', href: '/features/expense-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/logistics',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
