import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section, SectionHead } from '@/components/Section';
import { IconCard } from '@/components/ui/IconCard';
import { iconFor } from '@/lib/icons';

const INDUSTRIES = [
  { title: 'Transportation', desc: 'Manage vehicles, drivers, maintenance and operating costs.', href: '/industries/transportation' },
  { title: 'Logistics & Transportation', desc: 'Optimize fleet operations and reduce fuel costs.', href: '/industries/logistics' },
  { title: 'Construction', desc: 'Track heavy equipment and tool inventory.', href: '/industries/construction' },
  { title: 'Manufacturing', desc: 'Monitor production equipment and reduce downtime.', href: '/industries/manufacturing' },
  { title: 'Real Estate', desc: 'Manage service vehicles and facility assets.', href: '/industries/real-estate' },
  { title: 'Healthcare', desc: 'Manage medical equipment and compliance.', href: '/industries/healthcare' },
  { title: 'Travel & Hospitality', desc: 'Manage guest transport and vehicle costs.', href: '/industries/travel-hospitality' },
  { title: 'Energy & Utilities', desc: 'Manage service vehicles, equipment and maintenance.', href: '/industries/energy-utilities' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Industries',
  description: 'How Axpense adapts to fleet, equipment, and maintenance needs across industries in Egypt.',
  path: '/industries',
});

export default function Page() {
  return (
    <Section>
      <SectionHead eyebrow="Industries" title="Built for how your industry operates" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <IconCard key={ind.href} {...iconFor(ind.href)} title={ind.title} desc={ind.desc} href={ind.href} />
        ))}
      </div>
    </Section>
  );
}
