import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Fleet Management', href: '/features/fleet-management' },
      { label: 'Maintenance', href: '/features/fleet-maintenance' },
      { label: 'Expense Management', href: '/features/expense-management' },
      { label: 'Asset Management', href: '/features/asset-management' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Logistics & Transportation', href: '/industries/logistics' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Healthcare', href: '/industries/healthcare' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'Egypt', href: '/en-eg' },
      { label: 'Saudi Arabia', href: '/en-sa' },
      { label: 'UAE', href: '/en-ae' },
      { label: 'Qatar', href: '/en-qa' },
      { label: 'Jordan', href: '/en-jo' },
      { label: 'Iraq', href: '/en-iq' },
      { label: 'MENA', href: '/en-mena' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-wrap px-5 sm:px-7">
        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.png" alt="Axpense" width={120} height={26} />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
              Fleet, asset, maintenance and spare parts management for
              businesses in Egypt and MENA.
            </p>
            <div className="mt-4"><SocialLinks /></div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold text-foreground">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Axpense. All rights reserved.</span>
          <a href="mailto:info@axpense.net" className="hover:text-primary">info@axpense.net</a>
        </div>
      </div>
    </footer>
  );
}
