'use client';

import WhatsAppForm, { type Field } from './WhatsAppForm';

const FIELDS: Field[] = [
  {
    name: 'name',
    label: 'Your name',
    type: 'text',
    required: true,
    placeholder: 'Nimal Perera',
  },
  {
    name: 'device',
    label: 'Device',
    type: 'select',
    required: true,
    options: [
      'PS5',
      'PS5 Slim',
      'PS4 Pro',
      'PS4',
      'Xbox Series X',
      'Xbox Series S',
      'Xbox One',
      'Nintendo Switch',
      'Steam Deck',
      'Controller',
      'Other',
    ],
  },
  {
    name: 'issue',
    label: 'What’s wrong?',
    type: 'textarea',
    required: true,
    placeholder:
      'e.g. HDMI cable feels loose and picture cuts out. Fans loud since last week.',
    rows: 5,
  },
  {
    name: 'time',
    label: 'Preferred contact time',
    type: 'select',
    options: ['Anytime', 'Morning', 'Afternoon', 'Evening'],
  },
];

const buildMessage = (v: Record<string, string>) =>
  [
    'Hi GameHub LK,',
    '',
    'I’d like to book a repair.',
    '',
    `Name: ${v.name?.trim() || '—'}`,
    `Device: ${v.device || '—'}`,
    `Issue: ${v.issue?.trim() || '—'}`,
    `Preferred contact time: ${v.time || 'Anytime'}`,
    '',
    'Thanks!',
  ].join('\n');

export default function RepairForm() {
  return (
    <WhatsAppForm
      fields={FIELDS}
      buildMessage={buildMessage}
      submitLabel="Send repair request"
    />
  );
}
