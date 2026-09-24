import { AlertCircle, BarChart3, Boxes, ClipboardCheck, ClipboardList, DollarSign, History, ListChecks, Package, TrendingDown, Truck, Users, UserCog, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';

// The same modules, in the same order, as the Axpense app sidebar.
const MODULES = [
  { icon: Boxes, label: 'Assets' },
  { icon: Truck, label: 'Fleet' },
  { icon: AlertCircle, label: 'Issues' },
  { icon: Users, label: 'Drivers' },
  { icon: History, label: 'Timeline' },
  { icon: ClipboardList, label: 'Work Orders' },
  { icon: ListChecks, label: 'Tasks' },
  { icon: Package, label: 'Spare Parts' },
  { icon: Wrench, label: 'Maintenance' },
  { icon: ClipboardCheck, label: 'Inspections' },
  { icon: DollarSign, label: 'Expenses' },
  { icon: TrendingDown, label: 'Depreciation' },
  { icon: BarChart3, label: 'Reports' },
  { icon: UserCog, label: 'Users & Roles' },
];

export function ModulesSection({ ar = false }: { ar?: boolean }) {
  const labelsAr: Record<string, string> = { Assets: 'الأصول', Fleet: 'الأسطول', Issues: 'الأعطال', Drivers: 'السائقون', Timeline: 'السجل الزمني', 'Work Orders': 'أوامر الشغل', Tasks: 'المهام', 'Spare Parts': 'قطع الغيار', Maintenance: 'الصيانة', Inspections: 'الفحوصات', Expenses: 'المصروفات', Depreciation: 'الإهلاك', Reports: 'التقارير', 'Users & Roles': 'المستخدمون والصلاحيات' };
  return (
    <Section>
      <SectionHead
        eyebrow={ar ? 'داخل المنصة' : 'Inside the platform'}
        title={ar ? 'كل الوحدات التي يحتاجها فريق التشغيل' : 'Every module your operations team works in'}
        description={ar ? 'نفس الوحدات التي ستراها في القائمة الجانبية بعد تسجيل الدخول.' : 'The same modules you’ll see in the sidebar once you log in.'}
      />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {MODULES.map(({ icon: Icon, label }) => (
          <li key={label} className="card-app flex flex-col items-center gap-3 px-3 py-5 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
            <span className="text-sm font-medium text-foreground">{ar ? labelsAr[label] : label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
