import { BarChart3, ClipboardCheck, DollarSign, Package, Truck, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';

const FEATURES = [
  { icon: Truck, tone: 'green' as const, title: 'Fleet Management', desc: 'Track every vehicle, assign drivers, and keep documents and status in one place.', href: '/features/fleet-management' },
  { icon: Wrench, tone: 'amber' as const, title: 'Maintenance Management', desc: 'Preventive maintenance reminders by kilometres driven or by date, with tasks and work orders.', href: '/features/fleet-maintenance' },
  { icon: DollarSign, tone: 'teal' as const, title: 'Expense Management', desc: 'Fuel, repairs, parts, insurance and other costs — recorded against the vehicle or asset.', href: '/features/expense-management' },
  { icon: ClipboardCheck, tone: 'teal' as const, title: 'Inspections', desc: 'Checklist-based inspections that turn failed checks into issues your team can follow up.', href: '/features/inspection-management' },
  { icon: Package, tone: 'teal' as const, title: 'Assets & Spare Parts', desc: 'Equipment, tools and spare parts tracked through their lifecycle, including depreciation.', href: '/features/asset-management' },
  { icon: BarChart3, tone: 'navy' as const, title: 'Reports & Analytics', desc: 'Turn operational data into decisions your team can act on today.', href: '/features/reports-analytics' },
];

export function FeaturesSection() {
  return (
    <Section id="features" alt>
      <SectionHead eyebrow="Core Features" title="Everything your operations team needs" description="One platform for the day-to-day work of running vehicles, equipment, and the teams behind them." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => <IconCard key={f.href} {...f} />)}
      </div>
    </Section>
  );
}
