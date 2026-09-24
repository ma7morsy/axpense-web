import type { Metadata } from 'next';
import { Eye, Globe, Shield, Target, Users, Zap } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Button } from '@/components/Button';
import { AppFeatureCard, CenteredHead, PageHero } from '@/components/ui/AppSections';
import { PRIMARY_CTA } from '@/lib/cta';

export const metadata: Metadata = buildMetadata({
  title: 'About Axpense',
  description: 'Axpense builds fleet, asset, and maintenance management software for growing businesses in Egypt and MENA.',
  path: '/about',
});

const VALUES = [
  { icon: Target, title: 'Mission-Driven', desc: "We're building the tools that help businesses eliminate waste, extend asset life, and operate smarter." },
  { icon: Eye, title: 'Transparency', desc: 'Clear pricing, open communication, and honest product roadmaps. No surprises.' },
  { icon: Zap, title: 'Innovation', desc: 'We leverage AI and modern technology to solve real-world asset management challenges.' },
  { icon: Shield, title: 'Reliability', desc: "Enterprise-grade security and 99.9% uptime because your operations can't afford downtime." },
  { icon: Users, title: 'Customer-First', desc: 'Every feature we build starts with a real customer need. Your feedback shapes our product.' },
  { icon: Globe, title: 'Regional Focus', desc: 'Built for the MENA region with multi-currency, bilingual support, and local compliance.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Built for teams that"
        accent="run on assets"
        subtitle="Axpense builds fleet, asset, and maintenance management software for growing businesses in Egypt and MENA, so teams can manage vehicles and equipment from one platform instead of spreadsheets and scattered messages."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-wrap items-center gap-10 px-5 sm:px-7 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">Why we built <span className="text-gradient">Axpense</span></h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fleet and asset teams in the region were managing real operations with tools built for something else — spreadsheets, WhatsApp threads, and paper forms. Axpense replaces that with one system built specifically for fleet, maintenance, spare parts, and asset management.
            </p>
            <div className="mt-8"><Button href={PRIMARY_CTA.href} size="lg">{PRIMARY_CTA.label}</Button></div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <p className="text-sm font-medium text-primary">Headquarters</p>
            <p className="mt-1 text-xl font-semibold text-foreground">New Cairo, Egypt</p>
            <p className="mt-6 text-sm font-medium text-primary">Contact</p>
            <p className="mt-1 text-foreground">info@axpense.net</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead title="What We" accent="Stand For" subtitle="Our values guide every decision we make, from product development to customer support." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => <AppFeatureCard key={v.title} {...v} solid />)}
          </div>
        </div>
      </section>
    </>
  );
}
