'use client';

import { useMemo, useState } from 'react';

/**
 * Simple, transparent per-vehicle monthly cost estimator. The formula is
 * intentionally basic (sum of the categories the user enters) rather than
 * anything presented as a precise prediction — this is a planning aid,
 * not a quote, and says so.
 */
const CURRENCIES = ['EGP', 'SAR', 'AED', 'QAR', 'JOD', 'IQD', 'USD'] as const;
type Currency = typeof CURRENCIES[number];

export function FleetCostCalculator() {
  const [currency, setCurrency] = useState<Currency>('EGP');
  const [vehicles, setVehicles] = useState(10);
  const [fuelPerVehicle, setFuelPerVehicle] = useState(2500);
  const [maintenancePerVehicle, setMaintenancePerVehicle] = useState(800);
  const [insurancePerVehicle, setInsurancePerVehicle] = useState(400);
  const [otherPerVehicle, setOtherPerVehicle] = useState(300);

  const perVehicleTotal = fuelPerVehicle + maintenancePerVehicle + insurancePerVehicle + otherPerVehicle;
  const fleetTotal = useMemo(() => perVehicleTotal * vehicles, [perVehicleTotal, vehicles]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="calc-currency" className="label-app">Currency</label>
          <select id="calc-currency" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className="input-app">
            {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <NumberField label="Number of vehicles" value={vehicles} onChange={setVehicles} min={1} />
        <NumberField label="Fuel cost per vehicle / month" value={fuelPerVehicle} onChange={setFuelPerVehicle} min={0} />
        <NumberField label="Maintenance per vehicle / month" value={maintenancePerVehicle} onChange={setMaintenancePerVehicle} min={0} />
        <NumberField label="Insurance per vehicle / month" value={insurancePerVehicle} onChange={setInsurancePerVehicle} min={0} />
        <NumberField label="Other costs per vehicle / month" value={otherPerVehicle} onChange={setOtherPerVehicle} min={0} />
      </div>

      <div className="card-app p-7 shadow-card">
        <p className="mb-1 text-sm text-ink-500">Estimated cost per vehicle / month</p>
        <p className="mb-6 text-3xl font-bold text-ink-900">{formatMoney(perVehicleTotal, currency)}</p>

        <p className="mb-1 text-sm text-ink-500">Estimated total fleet cost / month</p>
        <p className="mb-6 text-4xl font-bold text-primary">{formatMoney(fleetTotal, currency)}</p>

        <div className="border-t border-line pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Breakdown</p>
          <BreakdownRow label="Fuel" value={fuelPerVehicle * vehicles} currency={currency} />
          <BreakdownRow label="Maintenance" value={maintenancePerVehicle * vehicles} currency={currency} />
          <BreakdownRow label="Insurance" value={insurancePerVehicle * vehicles} currency={currency} />
          <BreakdownRow label="Other" value={otherPerVehicle * vehicles} currency={currency} />
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink-500">
          This is a planning estimate based on the numbers you enter — not a quote.
          Actual costs vary by vehicle type, usage, and route. Axpense tracks your
          real per-vehicle costs automatically once you’re logging expenses.
        </p>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  const id = `calc-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`;
  return (
    <div>
      <label htmlFor={id} className="label-app">{label}</label>
      <input
        id={id}
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
        className="input-app"
      />
    </div>
  );
}

function BreakdownRow({ label, value, currency }: { label: string; value: number; currency: string }) {
  return (
    <div className="flex justify-between py-1.5 text-sm">
      <span className="text-ink-700">{label}</span>
      <span className="font-medium text-ink-900">{formatMoney(value, currency)}</span>
    </div>
  );
}

function formatMoney(n: number, currency: string) {
  return `${currency} ${n.toLocaleString('en-US')}`;
}
