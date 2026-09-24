// English ↔ Arabic page pairs, used by the language switcher so switching
// language keeps the visitor on the equivalent page where one exists.
const AR_FEATURES = ['fleet-management', 'fleet-maintenance', 'asset-management', 'vehicle-management', 'fuel-management', 'work-orders', 'preventive-maintenance'];
const MARKETS = ['eg', 'sa', 'ae', 'qa', 'jo', 'iq', 'mena'];

export function toArabic(path: string): string {
  if (path === '/' || path === '') return '/ar';
  const m = path.match(/^\/en-([a-z]+)$/);
  if (m && MARKETS.includes(m[1])) return `/ar-${m[1]}`;
  if (['/pricing', '/contact', '/blog'].includes(path)) return `/ar${path}`;
  if (path === '/demo') return '/ar/contact';
  const f = path.match(/^\/features\/([a-z-]+)$/);
  if (f && AR_FEATURES.includes(f[1])) return `/ar/${f[1]}`;
  return '/ar';
}

export function toEnglish(path: string): string {
  if (path === '/ar') return '/';
  const m = path.match(/^\/ar-([a-z]+)$/);
  if (m && MARKETS.includes(m[1])) return `/en-${m[1]}`;
  if (['/ar/pricing', '/ar/contact', '/ar/blog'].includes(path)) return path.replace('/ar', '');
  const f = path.match(/^\/ar\/([a-z-]+)$/);
  if (f && AR_FEATURES.includes(f[1])) return `/features/${f[1]}`;
  return '/';
}
