import Link from 'next/link';
import { Button } from './Button';
import { ProductScreenshot } from './ProductScreenshot';
import { Section, SectionHead } from './Section';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckItem } from './ui/CheckItem';
import { CheckCircle2 } from 'lucide-react';

export type FeaturePageData = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  capabilities: { title: string; desc: string }[];
  outcomes?: string[];
  relatedFeatures: { label: string; href: string }[];
  screenshot?: boolean;
};

export function FeaturePage({ data, language = 'en' }: { data: FeaturePageData; language?: 'en' | 'ar' }) {
  const ar = language === 'ar';
  return (
    <>
      <Breadcrumbs items={[{ label: ar ? 'المميزات' : 'Features', href: ar ? '/ar' : '/features' }, { label: data.title }]} />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-app mb-4">{ar ? 'ميزة في أكسبنس' : 'Axpense Feature'}</p>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{data.title}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={ar ? PRIMARY_CTA_AR.href : PRIMARY_CTA.href}>{ar ? PRIMARY_CTA_AR.label : PRIMARY_CTA.label}</Button>
            </div>
          </div>
          <ProductScreenshot priority={data.screenshot !== false} />
        </div>
      </div>

      <Section>
        <SectionHead eyebrow={ar ? 'الإمكانيات' : 'Capabilities'} title={ar ? 'ماذا يمكنك أن تفعل' : 'What you can do'} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.capabilities.map((c) => (
            <div key={c.title} className="card-app p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /></span>
              <h2 className="mt-4 text-base font-semibold text-foreground">{c.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {data.outcomes?.length ? (
        <Section alt>
          <SectionHead eyebrow={ar ? 'النتائج التشغيلية' : 'Operational Outcomes'} title={ar ? 'لماذا تهم هذه الميزة فريقك' : 'Why this matters to your team'} />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.outcomes.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section>
        <SectionHead title={ar ? 'استكشف مميزات أكسبنس المرتبطة' : 'Explore related Axpense features'} />
        <div className="flex flex-wrap gap-3">
          {data.relatedFeatures.map((f) => (
            <Link key={f.href} href={f.href} className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-sidebar-accent hover:border-primary/40 hover:text-primary">{f.label}</Link>
          ))}
        </div>
      </Section>
    </>
  );
}
