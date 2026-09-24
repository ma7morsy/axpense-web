import { ClipboardCheck, DollarSign, Truck, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';

const USE_CASES = [
  { icon: Truck, tone: 'green' as const, title: 'Daily fleet operations', desc: 'Track vehicles, drivers, assignments and status from one operational view.', href: '/features/fleet-management' },
  { icon: Wrench, tone: 'amber' as const, title: 'Maintenance planning', desc: 'Move from missed service dates to km-based reminders, planned maintenance and work orders.', href: '/features/preventive-maintenance' },
  { icon: DollarSign, tone: 'teal' as const, title: 'Fuel and expense control', desc: 'Record fuel and operating expenses and connect costs to vehicles.', href: '/features/expense-management' },
  { icon: ClipboardCheck, tone: 'teal' as const, title: 'Vehicle inspections', desc: 'Capture inspection results and issues as part of the operational record.', href: '/features/inspection-management' },
];

export function UseCasesSection() {
  return (
    <Section>
      <SectionHead eyebrow="Use Cases" title="Built around the work your team does every day" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {USE_CASES.map((u) => <IconCard key={u.href} {...u} />)}
      </div>
    </Section>
  );
}
