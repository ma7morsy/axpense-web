import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage, type SolutionPageData } from '@/components/SolutionPage';

const data: SolutionPageData = {
  title: 'Asset Lifecycle Management',
  metaTitle: 'Asset Lifecycle Management Software',
  description: 'Track assets from acquisition through depreciation to disposal, with automated book values throughout.',
  intro: 'Combines asset registration, automated depreciation, and disposal records so you always know what an asset is worth and where it stands.',
  outcomes: [
    'Every asset tracked from purchase to disposal',
    'Depreciation and book values calculated automatically',
    'Assignment history showing who held what, and when',
    'Disposal records with reason and date on file',
  ],
};

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/asset-lifecycle-management' });

export default function Page() {
  return <SolutionPage data={data} />;
}
