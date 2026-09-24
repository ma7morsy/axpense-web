import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage, type FeaturePageData } from '@/components/FeaturePage';

const data: FeaturePageData = {
  title: 'Fleet Expense Management Software',
  metaTitle: 'Fleet Expense Management Software',
  description:
    'Track fuel, repairs, and operating expenses by vehicle. Fleet cost tracking software that shows where your operating budget actually goes.',
  intro:
    'Every fuel receipt, repair bill, and operating cost logged against the vehicle or asset it belongs to — so month-end isn’t a scramble to reconstruct what happened.',
  capabilities: [
    { title: 'Fuel cost tracking', desc: 'Log fuel purchases per vehicle and watch consumption trends over time.' },
    { title: 'Expense categorization', desc: 'Sort spend into fuel, repairs, insurance, and other categories automatically.' },
    { title: 'Cost per vehicle', desc: 'See total operating cost per vehicle, not just a lump sum for the whole fleet.' },
    { title: 'Budget vs. actual', desc: 'Compare planned budgets against what’s actually being spent, by period.' },
    { title: 'Receipts & records', desc: 'Attach receipts and invoices directly to the expense they belong to.' },
    { title: 'Cost trend reports', desc: 'Spot rising costs early instead of discovering them at year-end.' },
  ],
  relatedFeatures: [
    { label: 'Fleet Management', href: '/features/fleet-management' },
    { label: 'Reports & Analytics', href: '/features/reports-analytics' },
    { label: 'Depreciation & Financials', href: '/features/asset-management' },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.description,
  path: '/features/expense-management',
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Expense Management',
              description: data.description,
              path: '/features/expense-management',
            })
          ),
        }}
      />
      <FeaturePage data={data} />
    </>
  );
}
