import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Hero } from '@/components/home/Hero';
import { ProblemSection } from '@/components/home/ProblemSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { HowItWorks } from '@/components/home/HowItWorks';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { PricingPreview } from '@/components/home/PricingPreview';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { ModulesSection } from '@/components/home/ModulesSection';
import { WhyAxpense } from '@/components/home/WhyAxpense';

export const metadata: Metadata = buildMetadata({
  title: 'Fleet & Asset Management Software for Growing Businesses',
  description:
    'Manage vehicles, equipment, maintenance, fuel, expenses and inspections in one platform. Built for businesses across Egypt and MENA.',
  path: '/',
  arPath: '/ar',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={FAQJsonLd({ items: [
        { q: 'Who is Axpense built for?', a: 'Axpense is built for businesses that manage vehicles, fleets, equipment or other physical assets, including logistics, transportation, construction, manufacturing, real estate, healthcare and other operations.' },
        { q: 'What can Axpense manage?', a: 'Axpense brings vehicles, drivers, maintenance, work orders, inspections, fuel, expenses, assets, budgets and operational reporting into one platform.' },
        { q: 'Can I start with a demo?', a: 'Yes. You can use the demo or contact pages to request a conversation about your fleet and asset management needs.' },
        { q: 'How are maintenance reminders triggered?', a: 'Service intervals can be set by kilometres driven or by date, so each vehicle is reminded based on how it is actually used.' },
      ] })} />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <ModulesSection />
      <BenefitsSection />
      <HowItWorks />
      <IndustriesSection />
      <UseCasesSection />
      <WhyAxpense />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
