import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section, SectionHead } from '@/components/Section';
import { IconCard } from '@/components/ui/IconCard';
import { iconFor } from '@/lib/icons';

export const metadata: Metadata = buildMetadata({
  title: 'Resources',
  description: 'Guides and tools for fleet and asset management, including a fleet management guide and a maintenance checklist.',
  path: '/resources',
});

const RESOURCES = [
  {
    title: 'Fleet Management Guide',
    desc: 'What fleet management covers and why businesses outgrow spreadsheets for it.',
    href: '/blog/what-is-fleet-management',
  },
  {
    title: 'Maintenance Checklist',
    desc: 'Preventive vs. reactive maintenance — and which one your fleet actually needs.',
    href: '/blog/preventive-vs-reactive-maintenance',
  },
];

export default function Page() {
  return (
    <Section>
      <SectionHead eyebrow="Resources" title="Guides and tools" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <IconCard key={r.href} {...iconFor(r.href)} title={r.title} desc={r.desc} href={r.href} />
        ))}
        <IconCard {...iconFor('/resources/fleet-cost-calculator')} title="Fleet Cost Calculator" desc="Estimate your monthly fleet cost across fuel, maintenance, and insurance." href="/resources/fleet-cost-calculator" meta="Open tool" />
      </div>
    </Section>
  );
}
