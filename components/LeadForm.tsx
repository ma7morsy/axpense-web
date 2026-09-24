'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const INDUSTRIES = ['Logistics & Transportation','Construction','Manufacturing','Real Estate','Healthcare','Travel & Hospitality','Energy & Utilities','Other'];
const COMPANY_SIZES = ['1–10 employees','11–50 employees','51–200 employees','201–1,000 employees','1,000+ employees'];

export function LeadForm() {
  const [state, setState] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const started = useRef(false);
  const pathname = usePathname();

  function handleFirstFocus() {
    if (started.current) return;
    started.current = true;
    trackEvent('form_start', { form: 'lead', page: pathname });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setState('sending');
    setError('');
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, page: pathname, lang: 'en' }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed');
      setState('success');
      trackEvent('generate_lead', { form: 'lead', industry: data.industry, page: pathname });
      form.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Unable to submit the form right now.');
    }
  }

  if (state === 'success') return <div role="status" className="rounded-lg border border-primary/20 bg-panel-1 p-8 text-center"><p className="text-lg font-semibold text-ink-900">Thank you. Your request has been submitted.</p><p className="mt-2 text-sm text-ink-700">The Axpense team will follow up using the details you provided.</p></div>;

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Company" name="company" autoComplete="organization" required />
      <Field label="Work Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone (with country code)" name="phone" type="tel" autoComplete="tel" placeholder="+20 / +966 / +971 …" />
      <div>
        <label htmlFor="companySize" className="label-app">Company Size</label>
        <select id="companySize" name="companySize" className="input-app" defaultValue="">
          <option value="">Select company size</option>{COMPANY_SIZES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <Field label="Number of Vehicles / Assets" name="assetCount" type="number" min="0" />
      <div className="sm:col-span-2">
        <label htmlFor="industry" className="label-app">Industry</label>
        <select id="industry" name="industry" className="input-app" defaultValue="">
          <option value="">Select an industry</option>{INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="label-app">What do you want to manage?</label>
        <textarea id="message" name="message" rows={4} maxLength={2000} className="input-app" />
      </div>
      {state === 'error' && <p role="alert" className="sm:col-span-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={state === 'sending'} className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Submit'}</button>
      <p className="sm:col-span-2 text-xs text-ink-500">Or email <a className="font-medium text-primary hover:underline" href="mailto:info@axpense.net">info@axpense.net</a>.</p>
    </form>
  );
}

function Field({ label, name, type='text', required=false, placeholder, min, autoComplete }: { label:string; name:string; type?:string; required?:boolean; placeholder?:string; min?:string; autoComplete?:string }) {
  return <div><label htmlFor={name} className="label-app">{label}{required && <span className="text-primary"> *</span>}</label><input id={name} type={type} name={name} required={required} placeholder={placeholder} min={min} autoComplete={autoComplete} maxLength={200} className="input-app" /></div>;
}
