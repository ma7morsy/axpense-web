import { Gauge, LineChart, ShieldCheck, TrendingDown } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';

const BENEFITS = [
  { icon: TrendingDown, tone: 'teal' as const, title: 'Control operating costs', desc: 'Bring fuel, maintenance and other operating expenses into the same view as the vehicle or asset they belong to.' },
  { icon: ShieldCheck, tone: 'green' as const, title: 'Reduce avoidable downtime', desc: 'Service reminders triggered by kilometres driven, plus inspections and work orders, keep planned work ahead of breakdowns.' },
  { icon: Gauge, tone: 'amber' as const, title: 'Improve asset utilization', desc: 'See vehicle and asset status, assignments and operational records without chasing separate files.' },
  { icon: LineChart, tone: 'navy' as const, title: 'Make faster operational decisions', desc: 'Use reports and cost trends to understand what is happening across your fleet and assets.' },
];

export function BenefitsSection() {
  return (
    <Section alt>
      <SectionHead eyebrow="Business Benefits" title="Turn operational data into control" description="Axpense connects the records your operations team already needs to maintain with the costs and actions behind them." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BENEFITS.map((b) => <IconCard key={b.title} {...b} />)}
      </div>
    </Section>
  );
}
