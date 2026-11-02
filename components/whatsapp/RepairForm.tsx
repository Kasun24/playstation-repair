'use client';

import { useEffect, useMemo, useState } from 'react';
import { Hash } from 'lucide-react';
import WhatsAppForm, { type Field } from './WhatsAppForm';

const CONSOLE_OPTIONS = [
  'PS5',
  'PS5 Slim',
  'PS5 Pro',
  'PS4',
  'PS4 Pro',
  'PS4 Slim',
  'Xbox Series X',
  'Xbox Series S',
  'Xbox One X',
  'Xbox One S',
  'Xbox One',
  'DualSense (PS5) Controller',
  'DualShock 4 (PS4) Controller',
  'Xbox Controller',
  'Other',
];

const FAULT_OPTIONS = [
  'No display / no signal',
  'HDMI port loose or damaged',
  'Disc drive not reading / not ejecting',
  'Software issue / boot loop / update fail',
  'Blue Light of Death (BLOD)',
  'Blue Light + 1 beep',
  'Loud fans / overheating / shutting down',
  'Storage full / SSD upgrade',
  'Controller stick drift',
  'Controller sticky trigger / dead button',
  'Controller not charging',
  'Something else — I’ll describe below',
];

// Repair id (data/repairs.json) → matching option in FAULT_OPTIONS, for ?repair=<id> links.
const FAULT_BY_REPAIR: Record<string, string> = {
  'no-display': FAULT_OPTIONS[0],
  'hdmi-port': FAULT_OPTIONS[1],
  'bluray-drive': FAULT_OPTIONS[2],
  'software-issues': FAULT_OPTIONS[3],
  blod: FAULT_OPTIONS[4],
  'blue-light-beep': FAULT_OPTIONS[5],
  'clean-thermal': FAULT_OPTIONS[6],
  'storage-upgrade': FAULT_OPTIONS[7],
  'stick-drift': FAULT_OPTIONS[8],
  'trigger-buttons': FAULT_OPTIONS[9],
  'charging-port': FAULT_OPTIONS[10],
};

const validatePhone = (v: string) => {
  const digits = v.replace(/\D/g, '');
  return /^[\d\s+()-]+$/.test(v) && digits.length >= 9 && digits.length <= 13
    ? null
    : 'Enter a valid phone number, e.g. 077 123 4567.';
};

function generateOrderId(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PSR-${y}${m}${d}-${rand}`;
}

const FIELDS: Field[] = [
  {
    name: 'name',
    label: 'Your name',
    type: 'text',
    required: true,
    placeholder: 'Nimal Perera',
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    required: true,
    placeholder: '07X XXX XXXX',
    validate: validatePhone,
  },
  {
    name: 'contact',
    label: 'Additional contact (optional)',
    type: 'text',
    placeholder: 'Email, alt. number, or best time to reach you',
  },
  {
    name: 'console',
    label: 'Console model',
    type: 'select',
    required: true,
    options: CONSOLE_OPTIONS,
  },
  {
    name: 'fault',
    label: 'What’s the issue?',
    type: 'select',
    required: true,
    options: FAULT_OPTIONS,
  },
  {
    name: 'notes',
    label: 'Extra details (optional)',
    type: 'textarea',
    placeholder:
      'e.g. Started last week after a drop, or fault only happens on cold boot.',
    rows: 4,
  },
];

export default function RepairForm() {
  const [orderId, setOrderId] = useState('');
  const [presets, setPresets] = useState<Record<string, string>>();

  useEffect(() => {
    setOrderId(generateOrderId());
    const repair = new URLSearchParams(window.location.search).get('repair');
    const fault = repair ? FAULT_BY_REPAIR[repair] : undefined;
    if (fault) setPresets({ fault });
  }, []);

  const buildMessage = useMemo(
    () => (v: Record<string, string>) => {
      const lines = [
        'Hi PlayStation Repair Sri Lanka,',
        '',
        `Booking ref: ${orderId || '(pending)'}`,
        '',
        'I’d like to book a repair.',
        '',
        `Name: ${v.name?.trim() || '—'}`,
        `Phone: ${v.phone?.trim() || '—'}`,
      ];
      if (v.contact?.trim()) {
        lines.push(`Other contact: ${v.contact.trim()}`);
      }
      lines.push(`Console: ${v.console || '—'}`);
      lines.push(`Issue: ${v.fault || '—'}`);
      if (v.notes?.trim()) {
        lines.push('', `Notes: ${v.notes.trim()}`);
      }
      lines.push('', 'Thanks!');
      return lines.join('\n');
    },
    [orderId],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 rounded-2xl border border-accent/30 bg-accent/5 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent"
            aria-hidden
          >
            <Hash size={16} strokeWidth={2.4} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              Your booking reference
            </p>
            <p
              className="mt-0.5 font-display text-lg font-semibold tracking-tight"
              suppressHydrationWarning
            >
              {orderId || 'Generating…'}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted sm:max-w-[16rem] sm:text-right">
          Kept in your WhatsApp message so we can pick up the thread later.
        </p>
      </div>

      <WhatsAppForm
        fields={FIELDS}
        buildMessage={buildMessage}
        submitLabel="Send repair request"
        presets={presets}
      />
    </div>
  );
}
