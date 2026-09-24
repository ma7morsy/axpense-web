import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormAr } from '@/components/ar/LeadFormAr';
import { Section } from '@/components/Section';

export const metadata: Metadata = buildMetadata({
  title: 'اتصل بنا',
  description: 'تحدث مع فريق أكسبنس حول إدارة الأسطول والأصول والصيانة لشركتك.',
  path: '/ar/contact',
  enPath: '/contact',
});

export default function Page() {
  return (
    <Section>
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="badge-app mb-4">اتصل بنا</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">تحدث مع الفريق</h1>
        <p className="text-lg leading-relaxed text-ink-700">أخبرنا قليلًا عن أسطولك أو أصولك وسنتواصل معك.</p>
      </div>
      <div className="card-app mx-auto max-w-2xl p-6 shadow-card sm:p-8">
        <LeadFormAr />
      </div>
    </Section>
  );
}
