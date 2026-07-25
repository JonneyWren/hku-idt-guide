const { EVENTS, TYPE_META } = require('../../data/calendar');
const { parseDate, fmtDate, todayStr, DAY_MS } = require('../../utils/date');

// 把事件(含跨天区间)展开为 dateStr -> [event]
function buildEventMap() {
  const map = {};
  EVENTS.forEach((ev) => {
    const meta = TYPE_META[ev.type];
    const start = parseDate(ev.date);
    const end = ev.endDate ? parseDate(ev.endDate) : start;
    let cur = start;
    let guard = 0;
    while (cur <= end && guard < 400) {
      const key = fmtDate(cur);
      if (!map[key]) map[key] = [];
      map[key].push({
        title: ev.title,
        type: ev.type,
        color: meta.color,
        label: meta.label,
        tentative: ev.tentative,
        rangeText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date
      });
      cur = new Date(cur.getTime() + DAY_MS);
      guard += 1;
    }
  });
  return map;
}

Page({
  data: {
    year: 2026,
    month: 9,
    weeks: [],
    selected: '',
    selectedEvents: [],
    monthEvents: [],
    weekHeader: ['一', '二', '三', '四', '五', '六', '日'],
    legendList: [],
    today: ''
  },

  onLoad() {
    this.eventMap = buildEventMap();
    const t = todayStr();
    const d = parseDate(t);
    const legendList = Object.keys(TYPE_META).map((k) => ({
      label: TYPE_META[k].label,
      color: TYPE_META[k].color
    }));
    this.setData({ today: t, selected: t, legendList });
    this.buildMonth(d.getFullYear(), d.getMonth() + 1);
    this.showDay(t);
  },

  buildMonth(year, month) {
    const first = new Date(year, month - 1, 1);
    const offset = (first.getDay() + 6) % 7; // 周一为一周之首
    const startDate = new Date(first.getTime() - offset * DAY_MS);
    const weeks = [];
    for (let w = 0; w < 6; w += 1) {
      const row = [];
      for (let d = 0; d < 7; d += 1) {
        const cur = new Date(startDate.getTime() + (w * 7 + d) * DAY_MS);
        const key = fmtDate(cur);
        const evs = this.eventMap[key] || [];
        row.push({
          key,
          day: cur.getDate(),
          inMonth: cur.getMonth() + 1 === month,
          isToday: key === this.data.today,
          isSelected: key === this.data.selected,
          dots: evs.slice(0, 3).map((e) => e.color)
        });
      }
      weeks.push(row);
    }

    // 本月事件一览(去重、排序)
    const pad = String(month).padStart(2, '0');
    const monthStart = `${year}-${pad}-01`;
    const monthEnd = `${year}-${pad}-31`;
    const seen = {};
    const monthEvents = [];
    EVENTS.forEach((ev) => {
      const end = ev.endDate || ev.date;
      if (ev.date <= monthEnd && end >= monthStart && !seen[ev.title]) {
        seen[ev.title] = true;
        const meta = TYPE_META[ev.type];
        monthEvents.push({
          title: ev.title,
          color: meta.color,
          label: meta.label,
          tentative: ev.tentative,
          date: ev.date,
          dateText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date
        });
      }
    });
    monthEvents.sort((a, b) => (a.date < b.date ? -1 : 1));

    this.setData({ year, month, weeks, monthEvents });
  },

  showDay(dateStr) {
    const evs = (this.eventMap[dateStr] || []).map((e) => ({
      color: e.color,
      label: e.label,
      rangeText: e.rangeText,
      title: e.title + (e.tentative ? '(暂定)' : '')
    }));
    const weeks = this.data.weeks.map((row) =>
      row.map((cell) => Object.assign({}, cell, { isSelected: cell.key === dateStr }))
    );
    this.setData({ selected: dateStr, selectedEvents: evs, weeks });
  },

  onDayTap(e) {
    this.showDay(e.currentTarget.dataset.date);
  },

  shiftMonth(delta) {
    let { year, month } = this.data;
    month += delta;
    if (month < 1) { month = 12; year -= 1; }
    if (month > 12) { month = 1; year += 1; }
    this.buildMonth(year, month);
  },

  prevMonth() { this.shiftMonth(-1); },
  nextMonth() { this.shiftMonth(1); }
});
