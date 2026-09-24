import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { FleetCostCalculator } from '@/components/FleetCostCalculator';
import { Section, SectionHead } from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'Fleet Cost Calculator',
  description: 'Estimate your monthly fleet operating cost across fuel, maintenance, insurance, and other expenses.',
  path: '/resources/fleet-cost-calculator',
});

export default function Page() {
  return (
    <Section>
      <SectionHead
        eyebrow="Resources"
        title="Fleet Cost Calculator"
        description="Enter your fleet size and per-vehicle costs to estimate total monthly spend."
      />
      <FleetCostCalculator />
    </Section>
  );
}
