import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { RootDocument } from '@/components/RootDocument';
import { HeaderAr } from '@/components/ar/HeaderAr';
import { FooterAr } from '@/components/ar/FooterAr';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `أكسبنس — برنامج إدارة الأسطول والأصول`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'أكسبنس لإدارة الأسطول والأصول والصيانة وقطع الغيار والمصروفات للشركات التي تدير مركبات ومعدات.',
  robots: { index: true, follow: true },
};

// Covers /ar/* and the Arabic market hubs (/ar-eg, /ar-sa, ...).
export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="ar" dir="rtl" className={`${inter.variable} ${ibmPlexArabic.variable}`} bodyClassName="font-arabic">
      <HeaderAr />
      <main>{children}</main>
      <FooterAr />
    </RootDocument>
  );
}
