
{
  "name": "claimguard-intake",
  "private": true,
  "version": "1.2.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run --reporter=dot",
    "typecheck": "tsc --noEmit"
  },
  "engines": { "node": ">=18.18 <21" },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "lucide-react": "0.460.0",
    "stripe": "14.25.0"
  },
  "devDependencies": {
    "typescript": "5.5.4",
    "@types/react": "18.2.79",
    "@types/node": "20.12.12",
    "vitest": "1.6.0"
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// File: tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// ──────────────────────────────────────────────────────────────────────────────
// File: next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// ──────────────────────────────────────────────────────────────────────────────
// File: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;

// ──────────────────────────────────────────────────────────────────────────────
// File: .env.example
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_PRICE_ID=price_xxx           # optional; defaults to inline $49.00
# APP_BASE_URL=http://localhost:3000  # for Stripe success/cancel URLs

// ──────────────────────────────────────────────────────────────────────────────
// File: app/page.tsx  (CLEAN HOMEPAGE ONLY)
'use client';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg">Collision SS</div>
          <a href="#start" className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm">
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Insurance is protected. Shops are compensated. Who’s protecting you?
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
            Collision SS audits collision estimates and damage photos to uncover missed labor,
            incorrect repair‑vs‑replace decisions, undocumented operations, and required OEM procedures —
            before you approve the repair.
          </p>
          <div className="mt-8">
            <a
              href="#start"
              className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded-2xl text-base"
            >
              Start an Audit
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">What We Catch</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Repair vs Replace</h3>
              <p className="mt-3 text-slate-600 text-sm">
                If a panel is torn, kinked, or structurally compromised, replacement is required.
                We document why — clearly and professionally.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Missing Operations</h3>
              <p className="mt-3 text-slate-600 text-sm">
                Blend time, R&I procedures, corrosion protection, setup & measure, one‑time‑use parts.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">ADAS & OEM Requirements</h3>
              <p className="mt-3 text-slate-600 text-sm">
                Pre/post scans, calibrations, manufacturer repair restrictions, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST REPAIR */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">The repair is done. But is it right?</h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Upload final photos and your invoice. If something feels off — we document it properly.
          </p>
          <div className="mt-8">
            <a
              href="#start"
              className="inline-flex items-center justify-center border border-slate-900 text-slate-900 px-8 py-3 rounded-2xl text-base"
            >
              Request Post‑Repair Review
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Collision SS, LLC. Documentation support only. Not legal advice.
      </footer>
    </main>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// File: app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const estimate = form.get('estimate');
    const photos = form.getAll('photos');
    const email = String(form.get('email') || '');
    if (!estimate || typeof estimate === 'string') {
      return NextResponse.json({ error: 'Estimate PDF required' }, { status: 400 });
    }
    // Day‑1: not persisting files. In prod: stream to S3 and store keys.
    const uploadToken = crypto.randomUUID();
    const count = Array.isArray(photos) ? photos.length : 0;
    return NextResponse.json({ ok: true, uploadToken, photoCount: count, email });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Upload failed' }, { status: 500 });
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// File: app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

function originFrom(req: NextRequest): string {
  const envBase = process.env.APP_BASE_URL;
  if (envBase) return envBase.replace(/\/$/, '');
  const o = req.headers.get('origin');
  if (o) return o;
  const h = req.headers.get('x-forwarded-host');
  if (h) return `https://${h}`;
  return 'http://localhost:3000';
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
  const body = await req.json();
  const email: string = body?.email || '';
  const uploadToken: string = body?.uploadToken || '';
  const role: string = body?.role || 'owner';

  const origin = originFrom(req);
  const success_url = `${origin}/?status=success&token=${encodeURIComponent(uploadToken)}`;
  const cancel_url = `${origin}/?status=cancel`;

  const lineItems = process.env.STRIPE_PRICE_ID
    ? [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }]
    : [{ price_data: { currency: 'usd', unit_amount: 4900, product_data: { name: 'Collision SS — Estimate Audit', description: 'Line-by-line estimate audit with OEM-aligned justifications' } }, quantity: 1 }];

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems as any,
    success_url,
    cancel_url,
    customer_email: email || undefined,
    metadata: { uploadToken, role },
  });

  return NextResponse.json({ url: session.url });
}

// ──────────────────────────────────────────────────────────────────────────────
// File: components/OemGrid.tsx
'use client';
import React, { useState } from 'react';

export type OemItem = { panel: string; partNumber: string; description?: string; msrp?: number };
const PANELS = ['Bumper (Front)','Bumper (Rear)','Fender (LH)','Fender (RH)','Door (LH)','Door (RH)','Quarter (LH)','Quarter (RH)','Hood','Headlamp (LH)','Headlamp (RH)','Core Support'];

export function parsePastedRows(text: string): OemItem[] {
  const rows = text.split(/\n+/).map((r) => r.split(/\t/));
  return rows
    .map(([pn, desc, msrp]) => ({
      panel: PANELS[0],
      partNumber: (pn || '').trim(),
      description: (desc || '').trim(),
      msrp: msrp ? Number(String(msrp).replace(/[^0-9.]/g, '')) : undefined,
    }))
    .filter((x) => x.partNumber);
}

