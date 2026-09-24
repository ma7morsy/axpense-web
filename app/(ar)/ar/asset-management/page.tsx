import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'برنامج إدارة الأصول في مصر',
  description: 'إدارة المركبات والمعدات والأدوات عبر دورة حياتها الكاملة. برنامج إدارة أصول مع احتساب الإهلاك تلقائيًا.',
  path: '/ar/asset-management',
  enPath: '/features/asset-management',
});

const CAPABILITIES = [
  { title: 'دورة حياة الأصل', desc: 'تتبع كل أصل من الشراء إلى التخصيص والصيانة وحتى التخلص منه.' },
  { title: 'إهلاك تلقائي', desc: 'تُحدَّث القيمة الدفترية تلقائيًا مع تقادم الأصل، بدلًا من جدول يدوي.' },
  { title: 'تتبع التخصيص', desc: 'اعرف أي فريق أو موقع أو شخص يحتفظ حاليًا بكل معدة.' },
  { title: 'تقارير مالية', desc: 'صدّر قيم الأصول وجداول الإهلاك لقسم المحاسبة.' },
  { title: 'أنواع أصول مخصصة', desc: 'تتبع المعدات والأدوات جنبًا إلى جنب مع المركبات في نظام واحد.' },
  { title: 'سجلات التخلص', desc: 'وثّق التقاعد أو البيع أو الشطب مع السبب والتاريخ.' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Asset Management (Arabic)',
              description: metadata.description as string,
              path: '/ar/asset-management',
            })
          ),
        }}
      />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7 text-right">
          <p className="badge-app mb-4">المميزات</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink-900">برنامج إدارة الأصول</h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-700">
            أبعد من المركبات — تتبع المعدات والأدوات والأصول المادية الأخرى من الاقتناء وحتى التخلص، مع احتساب الإهلاك تلقائيًا.
          </p>
          <div className="mt-7 flex flex-wrap justify-start gap-3">
            <Button href={PRIMARY_CTA_AR.href}>{PRIMARY_CTA_AR.label}</Button>
          </div>
        </div>
      </div>
      <Section>
        <div className="text-right">
          <h2 className="mb-10 text-2xl font-bold text-ink-900">ما يمكنك فعله</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="card-app p-6 text-right">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /></span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
