import { Section, SectionHead } from '../Section';

const STEPS = [
  { title: 'Add your vehicles and assets', desc: 'Bring your fleet, equipment, and asset records into Axpense in one setup pass.' },
  { title: 'Set up maintenance and inspections', desc: 'Set service intervals by kilometres or date, and build digital inspection checklists.' },
  { title: 'Track expenses as they happen', desc: 'Fuel, repairs, spare parts and operating costs are logged against each vehicle as they happen.' },
  { title: 'Act on the reports', desc: 'See utilization, costs, and maintenance status without building a spreadsheet.' },
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHead eyebrow="How It Works" title="Set up once, run every day" center />
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="card-app p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">{i + 1}</div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
