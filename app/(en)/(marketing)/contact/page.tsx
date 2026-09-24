import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadForm } from '@/components/LeadForm';
import { Section, SectionHead } from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Sales',
  description: 'Talk to the Axpense team about fleet, asset, and maintenance management for your business.',
  path: '/contact',
  arPath: '/ar/contact',
});

export default function Page() {
  return (
    <Section>
      <SectionHead eyebrow="Contact" title="Talk to the team" description="Tell us a bit about your fleet or assets and we’ll get back to you." center />
      <div className="card-app mx-auto max-w-2xl p-6 shadow-card sm:p-8">
        <LeadForm />
      </div>
    </Section>
  );
}
