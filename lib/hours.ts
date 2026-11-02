import { SITE } from '@/lib/data';

// Day groups used in data/site.json → JS day numbers (0 = Sunday).
const DAY_GROUPS: Record<string, number[]> = {
  'Mon – Sat': [1, 2, 3, 4, 5, 6],
  'Mon – Fri': [1, 2, 3, 4, 5],
  Sat: [6],
  Sun: [0],
};
const DAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

function hoursFor(day: number) {
  const entry = SITE.hours.find((h) => DAY_GROUPS[h.days]?.includes(day));
  if (!entry) return null;
  const [open, close] = entry.time.split('–').map((t) => t.trim());
  return { open, close };
}

/** Current day/minute in Sri Lanka, regardless of the visitor's timezone. */
function nowInColombo(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Colombo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return {
    day: DAY_SHORT.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
}

export type OpenStatus = { open: boolean; label: string };

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInColombo(date);
  const today = hoursFor(day);
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, label: `Open now · until ${today.close}` };
  }
  if (today && minutes < toMinutes(today.open)) {
    return { open: false, label: `Closed · opens today ${today.open}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hoursFor(d);
    if (h) {
      const when = i === 1 ? 'tomorrow' : DAY_SHORT[d];
      return { open: false, label: `Closed · opens ${when} ${h.open}` };
    }
  }
  return { open: false, label: 'Closed' };
}
