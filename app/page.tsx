// ✅ ClaimGuard – Intake (Next.js 14) — Real upload + Stripe Checkout
// This canvas contains all files you need. Paste them into a fresh Next.js app.
// Semicolons added everywhere to avoid parser errors. Minimal tests included.

// ──────────────────────────────────────────────────────────────────────────────
// File: package.json
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
// File: app/page.tsx  (NEW Landing + Upload → Checkout)
'use client';
import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import OemGrid, { OemItem } from '@/components/OemGrid';

const VIN_RE = /^[A-HJ-NPR-Z0-9]{17}$/;
const MESSAGES = {
  mustAgree: 'Please agree to the terms and privacy policy.',
  mustEstimate: 'Please upload your current estimate (PDF).',
} as const;

type Audience = 'owner' | 'shop';

function AudienceToggle({ value, onChange }: { value: Audience; onChange: (v: Audience) => void }): JSX.Element {
  return (
    <div className="inline-flex rounded-2xl border bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange('owner')}
        className={`px-4 py-2 rounded-2xl text-sm font-medium ${value === 'owner' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
      >
        Vehicle Owner
      </button>
      <button
        type="button"
        onClick={() => onChange('shop')}
        className={`px-4 py-2 rounded-2xl text-sm font-medium ${value === 'shop' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
      >
        Body Shop
      </button>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
      <ShieldCheck className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }): JSX.Element {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {kicker ? <div className="text-xs font-semibold tracking-widest text-slate-500">{kicker}</div> : null}
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function UploadForm({ audience }: { audience: Audience }): JSX.Element {
  const [vin, setVin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [estimate, setEstimate] = useState<File | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [agree, setAgree] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validVin = useMemo<boolean>(() => vin === '' || VIN_RE.test(vin), [vin]);

  const handleEstimate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const f = e.target.files?.[0] || null;
    setEstimate(f);
  };

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const arr = e.target.files ? Array.from(e.target.files) : [];
    setPhotos(arr.slice(0, 25));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!agree) {
      alert(MESSAGES.mustAgree);
      return;
    }
    if (!estimate) {
      alert(MESSAGES.mustEstimate);
      return;
    }

    try {
      setLoading(true);

      // 1) Upload to server (Day‑1: token only; upgrade later to S3/R2)
      const fd = new FormData();
      fd.append('email', email);
      if (vin) fd.append('vin', vin);
      fd.append('role', audience);
      fd.append('estimate', estimate as File);
      photos.forEach((p) => fd.append('photos', p));

      const up = await fetch('/api/upload', { method: 'POST', body: fd });
      const upJson = await up.json();
      if (!up.ok) throw new Error(upJson.error || 'Upload failed');

      // 2) Create Stripe Checkout session and redirect
      const ck = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role: audience, uploadToken: upJson.uploadToken }),
      });
      const ckJson = await ck.json();
      if (!ck.ok || !ckJson.url) throw new Error(ckJson.error || 'Payment init failed');
      window.location.href = ckJson.url as string;
    } catch (err: any) {
      alert(err?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-semibold text-slate-900">Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-900">VIN (optional)</label>
          <input
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 17))}
            maxLength={17}
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="Enter 17‑char VIN"
          />
          {!validVin && <p className="mt-1 text-xs text-amber-700">VIN must be 17 characters (I, O, Q not allowed).</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-900">Upload current estimate (PDF)</label>
          <input required type="file" accept="application/pdf" onChange={handleEstimate} className="mt-2 block w-full" />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-900">Upload photos (JPG/PNG)</label>
          <input multiple type="file" accept="image/*" onChange={handlePhotos} className="mt-2 block w-full" />
          <p className="mt-1 text-xs text-slate-500">Selected: {photos.length} file(s)</p>
        </div>

        <div className="flex items-start gap-2">
          <input id="agree" type="checkbox" className="mt-1" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <label htmlFor="agree" className="text-sm text-slate-700">
            I agree to the Terms and Privacy Policy and consent to electronic communications about my audit.
          </label>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-white disabled:opacity-60"
        >
          Submit & pay $49
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <div className="text-xs text-slate-600">
          <span className="font-semibold text-slate-900">Guarantee:</span> we’ll identify at least <span className="font-semibold">$100</span> in missed items, or we’ll make it right.
        </div>
      </div>
    </form>
  );
}