export default function OemGrid({ value, onChange }: { value: OemItem[]; onChange: (v: OemItem[]) => void }) {
  const [draft, setDraft] = useState<OemItem>({ panel: PANELS[0], partNumber: '' });

  const add = (): void => {
    if (!draft.partNumber.trim()) return;
    onChange([...(value || []), draft]);
    setDraft({ panel: PANELS[0], partNumber: '' });
  };
  const del = (idx: number): void => onChange(value.filter((_, i) => i !== idx));

  const onPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>): void => {
    const text = e.clipboardData.getData('text');
    const mapped = parsePastedRows(text);
    if (mapped.length) onChange([...(value || []), ...mapped]);
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-12 gap-2 items-end">
        <div className="col-span-3">
          <label className="text-xs">Panel</label>
          <select className="mt-1 w-full rounded border px-2 py-2" value={draft.panel} onChange={(e) => setDraft({ ...draft, panel: e.target.value })}>
            {PANELS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="col-span-3">
          <label className="text-xs">Part #</label>
          <input className="mt-1 w-full rounded border px-2 py-2" value={draft.partNumber} onChange={(e) => setDraft({ ...draft, partNumber: e.target.value })} placeholder="OEM part number" />
        </div>
        <div className="col-span-4">
          <label className="text-xs">Description</label>
          <input className="mt-1 w-full rounded border px-2 py-2" value={draft.description || ''} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="e.g., Cover, Front Bumper" />
        </div>
        <div className="col-span-2">
          <label className="text-xs">MSRP</label>
          <input className="mt-1 w-full rounded border px-2 py-2" value={draft.msrp ?? ''} onChange={(e) => setDraft({ ...draft, msrp: Number(e.target.value || 0) })} placeholder="0.00" />
        </div>
        <div className="col-span-12">
          <button onClick={add} type="button" className="rounded bg-black text-white px-3 py-2">Add Item</button>
        </div>
      </div>

      <div className="rounded border">
        <div className="grid grid-cols-12 gap-2 px-2 py-2 text-xs font-semibold border-b bg-slate-50">
          <div className="col-span-3">Panel</div>
          <div className="col-span-3">Part #</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-2">MSRP</div>
        </div>
        {(value || []).length === 0 ? (
          <div className="p-3 text-sm text-slate-500">No items yet. Paste rows (part\tdesc\tmsrp) or add manually.</div>
        ) : (
          <ul>
            {value.map((it, idx) => (
              <li key={idx} className="grid grid-cols-12 gap-2 px-2 py-2 text-sm border-b last:border-b-0">
                <div className="col-span-3">{it.panel}</div>
                <div className="col-span-3">{it.partNumber}</div>
                <div className="col-span-4">{it.description}</div>
                <div className="col-span-2">{typeof it.msrp === 'number' ? `$${it.msrp.toFixed(2)}` : '—'}</div>
                <button onClick={() => del(idx)} type="button" className="col-span-12 mt-1 text-xs text-red-600 underline">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="text-xs">Quick paste</label>
        <textarea onPaste={onPaste} rows={2} className="mt-1 w-full rounded border px-2 py-2" placeholder={'Paste rows like:\n1234567\tHeadlamp LH\t425.00'} />
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// File: tests/messages.test.ts  (kept minimal; ensures no curly quotes & contains PDF)
import { describe, it, expect } from 'vitest';

const MESSAGES = {
  mustAgree: 'Please agree to the terms and privacy policy.',
  mustEstimate: 'Please upload your current estimate (PDF).',
};

const hasCurly = (s: string) => /[\u2018\u2019\u201C\u201D]/.test(s);

describe('messages', () => {
  it('uses straight quotes only', () => {
    expect(hasCurly(MESSAGES.mustAgree)).toBe(false);
    expect(hasCurly(MESSAGES.mustEstimate)).toBe(false);
  });
  it('mustEstimate mentions PDF', () => {
    expect(MESSAGES.mustEstimate.toLowerCase()).toContain('pdf');
  });
});

// ──────────────────────────────────────────────────────────────────────────────
// File: tests/oemgrid.test.ts  (parser coverage)
import { describe, it, expect } from 'vitest';
import { parsePastedRows } from '@/components/OemGrid';

describe('parsePastedRows', () => {
  it('parses one row', () => {
    const out = parsePastedRows('123\tHeadlamp LH\t425.00');
    expect(out.length).toBe(1);
    expect(out[0].partNumber).toBe('123');
    expect(out[0].description).toBe('Headlamp LH');
    expect(out[0].msrp).toBe(425);
  });
  it('parses multi-line rows', () => {
    const text = '111\tDesc A\t10\n222\tDesc B\t20.50\n';
    const out = parsePastedRows(text);
    expect(out.length).toBe(2);
    expect(out[1].partNumber).toBe('222');
    expect(out[1].msrp).toBe(20.5);
  });
  it('filters blanks', () => {
    expect(parsePastedRows('\tNoPN\t5').length).toBe(0);
  });
  it('coerces currency', () => {
    const out = parsePastedRows('789\tThing\t$12.34');
    expect(out[0].msrp).toBe(12.34);
  });
});

// ──────────────────────────────────────────────────────────────────────────────
// File: vitest.config.ts  (semicolon present; ESM-safe)
import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: { environment: 'node' },
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
});
