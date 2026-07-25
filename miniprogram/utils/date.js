// 日期与教学周工具
const { SEMESTERS, EVENTS } = require('../data/calendar');

const DAY_MS = 24 * 60 * 60 * 1000;

function parseDate(str) {
  // 'YYYY-MM-DD' -> Date(本地时区零点)
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function fmtDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function todayStr() {
  return fmtDate(new Date());
}

function daysUntil(dateStr) {
  const now = parseDate(fmtDate(new Date()));
  return Math.round((parseDate(dateStr) - now) / DAY_MS);
}

// 计算某天所在学期与教学周(教学周从学期首日开始,每 7 天一周)
function getSemesterWeek(dateStr) {
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

// 找到今天之后最近的 N 个关键节点
function upcomingEvents(count) {
  const t = todayStr();
  const list = EVENTS.filter((ev) => {
    const end = ev.endDate || ev.date;
    return end >= t;
  }).sort((a, b) => (a.date < b.date ? -1 : 1));
  return list.slice(0, count || 3);
}

// 分钟数 <-> "HH:MM"
function minToTime(min) {
  const h = String(Math.floor(min / 60)).padStart(2, '0');
  const m = String(min % 60).padStart(2, '0');
  return `${h}:${m}`;
}

function timeToMin(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + (m || 0);
}

const WEEKDAYS_ZH = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

module.exports = {
  DAY_MS,
  parseDate,
  fmtDate,
  todayStr,
  daysUntil,
  getSemesterWeek,
  upcomingEvents,
  minToTime,
  timeToMin,
  WEEKDAYS_ZH
};
