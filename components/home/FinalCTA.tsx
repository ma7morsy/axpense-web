import { Button } from '../Button';
import { Section } from '../Section';
import { PRIMARY_CTA } from '@/lib/cta';
import { TrustLine } from './TrustLine';

export function FinalCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-xl bg-gradient-primary px-6 py-14 text-center shadow-glow sm:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <h2 className="relative mx-auto max-w-lg text-2xl font-bold text-white sm:text-3xl text-balance">Bring your fleet and assets into one system</h2>
        <p className="relative mx-auto mt-3 max-w-md text-base leading-relaxed text-white/85">Book a short demo and see how Axpense fits your fleet and assets.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href={PRIMARY_CTA.href} variant="white" size="lg">{PRIMARY_CTA.label}</Button>
        </div>
        <TrustLine tone="onDark" className="relative mt-6" />
      </div>
    </Section>
  );
}
