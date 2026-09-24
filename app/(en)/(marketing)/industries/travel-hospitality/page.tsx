import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Fleet Management for Travel & Hospitality',
  metaTitle: 'Fleet Management Software for Travel & Hospitality',
  description: 'Manage transport and guest-service vehicles, maintenance, and fuel costs. Built for travel and hospitality operators in Egypt.',
  intro: 'Guest transport vehicles need to be reliable every day. Axpense keeps maintenance ahead of schedule and costs visible.',
  challenges: [
    'Transport vehicle scheduling and driver assignment',
    'Preventive maintenance so vehicles don’t fail during guest transport',
    'Fuel and operating cost tracking across a mixed vehicle fleet',
    'Inspection records for passenger-carrying vehicles',
    'Utilization tracking to right-size the fleet for demand',
  ],
  relevantFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Expense Management', href: '/features/expense-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/travel-hospitality',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
