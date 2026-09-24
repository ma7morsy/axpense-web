import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/AppSections';
import { BlogCover } from '@/components/blog/BlogCover';

export const metadata: Metadata = buildMetadata({
  title: 'المدونة',
  description: 'أدلة حول إدارة الأسطول والصيانة والمصروفات وإدارة الأصول للشركات في مصر.',
  path: '/ar/blog',
  enPath: '/blog',
});

// Titles/descriptions translated now; full article bodies are a
// follow-up once the English articles are finalized — linking to a
// translated article page before the content exists would be a thin
// page, so these are listed without links for now (see README).
const POSTS = [
  { title: 'ما هي إدارة الأسطول؟', desc: 'دليل مبسط لما تغطيه إدارة الأسطول، ولماذا تتجاوز الشركات جداول إكسل لأجلها.' },
  { title: 'الصيانة الوقائية مقابل العلاجية', desc: 'الفرق العملي بين إصلاح المركبات بعد عطلها وصيانتها على جدول محدد.' },
  { title: 'كيفية حساب تكلفة الأسطول', desc: 'ما الذي يدخل فعليًا في تكلفة تشغيل الأسطول، وكيف تحصل على رقم لكل مركبة.' },
  { title: 'ما هي إدارة الأصول؟', desc: 'إدارة الأصول بما يتجاوز المركبات — ماذا تغطي للمعدات والأدوات.' },
];

export default function Page() {
  const categories = ['إدارة الأسطول', 'صيانة الأسطول', 'مصروفات الأسطول', 'إدارة الأصول'];
  const covers = ['Fleet Management', 'Fleet Maintenance', 'Fleet Expenses', 'Asset Management'];
  return (
    <>
      <PageHero badge="المدونة" title="رؤى حول إدارة" accent="الأسطول والأصول" subtitle="أدلة عملية حول الأسطول والصيانة والمصروفات وإدارة الأصول لفرق التشغيل في مصر والمنطقة العربية." />
      <section className="py-16">
        <div className="mx-auto grid max-w-wrap grid-cols-1 gap-6 px-5 sm:px-7 md:grid-cols-2">
          {POSTS.map((post, i) => (
            <article key={post.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card">
              <div className="aspect-[16/9]"><BlogCover category={covers[i % covers.length]} /></div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{categories[i % categories.length]}</span>
                  <span className="text-xs text-muted-foreground">النسخة العربية قريبًا</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
