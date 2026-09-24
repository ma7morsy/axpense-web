import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from '../SocialLinks';

export function FooterAr() {
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-wrap px-5 sm:px-7">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-8">
          <div>
            <Image src="/logo.png" alt="أكسبنس" width={120} height={26} />
            <p className="mt-4 max-w-[260px] text-sm text-ink-500">
              نظام إدارة الأسطول والأصول والصيانة وقطع الغيار للشركات في مصر والمنطقة العربية.
            </p>
            <div className="mt-4"><SocialLinks /></div>
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/ar/fleet-management" className="text-muted-foreground transition-colors hover:text-primary">إدارة الأسطول</Link>
            <Link href="/ar/fleet-maintenance" className="text-muted-foreground transition-colors hover:text-primary">إدارة الصيانة</Link>
            <Link href="/ar/asset-management" className="text-muted-foreground transition-colors hover:text-primary">إدارة الأصول</Link>
            <Link href="/ar/pricing" className="text-muted-foreground transition-colors hover:text-primary">الأسعار</Link>
            <Link href="/ar/contact" className="text-muted-foreground transition-colors hover:text-primary">اتصل بنا</Link>
          </div>
        </div>
        <div className="border-t border-line pt-6 text-sm text-ink-500">
          © {new Date().getFullYear()} أكسبنس. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
