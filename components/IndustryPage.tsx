import Link from 'next/link';
import { Button } from './Button';
import { ProductScreenshot } from './ProductScreenshot';
import { Section, SectionHead } from './Section';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckItem } from './ui/CheckItem';

export type IndustryPageData = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  challenges: string[];
  relevantFeatures: { label: string; href: string }[];
};

export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Industries', href: '/industries' }, { label: data.title }]} />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-app mb-4">Industry Solution</p>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{data.title}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
            </div>
          </div>
          <ProductScreenshot />
        </div>
      </div>
      <Section>
        <SectionHead title="What Axpense helps your team manage" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.challenges.map((c) => (
            <CheckItem key={c}>{c}</CheckItem>
          ))}
        </ul>
      </Section>
      <Section alt>
        <SectionHead title="Relevant features" />
        <div className="flex flex-wrap gap-3">
          {data.relevantFeatures.map((f) => (
            <Link key={f.href} href={f.href} className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-sidebar-accent hover:border-primary/40 hover:text-primary">{f.label}</Link>
          ))}
        </div>
      </Section>
    </>
  );
}
