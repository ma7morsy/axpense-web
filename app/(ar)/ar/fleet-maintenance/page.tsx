import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'برنامج إدارة صيانة الأسطول في مصر',
  description: 'جدولة الصيانة الوقائية وإدارة أوامر الشغل وتتبع سجل الإصلاحات. برنامج صيانة يمنع الأعطال قبل حدوثها.',
  path: '/ar/fleet-maintenance',
  enPath: '/features/fleet-maintenance',
});

const CAPABILITIES = [
  { title: 'جداول الصيانة الوقائية', desc: 'حدد فترات الصيانة بالمسافة أو الزمن، واحصل على تذكير قبل موعدها.' },
  { title: 'أوامر الشغل', desc: 'أنشئ وتابع أوامر الشغل من الطلب حتى الإنجاز.' },
  { title: 'سجل الإصلاحات', desc: 'اطّلع على كل عملية صيانة لكل مركبة في جدول زمني واحد.' },
  { title: 'تتبع التوقف عن العمل', desc: 'اعرف كم من الوقت والمال تخسره كل مركبة بسبب الصيانة.' },
  { title: 'سجل قطع الغيار والتكلفة', desc: 'سجّل القطع المستخدمة وتكلفة العمالة لكل أمر شغل.' },
  { title: 'تذكيرات الصيانة', desc: 'تنبيهات تلقائية قبل تأخر الصيانة، لا بعد حدوث عطل.' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Maintenance Management (Arabic)',
              description: metadata.description as string,
              path: '/ar/fleet-maintenance',
            })
          ),
        }}
      />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7 text-right">
          <p className="badge-app mb-4">المميزات</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink-900">برنامج إدارة صيانة الأسطول</h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-700">
            توقف عن ردة الفعل تجاه الأعطال. خطط للصيانة الوقائية على جدول محدد، وافتح أوامر شغل عند الحاجة.
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
