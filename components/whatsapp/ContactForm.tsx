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
    name: 'topic',
    label: 'What’s this about?',
    type: 'select',
    required: true,
    options: [
      'General question',
      'Console availability',
      'Game availability',
      'Accessory question',
      'Repair enquiry',
      'Trade-in / pre-owned',
      'Something else',
    ],
  },
  {
    name: 'message',
    label: 'Your message',
    type: 'textarea',
    required: true,
    placeholder:
      'e.g. Do you have PS5 Slim in stock this week? Looking to pick up on Saturday.',
    rows: 5,
  },
  {
    name: 'time',
    label: 'Best time to reply',
    type: 'select',
    options: ['Anytime', 'Morning', 'Afternoon', 'Evening'],
  },
];

const buildMessage = (v: Record<string, string>) =>
  [
    'Hi PlayStation Repair Sri Lanka,',
    '',
    `Name: ${v.name?.trim() || '—'}`,
    `Topic: ${v.topic || '—'}`,
    '',
    'Message:',
    v.message?.trim() || '—',
    '',
    `Best time to reply: ${v.time || 'Anytime'}`,
    '',
    'Thanks!',
  ].join('\n');

export default function ContactForm() {
  return (
    <WhatsAppForm
      fields={FIELDS}
      buildMessage={buildMessage}
      submitLabel="Send on WhatsApp"
    />
  );
}
