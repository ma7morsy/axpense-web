import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section, SectionHead } from '@/components/Section';
import { IconCard } from '@/components/ui/IconCard';
import { iconFor } from '@/lib/icons';

const SOLUTIONS = [
  { title: 'Fleet Cost Management', desc: 'Get a clear, per-vehicle picture of fuel, repair, and operating costs.', href: '/solutions/fleet-cost-management' },
  { title: 'Fleet Maintenance Management', desc: 'Move from reactive repairs to scheduled preventive maintenance.', href: '/solutions/fleet-maintenance-management' },
  { title: 'Asset Lifecycle Management', desc: 'Track assets from acquisition through depreciation to disposal.', href: '/solutions/asset-lifecycle-management' },
  { title: 'Equipment Cost Management', desc: 'Understand true equipment cost across sites and projects.', href: '/solutions/equipment-cost-management' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Solutions',
  description: 'Axpense solutions for fleet cost management, maintenance, asset lifecycle, and equipment cost management.',
  path: '/solutions',
});

export default function Page() {
  return (
    <Section>
      <SectionHead eyebrow="Solutions" title="Solve a specific operational problem" description="Each solution combines the Axpense features you need to fix one part of your operation." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SOLUTIONS.map((s) => (
          <IconCard key={s.href} {...iconFor(s.href)} title={s.title} desc={s.desc} href={s.href} />
        ))}
      </div>
    </Section>
  );
}
