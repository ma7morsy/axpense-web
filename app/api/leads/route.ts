import { NextResponse } from 'next/server';

// Only these fields are forwarded to the webhook; anything else is dropped.
const FIELDS = ['name', 'company', 'email', 'phone', 'companySize', 'assetCount', 'industry', 'message', 'page', 'lang'] as const;
const REQUIRED = ['name', 'company', 'email'] as const;
const MAX_LEN: Record<string, number> = { message: 2000 };
const DEFAULT_MAX = 200;

// Best-effort per-instance rate limit (5 submissions / 10 min / IP).
// For multi-instance hosting, back this with Upstash/Redis or your edge WAF.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

function err(code: string, error: string, status: number) {
  return NextResponse.json({ code, error }, { status });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) return err('rate_limited', 'Too many submissions. Please try again later or email info@axpense.net.', 429);

    const raw = await request.json() as Record<string, unknown>;

    // Honeypot: real users never see or fill the "website" field. Pretend success so bots don't adapt.
    if (typeof raw.website === 'string' && raw.website.trim()) return NextResponse.json({ ok: true });

    const body: Record<string, string> = {};
    for (const field of FIELDS) {
      const value = raw[field];
      if (typeof value !== 'string') continue;
      const trimmed = value.trim();
      if (!trimmed) continue;
      if (trimmed.length > (MAX_LEN[field] ?? DEFAULT_MAX)) return err('too_long', `The ${field} field is too long.`, 400);
      body[field] = trimmed;
    }

    const missing = REQUIRED.filter((field) => !body[field]);
    if (missing.length) return err('missing', `Missing required fields: ${missing.join(', ')}`, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return err('invalid_email', 'Enter a valid work email.', 400);

    const webhook = process.env.LEADS_WEBHOOK_URL;
    if (!webhook) return err('not_configured', 'Lead delivery is not configured yet. Please email info@axpense.net.', 503);

    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ source: 'axpense.net', receivedAt: new Date().toISOString(), ...body }),
      cache: 'no-store',
    });

    if (!response.ok) return err('delivery_failed', 'Lead delivery failed. Please try again.', 502);
    return NextResponse.json({ ok: true });
  } catch {
    return err('server_error', 'Unable to submit the form right now.', 500);
  }
}
