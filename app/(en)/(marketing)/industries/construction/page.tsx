import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage, type IndustryPageData } from '@/components/IndustryPage';

const data: IndustryPageData = {
  title: 'Equipment Management for Construction',
  metaTitle: 'Equipment Management Software for Construction',
  description: 'Track heavy equipment, manage tool inventory, and schedule maintenance. Built for construction companies in Egypt.',
  intro: 'Heavy equipment sitting idle on the wrong site costs money. Axpense tracks where every machine and tool is, and what it needs next.',
  challenges: [
    'Knowing which equipment is on which project site right now',
    'Tool inventory that doesn’t walk off unnoticed between sites',
    'Maintenance scheduling for equipment that can’t afford downtime mid-project',
    'Safety compliance and inspection records for heavy machinery',
    'Project-based cost tracking for equipment usage',
  ],
  relevantFeatures: [
    { label: 'Asset Management', href: '/features/asset-management' },
    { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    { label: 'Inspections', href: '/features/inspection-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/industries/construction',
});

export default function Page() {
  return <IndustryPage data={data} />;
}
