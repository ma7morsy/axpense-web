import { ChevronDown } from 'lucide-react';
import { Section, SectionHead } from '../Section';

const FAQS = [
  { q: 'Who is Axpense built for?', a: 'Businesses in Egypt and MENA that manage vehicles, equipment, or other physical assets — logistics, construction, manufacturing, real estate, and more.' },
  { q: 'How do I get started?', a: 'Book a demo. The Axpense team will walk you through the product and set up your account.' },
  { q: 'Does Axpense work in Arabic?', a: 'The Axpense website includes Arabic pages, and the product can be discussed with the team for your language and workflow requirements.' },
  { q: 'How are maintenance reminders triggered?', a: 'Service intervals can be set by kilometres driven or by date, so each vehicle is reminded based on how it is actually used.' },
];

export function FAQSection() {
  return (
    <Section>
      <SectionHead eyebrow="FAQ" title="Common questions" center />
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        {FAQS.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
      </div>
    </Section>
  );
}

export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="card-app group p-5 open:border-primary/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
        {q}
        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary" aria-hidden="true" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
    </details>
  );
}
