import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { Button } from '@/components/Button';
import { Section, SectionHead } from '@/components/Section';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'برنامج إدارة الأسطول في مصر',
  description: 'تتبع كل مركبة وسائق ومستند في منصة واحدة. برنامج إدارة أسطول مصمم لشركات الخدمات اللوجستية والنقل والتوصيل في مصر.',
  path: '/ar/fleet-management',
  enPath: '/features/fleet-management',
});

const CAPABILITIES = [
  { title: 'سجل المركبات', desc: 'احتفظ ببيانات كل مركبة: الطراز، رقم اللوحة، الترخيص، والملكية في سجل واحد.' },
  { title: 'تعيين السائقين', desc: 'اربط كل سائق بمركبته وتتبع رخصة القيادة وحالتها.' },
  { title: 'تتبع المستندات', desc: 'احفظ التراخيص والتأمين مع تذكير قبل انتهاء صلاحيتها.' },
  { title: 'حالة المركبة', desc: 'اعرف فورًا أي المركبات نشطة أو في الصيانة أو خارج الخدمة.' },
  { title: 'معدل الاستخدام', desc: 'افهم أي المركبات تُستغل جيدًا وأيها متوقفة دون داعٍ.' },
  { title: 'سجلات مركزية', desc: 'استبدل الجداول والملفات الورقية المتناثرة بنظام واحد قابل للبحث.' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: 'Axpense Fleet Management (Arabic)',
              description: metadata.description as string,
              path: '/ar/fleet-management',
            })
          ),
        }}
      />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7 text-right">
          <p className="badge-app mb-4">المميزات</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink-900">برنامج إدارة الأسطول للشركات في مصر</h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-700">
            سجّل وتتبع وأدر كل مركبة في أسطولك — مع تعيين السائقين والمستندات والحالة في مكان واحد.
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
