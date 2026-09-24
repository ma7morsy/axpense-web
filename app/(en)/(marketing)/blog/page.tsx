import type { Metadata } from 'next';
import { BookOpen, CalendarDays, Layers } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { BLOG_POSTS, formatPostDate } from '@/lib/blog';
import { PageHero, CtaBand } from '@/components/ui/AppSections';
import { BlogCard, FeaturedPostCard } from '@/components/blog/BlogCard';
import { PRIMARY_CTA } from '@/lib/cta';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Guides on fleet management, maintenance, expenses, and asset management for businesses in Egypt and MENA.',
  path: '/blog',
  arPath: '/ar/blog',
});

export default function Page() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const [featured, ...rest] = posts;
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const stats = [
    { icon: BookOpen, value: String(posts.length), label: 'Articles' },
    { icon: CalendarDays, value: formatPostDate(posts[0].publishedAt).replace(/, \d{4}$/, ''), label: 'Latest publish' },
    { icon: Layers, value: String(categories.length), label: 'Categories' },
  ];

  return (
    <>
      <PageHero badge="Blog" title="Insights on fleet &" accent="asset management" subtitle="Practical guides on fleet operations, maintenance, expenses, and asset management for teams in Egypt and MENA." />

      <section className="-mt-10 pb-4">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 px-5 sm:gap-6 sm:px-7">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card sm:p-6">
              <Icon className="mx-auto mb-2 h-5 w-5 text-primary" aria-hidden="true" />
              <div className="text-xl font-bold text-foreground sm:text-2xl">{value}</div>
              <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <FeaturedPostCard post={featured} />
        </div>
      </section>

      {rest.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-wrap px-5 sm:px-7">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Latest <span className="text-gradient">articles</span></h2>
              <div className="hidden flex-wrap gap-2 sm:flex">
                {categories.map((c) => <span key={c} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{c}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Ready to put this into" accent="practice?" subtitle="See how Axpense handles fleet, maintenance, spare parts and expenses in one platform." primary={PRIMARY_CTA} secondary={{ label: 'Talk to Sales', href: '/contact' }} />
    </>
  );
}
