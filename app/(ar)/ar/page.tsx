import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Button } from '@/components/Button';
import { Section, SectionHead } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TrustLine, TRUST_AR } from '@/components/home/TrustLine';
import { WhyAxpense } from '@/components/home/WhyAxpense';
import { ModulesSection } from '@/components/home/ModulesSection';
import { IconCard } from '@/components/ui/IconCard';
import { AlertTriangle, BarChart3, ClipboardCheck, DollarSign, FileSpreadsheet, FileWarning, MessageSquare, Package, Receipt, Truck, Wallet, Wrench, Gauge } from 'lucide-react';
import { PRIMARY_CTA, PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';

export const metadata: Metadata = buildMetadata({
  title: 'برنامج إدارة الأسطول والأصول للشركات في مصر',
  description: 'إدارة المركبات والمعدات والصيانة والوقود والمصروفات والفحوصات من منصة واحدة. مصمم للشركات في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.',
  path: '/ar',
  enPath: '/',
});

const PROBLEMS = [
  'جداول إكسل تفقد تحديثها باستمرار',
  'رسائل واتساب بدلًا من سجلات موثقة',
  'استمارات فحص ورقية تُفقد بسهولة',
  'فواتير وإيصالات متناثرة عبر البريد الإلكتروني',
  'صيانة تُهمل حتى يتعطل شيء ما',
  'مصروفات لا يمكن حصرها إلا في نهاية الشهر',
];

const FEATURES = [
  { title: 'إدارة الأسطول', desc: 'تتبع كل مركبة، وعيّن السائقين، واحتفظ بالمستندات والحالة في مكان واحد.' },
  { title: 'إدارة الصيانة', desc: 'تنبيهات صيانة وقائية حسب الكيلومترات أو التاريخ، مع المهام وأوامر الشغل.' },
  { title: 'إدارة المصروفات', desc: 'تتبع الوقود والإصلاحات ومصاريف التشغيل.' },
  { title: 'الفحوصات', desc: 'رقمنة استمارات الفحص وتوثيق الأعطال فور حدوثها.' },
  { title: 'إدارة الأصول', desc: 'المعدات والأدوات وقطع الغيار عبر دورة حياتها، بما في ذلك الإهلاك.' },
  { title: 'التقارير والتحليلات', desc: 'حوّل بيانات التشغيل إلى قرارات فعلية.' },
];

const FEATURE_ICONS = [
  { icon: Truck, tone: 'green' as const, href: '/ar/fleet-management' },
  { icon: Wrench, tone: 'amber' as const, href: '/ar/fleet-maintenance' },
  { icon: DollarSign, tone: 'teal' as const, href: undefined },
  { icon: ClipboardCheck, tone: 'teal' as const, href: undefined },
  { icon: Package, tone: 'teal' as const, href: '/ar/asset-management' },
  { icon: BarChart3, tone: 'navy' as const, href: undefined },
];
const PROBLEM_ICONS = [FileSpreadsheet, MessageSquare, FileWarning, Receipt, AlertTriangle, Wallet];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.10),transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-6 text-center sm:px-6 lg:px-8 lg:pt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            مصمم لفرق الأسطول في مصر ومنطقة الشرق الأوسط
          </span>
          <h1 className="mx-auto mt-7 max-w-3xl text-lg font-semibold text-foreground sm:text-xl">
            برنامج إدارة الأسطول والأصول للشركات النامية
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-4xl font-bold leading-[1.25] text-foreground sm:text-5xl lg:text-6xl">
            توقف عن تفويت مواعيد الصيانة.
            <br />
            <span className="text-gradient">وتحكّم في تكاليف أسطولك.</span>
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            يذكّرك أكسبنس بموعد صيانة كل مركبة حسب الكيلومترات التي تقطعها فعليًا، ويتابع قطع الغيار والفحوصات، ويعرض كل المصروفات — بدلًا من جداول إكسل ومجموعات واتساب.
          </p>
          <div className="mt-9 flex justify-center">
            <Link href={PRIMARY_CTA_AR.href} className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-10 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 sm:w-auto">
              {PRIMARY_CTA_AR.label}
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <TrustLine items={TRUST_AR} className="mt-7" />
          <figure className="relative mx-auto mt-14 max-w-6xl" dir="ltr">
            <div aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-0 rounded-[40px] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <Image src="/screens/dashboard.webp" alt="لوحة تحكم أكسبنس: مؤشرات الأسطول والتكاليف والصيانة" width={1920} height={1200} priority sizes="(max-width: 1200px) 100vw, 1152px" className="h-auto w-full" />
            </div>
          </figure>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHead eyebrow="المشكلة" title="إدارة المركبات والأصول لا تحتاج إلى جداول إكسل" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROBLEMS.map((p, i) => {
              const Icon = PROBLEM_ICONS[i % PROBLEM_ICONS.length];
              return (
                <li key={p} className="card-app flex items-center gap-3 p-4 text-sm text-foreground">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                  {p}
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <Section alt>
        <SectionHead eyebrow="المميزات الأساسية" title="كل ما يحتاجه فريق التشغيل" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <IconCard key={f.title} icon={FEATURE_ICONS[i].icon} tone={FEATURE_ICONS[i].tone} title={f.title} desc={f.desc} href={FEATURE_ICONS[i].href} meta="اعرف المزيد" />
          ))}
        </div>
      </Section>

      <ModulesSection ar />

      <WhyAxpense ar />

      <Section>
        <div className="relative overflow-hidden rounded-xl bg-gradient-primary px-6 py-14 text-center shadow-glow sm:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative mx-auto max-w-lg text-2xl font-bold text-white sm:text-3xl text-balance">وحّد إدارة أسطولك وأصولك في نظام واحد</h2>
          <p className="relative mx-auto mt-3 max-w-md text-base leading-relaxed text-white/85">احجز عرضًا تجريبيًا قصيرًا وسيعرض لك الفريق كيف يعمل أكسبنس مع أسطولك.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href={PRIMARY_CTA_AR.href} variant="white" size="lg">{PRIMARY_CTA_AR.label}</Button>
          </div>
          <TrustLine items={TRUST_AR} tone="onDark" className="relative mt-6" />
        </div>
      </Section>
    </>
  );
}
