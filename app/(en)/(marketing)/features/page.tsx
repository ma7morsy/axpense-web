import Link from 'next/link';
import type { Metadata } from 'next';
import { Brain, ChevronRight, ClipboardCheck, DollarSign, Globe, Shield, TrendingDown, Truck, Wrench } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { AppFeatureCard, CenteredHead, CtaBand, DeepDiveCard, PageHero } from '@/components/ui/AppSections';
import { PRIMARY_CTA } from '@/lib/cta';
import { SHOW_STATS, STATS } from '@/lib/site-stats';

export const metadata: Metadata = buildMetadata({
  title: 'Features',
  description: 'Everything Axpense includes for asset, fleet, maintenance, expense, inspection, depreciation and AI-powered management.',
  path: '/features',
});

const CORE = [
  { icon: Truck, title: 'Asset & Fleet Management', desc: 'Register, track, and manage all your assets, vehicles, and equipment in one centralized platform.', href: '/features/fleet-management' },
  { icon: Wrench, title: 'Maintenance Management', desc: 'Schedule preventive maintenance, create work orders, and track repair history with ease.', href: '/features/fleet-maintenance' },
  { icon: DollarSign, title: 'Expense Tracking', desc: 'Monitor fuel costs, operating expenses, and cost trends with detailed analytics.', href: '/features/expense-management' },
  { icon: ClipboardCheck, title: 'Inspections & Compliance', desc: 'Digital inspection forms, safety checks, and compliance documentation all in one place.', href: '/features/inspection-management' },
  { icon: TrendingDown, title: 'Depreciation & Financials', desc: 'Automated depreciation calculations, real-time book values, and financial reporting.', href: '/features/asset-management' },
  { icon: Brain, title: 'AI & Automation', desc: 'Smart cost predictions, anomaly detection, and intelligent reminders powered by AI.', href: '/features/reports-analytics' },
];

const DEEP_DIVE = [
  { icon: Truck, title: 'Fleet Management', desc: 'Complete visibility into your entire fleet with real-time tracking, fuel management, and driver assignments.', points: ['Real-time GPS tracking', 'Fuel consumption monitoring', 'Driver performance analytics', 'Route optimization', 'Vehicle health monitoring'] },
  { icon: Wrench, title: 'Maintenance Management', desc: 'Prevent breakdowns and extend asset life with proactive maintenance scheduling and tracking.', points: ['Preventive maintenance scheduling', 'Work order management', 'Parts inventory tracking', 'Vendor management', 'Maintenance history logs'] },
  { icon: DollarSign, title: 'Cost Tracking', desc: 'Get complete visibility into your total cost of ownership with detailed expense tracking.', points: ['Expense categorization', 'Cost per asset analytics', 'Budget tracking', 'Invoice management', 'Cost trend analysis'] },
  { icon: Shield, title: 'Compliance & Safety', desc: 'Stay compliant with regulations and ensure safety with digital inspection forms and documentation.', points: ['Digital inspection forms', 'Compliance document management', 'Safety checklists', 'Audit trails', 'Certification tracking'] },
  { icon: Brain, title: 'AI-Powered Insights', desc: 'Leverage artificial intelligence to predict costs, detect anomalies, and optimize operations.', points: ['Predictive maintenance', 'Cost forecasting', 'Anomaly detection', 'Smart recommendations', 'Automated alerts'] },
  { icon: Globe, title: 'Multi-Tenant Platform', desc: 'Built for enterprises with multi-location support, white-labeling, and custom domains.', points: ['Multi-location support', 'White-label options', 'Custom domains', 'Tenant isolation', 'SSO integration'] },
];

const GUIDES = [
  { label: 'Fleet Management', href: '/features/fleet-management' },
  { label: 'Vehicle Management', href: '/features/vehicle-management' },
  { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
  { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
  { label: 'Work Orders', href: '/features/work-orders' },
  { label: 'Inspections', href: '/features/inspection-management' },
  { label: 'Expense Management', href: '/features/expense-management' },
  { label: 'Fuel Management', href: '/features/fuel-management' },
  { label: 'Asset Management', href: '/features/asset-management' },
  { label: 'Reports & Analytics', href: '/features/reports-analytics' },
];

export default function Page() {
  return (
    <>
      <PageHero badge="Platform Features" title="Everything You Need for" accent="Asset Excellence" subtitle="Axpense provides a comprehensive suite of tools to manage your assets, fleet, and equipment from purchase to retirement." />

      <section id="features" className="relative overflow-hidden bg-background py-24">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead badge="Powerful Features" title="Everything You Need to" accent="Manage Assets" subtitle="From asset registration to AI-powered insights, Axpense provides all the tools your organization needs for comprehensive asset and fleet management." />
          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE.map((f, i) => <AppFeatureCard key={f.title} {...f} index={i} />)}
          </div>
          {SHOW_STATS && (
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-gradient-card p-6 text-center">
                  <div className="mb-2 text-3xl font-bold sm:text-4xl"><span className="text-gradient">{s.value}</span></div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead title="Deep Dive into" accent="Features" subtitle="Explore the capabilities that make Axpense the leading asset management platform." />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {DEEP_DIVE.map((d) => <DeepDiveCard key={d.title} {...d} />)}
          </div>

          <div className="mt-16">
            <h2 className="mb-5 text-center text-lg font-semibold text-foreground">Explore feature guides</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {GUIDES.map((g) => (
                <Link key={g.href} href={g.href} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-sidebar-accent hover:text-primary">
                  {g.label}<ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Transform Your"
        accent="Asset Management?"
        subtitle="Book a demo and see how Axpense can streamline your asset operations from day one."
        primary={PRIMARY_CTA}
        secondary={{ label: 'Talk to Sales', href: '/contact' }}
        checks={['14-day free trial', 'No credit card required', 'Cancel anytime']}
      />
    </>
  );
}
