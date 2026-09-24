import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogCover } from './BlogCover';
import { formatPostDate, readingMinutes, type BlogPost } from '@/lib/blog';

export function PostMeta({ post, className = '' }: { post: BlogPost; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground ${className}`}>
      <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time></span>
      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{readingMinutes(post)} min read</span>
    </div>
  );
}

/** Large featured post: cover on one side, text on the other */
export function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated lg:grid-cols-2">
      <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[340px]"><BlogCover category={post.category} size="lg" /></div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <span className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Featured article</span>
        <PostMeta post={post} />
        <h2 className="mt-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-3xl text-balance">{post.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{post.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read article<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

/** Grid card */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <div className="aspect-[16/10]"><BlogCover category={post.category} /></div>
      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} />
        <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary text-balance">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read article<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
