import { SEMESTERS, EVENTS } from '../data/calendar.js';

export const DAY_MS = 24 * 60 * 60 * 1000;

export function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function fmtDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function todayStr() { return fmtDate(new Date()); }

export function daysUntil(dateStr) {
  const now = parseDate(fmtDate(new Date()));
  return Math.round((parseDate(dateStr) - now) / DAY_MS);
}

export function getSemesterWeek(dateStr) {
  const d = parseDate(dateStr);
  for (const sem of SEMESTERS) {
    const s = parseDate(sem.start);
    const e = parseDate(sem.end);
    if (d >= s && d <= e) {
      const week = Math.floor((d - s) / (7 * DAY_MS)) + 1;
      return { name: sem.name, week };
    }
  }
  return null;
}

export function upcomingEvents(count) {
  const t = todayStr();
  const list = EVENTS.filter((ev) => {
    const end = ev.endDate || ev.date;
    return end >= t;
  }).sort((a, b) => (a.date < b.date ? -1 : 1));
  return list.slice(0, count || 3);
}

export function minToTime(min) {
  const h = String(Math.floor(min / 60)).padStart(2, '0');
  const m = String(min % 60).padStart(2, '0');
  return `${h}:${m}`;
}

export function timeToMin(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + (m || 0);
}

export const WEEKDAYS_ZH = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
