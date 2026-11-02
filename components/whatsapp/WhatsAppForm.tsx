'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
  /** Extra check on a non-empty value; return an error message or null. */
  validate?: (value: string) => string | null;
};

type Props = {
  fields: Field[];
  buildMessage: (values: Record<string, string>) => string;
  submitLabel?: string;
  /** Values to pre-fill (e.g. from a link); applied when they change. */
  presets?: Record<string, string>;
};

export default function WhatsAppForm({
  fields,
  buildMessage,
  submitLabel = 'Send on WhatsApp',
  presets,
}: Props) {
  const initial = useMemo(
    () => Object.fromEntries(fields.map((f) => [f.name, ''])),
    [fields],
  );
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  useEffect(() => {
    if (presets && Object.keys(presets).length) {
      setValues((v) => ({ ...v, ...presets }));
    }
  }, [presets]);

  const message = useMemo(() => buildMessage(values), [values, buildMessage]);

  const errorFor = (f: Field): string | null => {
    const value = (values[f.name] ?? '').trim();
    if (!value) return f.required ? 'This is required.' : null;
    return f.validate ? f.validate(value) : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firstInvalid = fields.find((f) => errorFor(f));
    if (firstInvalid) {
      setTouched(Object.fromEntries(fields.map((f) => [f.name, true])));
      document.getElementById(`waf-${firstInvalid.name}`)?.focus();
      return;
    }
    const url = waLink(message);
    setSentUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const update =
    (name: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [name]: e.target.value }));
    };

  const blur = (name: string) => () =>
    setTouched((t) => ({ ...t, [name]: true }));

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,420px)]">
      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => {
          const error = touched[field.name] ? errorFor(field) : null;
          const invalid = Boolean(error);
          const id = `waf-${field.name}`;
          const shared =
            'mt-1.5 block w-full rounded-lg border bg-surface/40 px-3 py-2.5 text-base text-text placeholder:text-muted focus:outline-none focus:ring-2 sm:py-2 sm:text-sm';
          const state = invalid
            ? 'border-red-500/60 focus:ring-red-500/40'
            : 'border-border/70 focus:border-accent/60 focus:ring-accent/40';
          return (
            <div key={field.name}>
              <label htmlFor={id} className="block text-sm font-medium">
                {field.label}
                {field.required && (
                  <span className="text-accent" aria-hidden>
                    {' '}
                    *
                  </span>
                )}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={field.rows ?? 5}
                  value={values[field.name] ?? ''}
                  onChange={update(field.name)}
                  onBlur={blur(field.name)}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? `${id}-error` : undefined}
                  className={`${shared} ${state}`}
                />
              ) : field.type === 'select' ? (
                <select
                  id={id}
                  name={field.name}
                  value={values[field.name] ?? ''}
                  onChange={update(field.name)}
                  onBlur={blur(field.name)}
                  required={field.required}
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? `${id}-error` : undefined}
                  className={`${shared} ${state}`}
                >
                  <option value="">— select —</option>
                  {field.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  value={values[field.name] ?? ''}
                  onChange={update(field.name)}
                  onBlur={blur(field.name)}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? `${id}-error` : undefined}
                  className={`${shared} ${state}`}
                />
              )}
              {error && (
                <p id={`${id}-error`} className="mt-1 text-xs text-red-400">
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <MessageCircle size={18} strokeWidth={2.4} aria-hidden />
            {submitLabel}
          </button>
          {sentUrl ? (
            <p className="mt-3 flex items-start gap-2 text-sm text-emerald-300" role="status">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>
                WhatsApp opened — just tap send there. Didn&rsquo;t open?{' '}
                <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Open WhatsApp
                </a>
              </span>
            </p>
          ) : (
            <p className="mt-3 text-xs text-muted">
              Opens WhatsApp with the message pre-filled — nothing sends until
              you tap send there.
            </p>
          )}
        </div>
      </form>

      <aside className="lg:sticky lg:top-24 h-fit">
        <div className="rounded-2xl border border-border/70 bg-surface/40 p-5">
          <h3 className="font-display font-semibold">Message preview</h3>
          <p className="mt-1 text-xs text-muted">
            This is exactly what will land in WhatsApp.
          </p>
          <pre className="mt-4 whitespace-pre-wrap break-words rounded-lg border border-border/60 bg-bg/60 p-4 font-sans text-sm text-text/90">
{message}
          </pre>
        </div>
      </aside>
    </div>
  );
}
