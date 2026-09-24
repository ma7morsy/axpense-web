import { AlertTriangle, FileSpreadsheet, FileWarning, MessageSquare, Receipt, Wallet } from 'lucide-react';
import { Section } from '../Section';

const PROBLEMS = [
  { icon: FileSpreadsheet, text: 'Excel spreadsheets that fall out of date' },
  { icon: MessageSquare, text: 'WhatsApp messages instead of records' },
  { icon: FileWarning, text: 'Paper inspection forms that get lost' },
  { icon: Receipt, text: 'Invoices and receipts scattered across email' },
  { icon: AlertTriangle, text: 'Maintenance that gets missed until something breaks' },
  { icon: Wallet, text: 'Expenses no one can add up until month-end' },
];

export function ProblemSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="badge-app mb-4">The problem</span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">Managing vehicles and assets shouldn&apos;t require spreadsheets</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Axpense brings fleet, equipment, maintenance, spare parts and expense data into one system — so your team stops chasing information and starts acting on it.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PROBLEMS.map(({ icon: Icon, text }) => (
            <li key={text} className="card-app flex items-center gap-3 p-4 text-sm text-foreground">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><Icon className="h-4 w-4" aria-hidden="true" /></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
