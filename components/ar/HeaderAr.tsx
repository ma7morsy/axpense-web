'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LayoutGrid, LogIn, Menu, Newspaper, Tag, X } from 'lucide-react';
import { Button } from '../Button';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { PRIMARY_CTA_AR, LOGIN } from '@/lib/cta';

const NAV = [
  { label: 'المميزات', href: '/ar/fleet-management', icon: LayoutGrid },
  { label: 'الأسعار', href: '/ar/pricing', icon: Tag },
  { label: 'المدونة', href: '/ar/blog', icon: Newspaper },
];

export function HeaderAr() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/ar';
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/ar" aria-label="أكسبنس - الصفحة الرئيسية" onClick={() => setOpen(false)} className="shrink-0">
          <Image src="/logo.png" alt="أكسبنس" width={839} height={184} priority className="h-8 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}
              className={`inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher current="ar" />
          <a href={LOGIN.href} className="hidden h-9 items-center rounded-md px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:inline-flex">{LOGIN.labelAr}</a>
          <span className="hidden sm:inline-flex"><Button href={PRIMARY_CTA_AR.href}>{PRIMARY_CTA_AR.label}</Button></span>
          <button type="button" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-sidebar-foreground hover:bg-muted lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-sidebar lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-5" aria-label="القائمة">
            {NAV.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex h-10 items-center gap-3 rounded-lg px-4 text-sm font-medium ${isActive(href) ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`}>
                <Icon className="h-4 w-4" />{label}
              </Link>
            ))}
            <div className="my-2 h-px bg-sidebar-border" />
            <a href={LOGIN.href} className="flex h-10 items-center gap-3 rounded-lg px-4 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"><LogIn className="h-4 w-4 rtl:rotate-180" />{LOGIN.labelAr}</a>
            <div className="px-1 pt-2 sm:hidden [&>a]:w-full"><Button href={PRIMARY_CTA_AR.href}>{PRIMARY_CTA_AR.label}</Button></div>
          </nav>
        </div>
      )}
    </header>
  );
}
