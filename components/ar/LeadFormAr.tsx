'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const INDUSTRIES = ['الخدمات اللوجستية والنقل','المقاولات','الصناعة والتصنيع','العقارات','الرعاية الصحية','السياحة والضيافة','الطاقة والمرافق','أخرى'];
const COMPANY_SIZES = ['١–١٠ موظفين','١١–٥٠ موظفًا','٥١–٢٠٠ موظف','٢٠١–١٠٠٠ موظف','أكثر من ١٠٠٠ موظف'];

// Server error codes → Arabic messages (the API returns English text).
const ERRORS: Record<string, string> = {
  missing: 'يرجى إدخال الاسم والشركة والبريد الإلكتروني.',
  invalid_email: 'يرجى إدخال بريد إلكتروني صحيح للعمل.',
  too_long: 'أحد الحقول أطول من المسموح.',
  rate_limited: 'عدد كبير من المحاولات. حاول لاحقًا أو راسلنا على info@axpense.net.',
  not_configured: 'استقبال الطلبات غير مفعّل حاليًا. يرجى مراسلتنا على info@axpense.net.',
};
const FALLBACK = 'تعذر إرسال الطلب حاليًا. حاول مرة أخرى.';

export function LeadFormAr() {
  const [state, setState] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const started = useRef(false);
  const pathname = usePathname();

  function handleFirstFocus() {
    if (started.current) return;
    started.current = true;
    trackEvent('form_start', { form: 'lead_ar', page: pathname });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setState('sending'); setError('');
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    try {
      const r = await fetch('/api/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, page: pathname, lang: 'ar' }) });
      const result = await r.json();
      if (!r.ok) throw new Error(ERRORS[result.code] || FALLBACK);
      setState('success');
      trackEvent('generate_lead', { form: 'lead_ar', industry: data.industry, page: pathname });
      form.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error && err.message ? err.message : FALLBACK);
    }
  }

  if (state === 'success') return <div role="status" className="rounded-lg border border-primary/20 bg-panel-1 p-8 text-center"><p className="text-lg font-semibold text-ink-900">شكرًا لك. تم إرسال طلبك بنجاح.</p><p className="mt-2 text-sm text-ink-700">سيتواصل معك فريق أكسبنس باستخدام البيانات التي أرسلتها.</p></div>;

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label="الاسم" name="name" autoComplete="name" required />
      <Field label="الشركة" name="company" autoComplete="organization" required />
      <Field label="البريد الإلكتروني للعمل" name="email" type="email" autoComplete="email" required dirLtr />
      <Field label="رقم الهاتف (مع كود الدولة)" name="phone" type="tel" autoComplete="tel" placeholder="+20 / +966 / +971 …" dirLtr />
      <div>
        <label htmlFor="companySize" className="label-app">حجم الشركة</label>
        <select id="companySize" name="companySize" defaultValue="" className="input-app">
          <option value="">اختر حجم الشركة</option>{COMPANY_SIZES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <Field label="عدد المركبات / الأصول" name="assetCount" type="number" />
      <div className="sm:col-span-2">
        <label htmlFor="industry" className="label-app">القطاع</label>
        <select id="industry" name="industry" defaultValue="" className="input-app">
          <option value="">اختر القطاع</option>{INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="label-app">ماذا تريد أن تدير؟</label>
        <textarea id="message" name="message" rows={4} maxLength={2000} className="input-app" />
      </div>
      {state === 'error' && <p role="alert" className="sm:col-span-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={state === 'sending'} className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-60">{state === 'sending' ? 'جارٍ الإرسال…' : 'إرسال'}</button>
      <p className="sm:col-span-2 text-xs text-ink-500">أو راسلنا عبر <a className="font-medium text-primary hover:underline" href="mailto:info@axpense.net">info@axpense.net</a>.</p>
    </form>
  );
}

function Field({ label, name, type = 'text', required = false, placeholder, autoComplete, dirLtr = false }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string; dirLtr?: boolean }) {
  return <div><label htmlFor={name} className="label-app">{label}{required && <span className="text-primary"> *</span>}</label><input id={name} type={type} name={name} required={required} placeholder={placeholder} autoComplete={autoComplete} maxLength={200} dir={dirLtr ? 'ltr' : undefined} className="input-app" /></div>;
}