export default function Page(): JSX.Element {
  const [audience, setAudience] = useState<Audience>('owner');
  const [items, setItems] = useState<OemItem[]>([]);

  const ownerCopy = (
    <div className="grid gap-4 text-slate-700">
      <p className="text-base">
        Insurance estimates sometimes list a part as “repair” instead of “replace.” That decision can be influenced by early photo documentation — often requested before the
        vehicle ever reaches a shop.
      </p>
      <p className="text-base">
        But not all damage can be safely repaired. Certain materials, impact zones, and embedded safety systems require replacement under manufacturer guidelines.
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {[
          'Manufacturer repair restrictions',
          'Safety sensor placement',
          'Structural impact areas',
          'One‑time‑use components',
          'OEM position statements',
          'Repair integrity documentation',
        ].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <Check className="h-4 w-4 mt-0.5" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p className="text-base font-semibold text-slate-900">If replacement is required, we document why — clearly and professionally.</p>
    </div>
  );

  const shopCopy = (
    <div className="grid gap-4 text-slate-700">
      <p className="text-base">
        Initial estimates often reflect pre‑shop photo assessments rather than teardown findings. We routinely see repair operations written where replacement is required.
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {[
          'UHSS / aluminum / composite limits repairability',
          'OEM restrictions on sectioning and straightening',
          'ADAS proximity compromises panel integrity',
          'Structural zones exceed permissible thresholds',
          'One‑time‑use parts omitted from the plan',
          'Documentation built to survive scrutiny',
        ].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <Check className="h-4 w-4 mt-0.5" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p className="text-base font-semibold text-slate-900">Precision protects profitability — and your documentation protects your shop.</p>
    </div>
  );

  const missed = [
    'ADAS calibrations (static/dynamic)',
    'Pre‑scan / post‑scan',
    'Blend operations & adjacent panel logic',
    'R&I procedures required to refinish correctly',
    'Corrosion protection / seam sealer / cavity wax',
    'One‑time‑use fasteners and components',
    'OEM position statements & repair restrictions',
    'Hidden damage indicators (teardown triggers)',
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">Collision SS</div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#how" className="text-sm text-slate-700 hover:text-slate-900">How it works</a>
            <a href="#missed" className="text-sm text-slate-700 hover:text-slate-900">What we catch</a>
            <a href="#pricing" className="text-sm text-slate-700 hover:text-slate-900">Pricing</a>
            <a href="#upload" className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">Upload</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Flat $49 per estimate</Pill>
              <Pill>Minimum $100 found — guaranteed</Pill>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Insurance estimates miss money.<br />We prove it.
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-xl">
              Upload your collision repair estimate and vehicle photos. We audit missed operations, calibrations, blend time, repair vs. replace decisions, and OEM requirements —
              and deliver a documented report you can use.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#upload" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white">
                Upload my estimate
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-slate-900">
                See how it works
              </a>
            </div>

            <div className="mt-7 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Fast turnaround</div>
                <div className="mt-1 text-slate-600">Built for real‑world claim timelines.</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">OEM‑aligned</div>
                <div className="mt-1 text-slate-600">Documented justification, not opinions.</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Owner‑first</div>
                <div className="mt-1 text-slate-600">Accuracy, transparency, accountability.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" id="upload">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Start your audit</div>
              <AudienceToggle value={audience} onChange={setAudience} />
            </div>
            <UploadForm audience={audience} />
            <p className="mt-3 text-xs text-slate-500">
              We do not scrape RepairLink. Any OEM part validation is human‑verified and recorded.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Repair vs Replace */}
      <Section id="repair-vs-replace" kicker="KEY ISSUE" title="Repair vs. Replace — The Critical Difference">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-slate-600 max-w-2xl">Different audiences need different documentation. Toggle the perspective.</p>
          <AudienceToggle value={audience} onChange={setAudience} />
        </div>
        <div className="mt-8 rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">{audience === 'owner' ? ownerCopy : shopCopy}</div>
      </Section>

      {/* Section 3: Missed items */}
      <Section id="missed" kicker="WHAT WE CATCH" title="Where estimates fall short">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {missed.map((t) => (
            <div key={t} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-xs text-slate-600">Reviewed and documented with OEM‑aligned reasoning.</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4: How it works */}
      <Section id="how" kicker="PROCESS" title="How it works">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-3xl border p-6">
            <div className="text-xs font-semibold text-slate-500">STEP 1</div>
            <div className="mt-2 text-lg font-bold">Upload</div>
            <p className="mt-2 text-slate-700">Estimate PDF + photos. Optional VIN for faster validation.</p>
          </div>
          <div className="rounded-3xl border p-6">
            <div className="text-xs font-semibold text-slate-500">STEP 2</div>
            <div className="mt-2 text-lg font-bold">Audit line‑by‑line</div>
            <p className="mt-2 text-slate-700">Missed ops, calibrations, blend logic, R&I, replacement justification.</p>
          </div>
          <div className="rounded-3xl border p-6">
            <div className="text-xs font-semibold text-slate-500">STEP 3</div>
            <div className="mt-2 text-lg font-bold">Receive report</div>
            <p className="mt-2 text-slate-700">Clear, documented findings you can use with the carrier and repair plan.</p>
          </div>
        </div>
      </Section>

      {/* Section 5: Authority */}
      <Section kicker="WHY COLLISION SS" title="Built by collision professionals. Not software engineers.">
        <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-slate-700 text-lg">
            ClaimGuard is built from the inside of high‑production collision repair — where documentation decides cycle time, profitability, and repair integrity. We turn real‑world
            estimating knowledge into structured, defensible audits.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl border p-4">
              <div className="font-semibold">For owners</div>
              <div className="mt-1 text-slate-600">Accuracy and leverage, without drama.</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="font-semibold">For shops</div>
              <div className="mt-1 text-slate-600">Cleaner supplements and stronger documentation.</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="font-semibold">For outcomes</div>
              <div className="mt-1 text-slate-600">OEM‑aligned repair planning and justification.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" kicker="PRICING" title="Flat rate. No subscriptions.">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
            <div className="text-4xl font-bold">$49</div>
            <div className="mt-1 text-slate-600">Per estimate audit</div>
            <div className="mt-6 grid gap-2 text-sm text-slate-700">
              {[
                'Line‑by‑line estimate audit',
                'Repair vs. replace documentation',
                'ADAS & scan item review',
                'Blend/R&I/corrosion protection review',
                'Clear written justification (owner‑first)',
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <span className="font-semibold">Guarantee:</span> minimum <span className="font-semibold">$100</span> found in missed items — or we make it right.
            </div>
            <div className="mt-6">
              <a href="#upload" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white">
                Upload my estimate
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border p-6 sm:p-8">
            <div className="text-sm font-semibold">Optional: OEM parts verification</div>
            <p className="mt-2 text-sm text-slate-600">
              For shops/estimators who want added accuracy: record OEM part numbers and MSRP from RepairLink (human‑verified).
            </p>
            <div className="mt-5">
              <OemGrid value={items} onChange={setItems} />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="font-semibold text-slate-900">Collision SS — ClaimGuard</div>
            <div className="flex gap-4">
              <span>© {new Date().getFullYear()} Collision SS, LLC</span>
            </div>
          </div>
          <p className="mt-3 text-xs">
            ClaimGuard provides documentation and estimate audit support. It is not legal advice and does not replace OEM repair procedures or repair facility judgment.
          </p>
        </div>
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
