import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadForm } from '@/components/LeadForm';
import { Section, SectionHead } from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Demo',
  description: 'Book a short Axpense demo with the team.',
  path: '/demo',
});

export default function Page() {
  return (
    <Section>
      <SectionHead eyebrow="Get Started" title="Book a demo" description="Tell us about your vehicles and assets. The Axpense team will set up your access or walk you through the product." center />
      <div className="card-app mx-auto max-w-2xl p-6 shadow-card sm:p-8">
        <LeadForm />
      </div>
    </Section>
  );
}
