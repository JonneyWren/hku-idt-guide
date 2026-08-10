import { getCourse } from '../data/courses.js';
import { SEMESTERS } from '../data/calendar.js';
import * as store from '../utils/store.js';
import { minToTime, timeToMin, WEEKDAYS_ZH, getSemesterWeek, todayStr } from '../utils/date.js';
import { showToast } from '../components/toast.js';
import { showModal } from '../components/modal.js';
import { downloadICS } from '../utils/ics.js';
import { renderTabbar } from '../components/tabbar.js';

const DAY_START = 8 * 60;
const DAY_END = 22 * 60;
const COLORS = ['#00573f', '#31597f', '#6b5b95', '#8a6d3b', '#7a5195', '#9c4f4f', '#2e6f5c', '#3d6e9e'];

let showAddModal = false;
let termFilter = 'all';
let form = { courseIndex: 0, dayIndex: 0, startTime: '18:30', endTime: '21:30', location: '' };

function render() {
  const container = document.getElementById('page-container');
  const weekInfo = getSemesterWeek(todayStr());
  const slots = store.getSlots().filter(s => termFilter === 'all' || !s.term || s.term === Number(termFilter));
  const selection = store.getSelection().map(code => getCourse(code)).filter(Boolean);
  const selectionNames = selection.map(c => `${c.code} ${c.titleZh}`);

  const colorMap = {};
  let ci = 0;
  const blocks = slots.map(s => {
    const c = getCourse(s.code);
    if (!(s.code in colorMap)) { colorMap[s.code] = COLORS[ci % COLORS.length]; ci++; }
    return {
      id: s.id, code: s.code, name: c ? c.titleZh : '', location: s.location,
      instructor: s.instructor || '', term: s.term || 0, section: s.section || '',
      leftPct: Math.round(((s.day - 1) * 100) / 7 * 1000) / 1000,
      top: s.startMin - DAY_START, height: Math.max(s.endMin - s.startMin, 40),
      color: colorMap[s.code], timeText: `${minToTime(s.startMin)}-${minToTime(s.endMin)}`
    };
  });

  const hours = [];
  for (let h = DAY_START / 60; h < DAY_END / 60; h++) hours.push(h);
  const gridHeight = DAY_END - DAY_START;

  container.innerHTML = `
    <style>
      .sched-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}
      .sched-title{font-size:18px;font-weight:700;color:#14312a}
      .sched-sub{font-size:11px;color:#8a8f99;margin-top:2px}
      .sched-actions{display:flex;gap:8px}
      .act{font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer}
      .act.plain{color:#00573f;background:#eef5f1}
      .act.primary{color:#fff;background:#00573f}
      .grid-head{display:flex;padding:0 0 4px 32px}
      .day-head{flex:1;text-align:center;font-size:11px;color:#6b7280}
      .day-head.weekend{color:#c0392b}
      .sched-scroll{height:${Math.min(gridHeight * 0.7, 500)}px;overflow-y:auto;position:relative;margin:0 8px}
      .grid{display:flex;position:relative}
      .time-col{width:32px;flex-shrink:0}
      .time-cell{height:60px;font-size:9px;color:#8a8f99;text-align:right;padding-right:4px}
      .days-wrap{position:relative;flex:1;border-left:1px solid #eef0f2}
      .day-col{position:absolute;top:0;bottom:0;border-right:1px solid #f5f6f8}
      .h-line{position:absolute;left:0;right:0;height:1px;background:#f5f6f8}
      .block{position:absolute;width:calc(100%/7 - 2px);border-radius:6px;padding:3px 4px;overflow:hidden;cursor:pointer;color:#fff;font-size:10px}
      .block-code{font-weight:600;font-size:10px;word-break:break-all;line-height:1.25}
      .block-name{font-size:9px;opacity:0.9;line-height:1.3}
      .block-time{opacity:0.85;font-size:9px}
      .block-loc{opacity:0.8;font-size:9px}
      .term-tabs{display:flex;gap:8px;padding:0 16px 8px}
      .term-tab{font-size:12px;color:#4b5563;background:#fff;border-radius:999px;padding:4px 14px;cursor:pointer}
      .term-tab.active{background:#00573f;color:#fff;font-weight:600}
      .empty-hint{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#8a8f99;font-size:13px}
      .empty-sub{font-size:11px;margin-top:4px}
      .pk-row{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #f0f1f4}
      .pk-label{font-size:13px;color:#14312a;width:50px;flex-shrink:0}
      .pk-value{font-size:13px;color:#00573f}
      .pk-select,.pk-input{flex:1;border:1px solid #e8eaee;border-radius:8px;padding:8px 10px;font-size:13px;outline:none}
    </style>
    <div class="sched-head">
      <div><div class="sched-title">每周课表</div><div class="sched-sub">${weekInfo ? `${weekInfo.name} · 第 ${weekInfo.week} 周` : '当前不在教学周内'}</div></div>
      <div class="sched-actions">
        ${blocks.length ? '<div class="act plain" id="copy-btn">复制</div>' : ''}
        ${blocks.length ? '<div class="act plain" id="ics-btn">导出日历</div>' : ''}
        <div class="act primary" id="add-btn">+ 添加</div>
      </div>
    </div>
    <div class="term-tabs">${[{ k: 'all', l: '全部' }, { k: '1', l: '第一学期' }, { k: '2', l: '第二学期' }].map(t => `<span class="term-tab ${termFilter === t.k ? 'active' : ''}" data-term="${t.k}">${t.l}</span>`).join('')}</div>
    <div class="grid-head">${WEEKDAYS_ZH.map((d, i) => `<div class="day-head ${i >= 5 ? 'weekend' : ''}">${d}</div>`).join('')}</div>
    <div class="sched-scroll">
      <div class="grid">
        <div class="time-col">${hours.map(h => `<div class="time-cell">${h}:00</div>`).join('')}</div>
        <div class="days-wrap" style="height:${gridHeight}px">
          ${WEEKDAYS_ZH.map((_, i) => `<div class="day-col" style="left:${(i*100/7)}%;width:${100/7}%"></div>`).join('')}
          ${hours.map((_, i) => `<div class="h-line" style="top:${i * 60}px"></div>`).join('')}
          ${blocks.map(b => `<div class="block" data-id="${b.id}" style="left:${b.leftPct}%;top:${b.top}px;height:${b.height}px;background:${b.color}"><div class="block-code">${b.code}</div>${b.name ? `<div class="block-name">${b.name}</div>` : ''}<div class="block-time">${b.term ? `S${b.term} ` : ''}${b.timeText}</div>${b.location ? `<div class="block-loc">${b.location}</div>` : ''}${b.instructor ? `<div class="block-loc">${b.instructor}</div>` : ''}</div>`).join('')}
          ${blocks.length === 0 ? '<div class="empty-hint"><div>课表还是空的</div><div class="empty-sub">在「课程」页点「+ 选课」自动同步,或点右上角「+ 添加」手动录入</div></div>' : ''}
        </div>
      </div>
    </div>
    <div class="muted" style="text-align:center;padding:10px 16px">点击课程块可删除时段;「导出日历」生成 .ics 文件可导入任意日历应用</div>
    ${showAddModal ? `
      <div class="modal-mask" id="add-mask">
        <div class="modal" style="padding:20px">
          <div class="modal-title">添加上课时段</div>
          ${selection.length ? `
            <div class="pk-row"><span class="pk-label">课程</span><select class="pk-select" id="pk-course">${selectionNames.map((n, i) => `<option value="${i}" ${form.courseIndex === i ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
            <div class="pk-row"><span class="pk-label">星期</span><select class="pk-select" id="pk-day">${WEEKDAYS_ZH.map((d, i) => `<option value="${i}" ${form.dayIndex === i ? 'selected' : ''}>${d}</option>`).join('')}</select></div>
            <div class="pk-row"><span class="pk-label">开始</span><input type="time" class="pk-input" id="pk-start" value="${form.startTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">结束</span><input type="time" class="pk-input" id="pk-end" value="${form.endTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">地点</span><input class="pk-input" id="pk-loc" placeholder="如 CB313 / 线上(选填)" value="${form.location}" /></div>
            <div class="modal-btns"><div class="m-btn cancel" id="add-cancel">取消</div><div class="m-btn confirm" id="add-save">保存</div></div>
          ` : '<div style="text-align:center;color:#8a8f99;font-size:13px;padding:20px 0">请先在「课程」页加入选课</div><div class="modal-btns"><div class="m-btn cancel" id="add-cancel">关闭</div></div>'}
        </div>
      </div>
    ` : ''}
  `;

  // Events
  container.querySelectorAll('[data-term]').forEach(el => { el.onclick = () => { termFilter = el.dataset.term; render(); }; });
  document.getElementById('add-btn').onclick = () => { showAddModal = true; render(); };
  const addCancel = document.getElementById('add-cancel');
  if (addCancel) addCancel.onclick = () => { showAddModal = false; render(); };
  const addMask = document.getElementById('add-mask');
  if (addMask) addMask.onclick = (e) => { if (e.target === addMask) { showAddModal = false; render(); } };
  const addSave = document.getElementById('add-save');
  if (addSave) addSave.onclick = () => {
    const courseIdx = Number(document.getElementById('pk-course').value);
    const dayIdx = Number(document.getElementById('pk-day').value);
    const startTime = document.getElementById('pk-start').value;
    const endTime = document.getElementById('pk-end').value;
    const location = document.getElementById('pk-loc').value;
    const startMin = timeToMin(startTime);
    const endMin = timeToMin(endTime);
    if (endMin <= startMin) { showToast('结束时间需晚于开始时间'); return; }
    if (startMin < DAY_START || endMin > DAY_END) { showToast('时段需在 08:00-22:00 之间'); return; }
    const day = dayIdx + 1;
    const clash = store.getSlots().some(s => s.day === day && !(s.endMin <= startMin || s.startMin >= endMin));
    if (clash) { showToast('该时段与已有课程冲突'); return; }
    const course = selection[courseIdx];
    store.addSlot({ code: course.code, day, startMin, endMin, location: location.trim() });
    showAddModal = false;
    form = { courseIndex: courseIdx, dayIndex: dayIdx, startTime, endTime, location: '' };
    showToast('已添加');
    render();
  };

  // Block tap to delete
  container.querySelectorAll('.block').forEach(el => {
    el.onclick = () => {
      showModal({
        title: '删除该上课时段?',
        content: '删除后不影响「我的选课」',
        onConfirm: () => { store.removeSlot(el.dataset.id); render(); }
      });
    };
  });

  // Copy
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) copyBtn.onclick = () => {
    const lines = store.getSlots().slice().sort((a, b) => a.day - b.day || a.startMin - b.startMin).map(s => {
      const c = getCourse(s.code);
      return `${WEEKDAYS_ZH[s.day - 1]} ${minToTime(s.startMin)}-${minToTime(s.endMin)} ${s.code} ${c ? c.titleZh : ''}${s.location ? ' @' + s.location : ''}`;
    });
    navigator.clipboard.writeText(lines.join('\n')).then(() => showToast('已复制到剪贴板')).catch(() => showToast('复制失败'));
  };

  // ICS export
  const icsBtn = document.getElementById('ics-btn');
  if (icsBtn) icsBtn.onclick = () => {
    const ok = downloadICS();
    if (ok) showToast('已生成 .ics 文件,请导入日历应用');
    else showToast('课表为空');
  };

  renderTabbar();
  const disc=document.createElement('div');
  disc.innerHTML='    <div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">\\n      感谢使用<br>Thank you for using\\n    </div>';
  container.appendChild(disc);
}

export default function schedulePage() {
  showAddModal = false;
  termFilter = 'all';
  render();
}
