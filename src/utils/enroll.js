// 选课与课表联动:选课时自动把官方课表的时间/星期/地点/教师同步到每周课表
import { getCourse } from '../data/courses.js';
import { getSections, dayText } from '../data/timetable.js';
import { timeToMin, minToTime } from './date.js';
import * as store from './store.js';
import { showModal } from '../components/modal.js';
import { showToast } from '../components/toast.js';

const DAY_IDX = { MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6, SUN: 7 };

// 有固定上课时间的班次
function timedSections(code) {
  return getSections(code).filter(s => s.day && s.start && s.end);
}

function toSlot(code, sec) {
  return {
    code,
    term: sec.term,
    section: sec.section,
    day: DAY_IDX[sec.day],
    startMin: timeToMin(sec.start),
    endMin: timeToMin(sec.end),
    location: sec.venue || '',
    instructor: sec.instructor || ''
  };
}

function secText(s) {
  const sec = s.section ? ` · 班次 ${s.section}` : '';
  const dn = s.dateNote ? ` · 指定日期 ${s.dateNote}` : '';
  return `Sem ${s.term}${sec} · ${dayText(s.day)} ${s.start}-${s.end}${s.venue ? ' · ' + s.venue : ''}${s.instructor ? ' · ' + s.instructor : ''}${dn}`;
}

// 与已有课表时段的冲突:同一天时间重叠,且学期兼容(手动添加的时段无 term,视为两学期都占用)
function findClashes(newSlot) {
  return store.getSlots().filter(s =>
    s.day === newSlot.day &&
    !(s.endMin <= newSlot.startMin || s.startMin >= newSlot.endMin) &&
    (!s.term || !newSlot.term || s.term === newSlot.term)
  );
}

function doAdd(code, slot) {
  store.addCourse(code);
  if (slot) store.addSlot(slot);
  showToast(slot ? '已选课,时间已同步到课表' : '已加入选课');
}

// 冲突检查 → 确认取代 → 写入
function commitEnroll(code, slot, onDone) {
  if (!slot) { doAdd(code, null); onDone && onDone(); return; }
  const clashes = findClashes(slot);
  if (!clashes.length) { doAdd(code, slot); onDone && onDone(); return; }

  const codes = [];
  clashes.forEach(s => { if (codes.indexOf(s.code) < 0) codes.push(s.code); });
  const names = codes.map(c => { const cc = getCourse(c); return cc ? `${c} ${cc.titleZh}` : c; });
  const clashLines = clashes.map(s =>
    `<div style="padding:4px 0;color:#c0392b">· ${s.code} ${dayTextNum(s.day)} ${minToTime(s.startMin)}-${minToTime(s.endMin)}${s.location ? ' @' + s.location : ''}</div>`
  ).join('');

  showModal({
    title: '上课时间冲突',
    content: `以下已添加课程与 <b>${code}</b> 时间重叠:<div style="margin:8px 0">${clashLines}</div>冲突课程:<b>${names.join('、')}</b><br/>确认后将移除上述课程(含选课与课表时段),改为添加 ${code}。`,
    confirmText: '取代旧课程',
    cancelText: '保留原课表',
    onConfirm: () => {
      codes.forEach(c => {
        if (c !== code) store.removeCourse(c);
        store.removeSlotsByCode(c);
      });
      doAdd(code, slot);
      onDone && onDone();
    },
    onCancel: () => { showToast('已取消,课表未变动'); onDone && onDone(); }
  });
}

const WEEK_ZH_NUM = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
function dayTextNum(day) { return WEEK_ZH_NUM[day] || ''; }

// 选课入口:0 个班次直接加入;1 个班次直接同步;多个班次弹窗选班
export function enrollCourse(code, onDone) {
  const secs = timedSections(code);
  if (!secs.length) {
    store.addCourse(code);
    showToast('已加入选课(该课程暂无固定上课时间)');
    onDone && onDone();
    return;
  }
  if (secs.length === 1) {
    commitEnroll(code, toSlot(code, secs[0]), onDone);
    return;
  }
  // 多班次:radio 选择
  let chosen = 0;
  const radios = secs.map((s, i) =>
    `<label style="display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid #f0f1f4;cursor:pointer">
      <input type="radio" name="enroll-sec" value="${i}" ${i === 0 ? 'checked' : ''} style="margin-top:2px" />
      <span style="font-size:12px;color:#14312a;line-height:1.5">${secText(s)}</span>
    </label>`
  ).join('');
  showModal({
    title: `选择 ${code} 的班次`,
    content: `<div style="max-height:260px;overflow-y:auto">${radios}</div>`,
    confirmText: '确定选课',
    cancelText: '取消',
    onConfirm: () => commitEnroll(code, toSlot(code, secs[chosen]), onDone)
  });
  document.querySelectorAll('input[name="enroll-sec"]').forEach(el => {
    el.onchange = () => { chosen = Number(el.value); };
  });
}

// 退课:同时移除选课与课表中该课程的全部时段
export function unenrollCourse(code, onDone) {
  store.removeCourse(code);
  store.removeSlotsByCode(code);
  showToast('已移出选课,课表时段同步删除');
  onDone && onDone();
}

// 课程卡片上的时间摘要,如 "S1 周四 19:00-21:50 / S2 周一 19:00-21:50"
export function timeSummary(code) {
  const secs = timedSections(code);
  if (!secs.length) return '';
  const seen = [];
  secs.forEach(s => {
    const t = `S${s.term} ${dayText(s.day)} ${s.start}-${s.end}`;
    if (seen.indexOf(t) < 0) seen.push(t);
  });
  return seen.slice(0, 3).join(' / ') + (seen.length > 3 ? ' …' : '');
}
