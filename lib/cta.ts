/**
 * Primary call-to-action + app links.
 *
 * - NEXT_PUBLIC_APP_URL: where existing customers log in (default: the live app).
 * - NEXT_PUBLIC_SIGNUP_URL: optional self-serve sign-up URL. When set, the
 *   pricing "Start Free Trial" buttons go there; otherwise they open the demo form.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://axpense.lovable.app';
const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL;

export const PRIMARY_CTA = { label: 'Book a Demo', href: '/demo' };
export const PRIMARY_CTA_AR = { label: 'احجز عرضًا تجريبيًا', href: '/ar/contact' };

export const TRIAL_CTA = { label: 'Start Free Trial', href: SIGNUP_URL || '/demo' };
export const TRIAL_CTA_AR = { label: 'ابدأ التجربة المجانية', href: SIGNUP_URL || '/ar/contact' };

export const LOGIN = { label: 'Sign In', labelAr: 'تسجيل الدخول', href: APP_URL };

export const SOCIAL = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/axpense' },
  { name: 'Facebook', href: 'https://www.facebook.com/Axpense.net' },
] as const;
