import { ProductScreenshot } from '../ProductScreenshot';
import { Section, SectionHead } from '../Section';

export function ProductVisualSection() {
  return (
    <Section>
      <SectionHead eyebrow="The Product" title="See the Axpense dashboard your operations team works from" description="A single operational view for fleet costs, maintenance, fuel, expenses, notifications and vehicle status." center />
      <ProductScreenshot />
    </Section>
  );
}
