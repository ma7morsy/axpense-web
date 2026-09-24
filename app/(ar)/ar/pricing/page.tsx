import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingPlans } from '@/components/PricingPlans';

export const metadata: Metadata = buildMetadata({
  title: 'الأسعار',
  description: 'خطط أكسبنس تبدأ من 2,000 ج.م شهريًا (40$ · 150 ر.س). ابدأ بتجربة مجانية لمدة 14 يومًا بدون بطاقة ائتمان.',
  path: '/ar/pricing',
  enPath: '/pricing',
});

export default function Page() {
  return (
    <div className="bg-gradient-hero">
      <PricingPlans lang="ar" headingLevel="h1" />
    </div>
  );
}
