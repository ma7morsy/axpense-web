import { Button } from './Button';
import { Section, SectionHead } from './Section';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckItem } from './ui/CheckItem';

export type SolutionPageData = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  outcomes: string[];
};

export function SolutionPage({ data }: { data: SolutionPageData }) {
  return (
    <>
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <p className="badge-app mb-4">Solutions</p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900">{data.title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Button>
          </div>
        </div>
      </div>
      <Section>
        <SectionHead title="What changes for your team" />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {data.outcomes.map((o) => (
            <CheckItem key={o}>{o}</CheckItem>
          ))}
        </ul>
      </Section>
    </>
  );
}
