import { SEMESTERS } from '../data/calendar.js';
import { getCourse } from '../data/courses.js';
import { getSlots } from './store.js';
import { parseDate, minToTime, todayStr, WEEKDAYS_ZH } from './date.js';

function pad2(n) { return String(n).padStart(2, '0'); }

function toICSDate(d) {
  return `${d.getFullYear()}${pad2(d.getMonth()+1)}${pad2(d.getDate())}T${pad2(d.getHours())}${pad2(d.getMinutes())}00`;
}

export function generateICS() {
  const slots = getSlots();
  if (!slots.length) return null;

  const t = todayStr();
  const sem = SEMESTERS.find(s => t >= s.start && t <= s.end)
    || SEMESTERS.find(s => s.start > t)
    || SEMESTERS[SEMESTERS.length - 1];

  const semStart = parseDate(sem.start);
  const semEnd = parseDate(sem.end);

  let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//HKU IDT Guide//EN\r\nCALSCALE:GREGORIAN\r\n';

  slots.forEach(s => {
    const target = s.day % 7; // JS getDay: 0=Sun
    const d = new Date(semStart);
    while (d.getDay() !== target) d.setDate(d.getDate() + 1);

    const startDT = new Date(d.getFullYear(), d.getMonth(), d.getDate(), Math.floor(s.startMin/60), s.startMin%60);
    const endDT = new Date(d.getFullYear(), d.getMonth(), d.getDate(), Math.floor(s.endMin/60), s.endMin%60);
    const untilDT = new Date(semEnd.getFullYear(), semEnd.getMonth(), semEnd.getDate(), 23, 59);

    const c = getCourse(s.code);
    const title = `${s.code} ${c ? c.titleZh : '课程'}`;

    ics += 'BEGIN:VEVENT\r\n';
    ics += `DTSTART:${toICSDate(startDT)}\r\n`;
    ics += `DTEND:${toICSDate(endDT)}\r\n`;
    ics += `RRULE:FREQ=WEEKLY;UNTIL=${toICSDate(untilDT)}\r\n`;
    ics += `SUMMARY:${title}\r\n`;
    ics += `LOCATION:${s.location || '香港大学'}\r\n`;
    ics += `DESCRIPTION:${sem.name} - HKU IDT Guide\r\n`;
    ics += 'END:VEVENT\r\n';
  });

  ics += 'END:VCALENDAR\r\n';
  return ics;
}

export function downloadICS() {
  const ics = generateICS();
  if (!ics) return false;
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'hku-idt-timetable.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return true;
}
