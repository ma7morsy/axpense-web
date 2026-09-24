import Link from 'next/link';
import { Building, Factory, HardHat, HeartPulse, Hotel, Truck, type LucideIcon } from 'lucide-react';

type Industry = { icon: LucideIcon; title: string; desc: string; points: string[]; href: string };

const INDUSTRIES: Industry[] = [
  { icon: Truck, title: 'Logistics & Transportation', desc: 'Optimize fleet operations, reduce fuel costs, and ensure vehicle compliance.', points: ['Real-time GPS tracking', 'Route optimization', 'Driver management'], href: '/industries/logistics' },
  { icon: HardHat, title: 'Construction', desc: 'Track heavy equipment, manage tool inventory, and schedule maintenance.', points: ['Equipment utilization', 'Project-based tracking', 'Safety compliance'], href: '/industries/construction' },
  { icon: Factory, title: 'Manufacturing', desc: 'Monitor production equipment, reduce downtime, and optimize maintenance.', points: ['Preventive maintenance', 'Production line tracking', 'Spare parts management'], href: '/industries/manufacturing' },
  { icon: Building, title: 'Real Estate & Facilities', desc: 'Manage property vehicles, facility equipment, and service contracts across sites.', points: ['Multi-site asset register', 'Facility equipment servicing', 'Contractor work orders'], href: '/industries/real-estate' },
  { icon: Hotel, title: 'Travel & Hospitality', desc: 'Keep guest-transport fleets safe, on time, and serviced before every season.', points: ['Guest transport fleets', 'Pre-trip inspections', 'Cost per vehicle'], href: '/industries/travel-hospitality' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Manage medical equipment, ensure compliance, and track device maintenance.', points: ['Medical device tracking', 'Compliance documentation', 'Service scheduling'], href: '/industries/healthcare' },
];

// Layout copied from the Axpense app's "Built for Every Industry" section.
export function IndustriesSection() {
  return (
    <section className="bg-gradient-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Industry Solutions</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Built for <span className="text-gradient">Every Industry</span></h2>
          <p className="text-lg text-muted-foreground">Axpense adapts to your industry&apos;s unique requirements with specialized features and workflows.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, desc, points, href }) => (
            <Link key={href} href={href} className="group rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10">
                <Icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">{title}</h3>
              <p className="mb-5 text-muted-foreground">{desc}</p>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-muted-foreground"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
