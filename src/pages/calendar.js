import { EVENTS, TYPE_META } from '../data/calendar.js';
import { parseDate, fmtDate, todayStr, DAY_MS } from '../utils/date.js';
import { renderTabbar } from '../components/tabbar.js';

let state = { year: 2026, month: 9, selected: '', eventMap: {} };

function buildEventMap() {
  const map = {};
  EVENTS.forEach(ev => {
    const meta = TYPE_META[ev.type];
    const start = parseDate(ev.date);
    const end = ev.endDate ? parseDate(ev.endDate) : start;
    let cur = start;
    let guard = 0;
    while (cur <= end && guard < 400) {
      const key = fmtDate(cur);
      if (!map[key]) map[key] = [];
      map[key].push({ title: ev.title, type: ev.type, color: meta.color, label: meta.label, tentative: ev.tentative, rangeText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date });
      cur = new Date(cur.getTime() + DAY_MS);
      guard++;
    }
  });
  return map;
}

function render() {
  const container = document.getElementById('page-container');
  const { year, month, selected } = state;
  const today = todayStr();
  const eventMap = state.eventMap;

  // Build weeks
  const first = new Date(year, month - 1, 1);
  const offset = (first.getDay() + 6) % 7;
  const startDate = new Date(first.getTime() - offset * DAY_MS);
  const weeks = [];
  for (let w = 0; w < 6; w++) {
    const row = [];
    for (let d = 0; d < 7; d++) {
      const cur = new Date(startDate.getTime() + (w * 7 + d) * DAY_MS);
      const key = fmtDate(cur);
      const evs = eventMap[key] || [];
      row.push({ key, day: cur.getDate(), inMonth: cur.getMonth() + 1 === month, isToday: key === today, isSelected: key === selected, dots: evs.slice(0, 3).map(e => e.color) });
    }
    weeks.push(row);
  }

  // Month events
  const pad = String(month).padStart(2, '0');
  const monthStart = `${year}-${pad}-01`;
  const monthEnd = `${year}-${pad}-31`;
  const seen = {};
  const monthEvents = [];
  EVENTS.forEach(ev => {
    const end = ev.endDate || ev.date;
    if (ev.date <= monthEnd && end >= monthStart && !seen[ev.title]) {
      seen[ev.title] = true;
      const meta = TYPE_META[ev.type];
      monthEvents.push({ title: ev.title, color: meta.color, label: meta.label, tentative: ev.tentative, date: ev.date, dateText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date });
    }
  });
  monthEvents.sort((a, b) => a.date < b.date ? -1 : 1);

  // Selected day events
  const selEvs = (eventMap[selected] || []).map(e => ({ ...e, title: e.title + (e.tentative ? '(暂定)' : '') }));

  const legendList = Object.keys(TYPE_META).map(k => ({ label: TYPE_META[k].label, color: TYPE_META[k].color }));

  container.innerHTML = `
    <style>
      .cal-card{padding:16px 10px}
      .cal-head{display:flex;align-items:center;justify-content:space-between;padding:0 8px 12px}
      .cal-title{font-size:15px;font-weight:600;color:#14312a}
      .cal-nav{font-size:12px;color:#00573f;padding:4px 10px;cursor:pointer}
      .cal-row{display:flex}
      .cal-cell{flex:1;min-width:0;text-align:center;padding:6px 0 4px;border-radius:8px;cursor:pointer}
      .cal-cell.head{font-size:11px;color:#8a8f99;cursor:default}
      .cal-day{font-size:13px;color:#1f2430}
      .cal-cell.dim .cal-day{color:#c4c8ce}
      .cal-cell.today .cal-day{color:#00573f;font-weight:700}
      .cal-cell.selected{background:#00573f}
      .cal-cell.selected .cal-day{color:#fff;font-weight:600}
      .cal-dots{display:flex;justify-content:center;height:6px;margin-top:2px}
      .dot{width:4px;height:4px;border-radius:50%;margin:0 1px}
      .legend{display:flex;flex-wrap:wrap;padding:10px 8px 0;border-top:1px solid #eef0f2;margin-top:8px}
      .legend-item{display:flex;align-items:center;font-size:10px;color:#6b7280;margin:0 12px 6px 0}
      .legend-item .dot{margin-right:4px;width:6px;height:6px}
      .ev-bar{width:4px;min-height:28px;border-radius:2px;margin-right:10px;flex-shrink:0}
    </style>
    <div class="card cal-card">
      <div class="cal-head">
        <div class="cal-nav" id="cal-prev">‹ 上月</div>
        <div class="cal-title">${year} 年 ${month} 月</div>
        <div class="cal-nav" id="cal-next">下月 ›</div>
      </div>
      <div class="cal-row">${['一','二','三','四','五','六','日'].map(d => `<div class="cal-cell head">${d}</div>`).join('')}</div>
      ${weeks.map(row => `<div class="cal-row">${row.map(cell => `
        <div class="cal-cell ${cell.inMonth ? '' : 'dim'} ${cell.isToday ? 'today' : ''} ${cell.isSelected ? 'selected' : ''}" data-date="${cell.key}">
          <div class="cal-day">${cell.day}</div>
          <div class="cal-dots">${cell.dots.map(c => `<div class="dot" style="background:${c}"></div>`).join('')}</div>
        </div>
      `).join('')}</div>`).join('')}
      <div class="legend">${legendList.map(l => `<div class="legend-item"><div class="dot" style="background:${l.color}"></div>${l.label}</div>`).join('')}</div>
    </div>
    <div class="section-title">${selected} 当日安排</div>
    ${selEvs.length ? `<div class="card">${selEvs.map(e => `
      <div style="display:flex;align-items:flex-start;padding:6px 0">
        <div class="ev-bar" style="background:${e.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${e.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${e.label} · ${e.rangeText}</div></div>
      </div>
    `).join('')}</div>` : '<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">当日无校历事件</div>'}
    <div class="section-title">${month} 月事件一览</div>
    ${monthEvents.map(e => `
      <div class="card" style="display:flex;align-items:flex-start;padding:14px 16px;margin-top:0">
        <div class="ev-bar" style="background:${e.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${e.title}${e.tentative ? '(暂定)' : ''}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${e.label} · ${e.dateText}</div></div>
      </div>
    `).join('')}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">第一学期节点为官方公布;第二学期部分节点标注「暂定」,以大学最终公布为准</div>
  `;

  // Events
  container.querySelectorAll('.cal-cell:not(.head)').forEach(el => {
    el.onclick = () => { state.selected = el.dataset.date; render(); };
  });
  document.getElementById('cal-prev').onclick = () => { shiftMonth(-1); };
  document.getElementById('cal-next').onclick = () => { shiftMonth(1); };

  renderTabbar();
  const disc=document.createElement('div');
  disc.innerHTML='    <div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">\\n      感谢使用<br>Thank you for using\\n    </div>';
  container.appendChild(disc);
}

function shiftMonth(delta) {
  state.month += delta;
  if (state.month < 1) { state.month = 12; state.year--; }
  if (state.month > 12) { state.month = 1; state.year++; }
  render();
}

export default function calendarPage() {
  state.eventMap = buildEventMap();
  const t = todayStr();
  const d = parseDate(t);
  state.year = d.getFullYear();
  state.month = d.getMonth() + 1;
  state.selected = t;
  render();
}
