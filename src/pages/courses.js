import { COURSES, DEGREE_RULES, semesterText } from '../data/courses.js';
import * as store from '../utils/store.js';
import { enrollCourse, unenrollCourse, timeSummary } from '../utils/enroll.js';
import { navigate } from '../router.js';
import { renderTabbar } from '../components/tabbar.js';

let keyword = '';
let listFilter = 'all';
let semFilter = 'all';

function render() {
  const container = document.getElementById('page-container');
  const selection = store.getSelection();
  const ratings = store.getAllReviews();

  // Credit calc
  let listA = 0, discipline = 0, total = 0;
  selection.forEach(code => {
    const c = COURSES.find(x => x.code === code);
    if (!c || c.list === 'capstone') return;
    total += c.credits;
    if (c.list === 'A') listA += c.credits;
    if (c.list === 'A' || c.list === 'B') discipline += c.credits;
  });

  // Filter
  const kw = keyword.trim().toLowerCase();
  const courses = COURSES.filter(c => {
    if (listFilter !== 'all' && c.list !== listFilter) return false;
    if (semFilter !== 'all' && c.semester !== '1&2' && c.semester !== semFilter) return false;
    if (kw) { const hay = (c.code + c.title + c.titleZh).toLowerCase(); if (hay.indexOf(kw) < 0) return false; }
    return true;
  }).map(c => {
    const rs = ratings[c.code] || [];
    const avg = rs.length ? Math.round((rs.reduce((s, r) => s + (r.rating || 0), 0) / rs.length) * 10) / 10 : 0;
    return { ...c, semText: semesterText(c.semester), timeText: timeSummary(c.code), ratingAvg: avg, ratingCount: rs.length, selected: selection.indexOf(c.code) >= 0 };
  });

  const listTabs = [{ key: 'all', label: '全部' }, { key: 'A', label: 'List A 核心' }, { key: 'B', label: 'List B 选修' }, { key: 'capstone', label: '毕业设计' }];
  const semTabs = [{ key: 'all', label: '全部学期' }, { key: '1', label: '第一学期' }, { key: '2', label: '第二学期' }];
  const rules = DEGREE_RULES;

  container.innerHTML = `
    <style>
      .search-bar{padding:12px 16px 0}
      .search-input{width:100%;background:#fff;border:none;border-radius:999px;padding:10px 16px;font-size:13px;box-shadow:0 2px 8px rgba(0,45,32,0.06);outline:none}
      .tabs{display:flex;padding:12px 16px 0;flex-wrap:wrap;gap:8px}
      .ftab{font-size:12px;color:#4b5563;background:#fff;border-radius:999px;padding:5px 14px;cursor:pointer}
      .ftab.active{background:#00573f;color:#fff;font-weight:600}
      .course-card{cursor:pointer}
      .course-code{font-size:14px;font-weight:700;color:#00573f;margin-right:8px}
      .course-title{font-size:15px;font-weight:600;color:#1f2430;margin-top:6px}
      .course-en{font-size:11px;color:#8a8f99;margin-top:2px}
      .course-meta{font-size:11px;color:#6b7280;margin-top:8px}
      .course-time{font-size:11px;color:#00573f;margin-top:4px}
      .course-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px}
      .select-btn{font-size:12px;color:#00573f;background:#eef5f1;border-radius:999px;padding:5px 14px;cursor:pointer}
      .select-btn.selected{background:#00573f;color:#fff}
      .credit-bar{position:fixed;left:0;right:0;bottom:calc(56px + env(safe-area-inset-bottom, 0px));background:#fff;border-top:1px solid #e8eaee;display:flex;align-items:center;padding:10px 16px;z-index:20}
      .credit-info{display:flex;flex:1;justify-content:space-around}
      .cc{text-align:center}
      .cc-num{font-size:15px;font-weight:700;color:#c0392b}
      .cc-req{font-size:10px;color:#8a8f99}
      .cc.ok .cc-num{color:#00573f}
      .cc.fixed .cc-num{color:#6b7280}
      .cc-label{font-size:10px;color:#8a8f99}
      .credit-action{font-size:13px;color:#00573f;font-weight:600;padding:8px 0 8px 12px;cursor:pointer}
      .tt-card{margin:12px 16px 0;background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 2px 8px rgba(0,45,32,0.06)}
      .tt-title{font-size:14px;font-weight:700;color:#14312a}
      .tt-title-en{font-size:11px;color:#8a8f99;font-weight:400;margin-left:6px}
      .tt-note{font-size:11px;color:#6b7280;line-height:1.6;margin-top:6px}
      .tt-note-zh{font-size:11px;color:#8a8f99;line-height:1.6;margin-top:4px}
      .tt-dl{display:block;margin-top:10px;text-align:center;background:#00573f;color:#fff;border-radius:10px;padding:9px 12px;text-decoration:none}
      .tt-dl-en{font-size:12px;font-weight:600}
      .tt-dl-zh{font-size:11px;opacity:0.85;margin-top:2px}
    </style>
    <div class="tt-card">
      <div class="tt-title">课程时间表<span class="tt-title-en">Class Timetable</span></div>
      <div class="tt-note">Instructor information provided herein (mainly for UG courses) are for reference only and subject to changes. Students should consult the offering department(s) concerned for the latest update.</div>
      <div class="tt-note-zh">本表所列教师信息（主要针对本科课程）仅供参考，可能随时调整；请以开课院系发布的最新信息为准。</div>
      <a class="tt-dl" href="${import.meta.env.BASE_URL}class_timetable_2026-27_20260727.xlsx" download="2026-27 class_timetable_20260727.xlsx">
        <div class="tt-dl-en">⭳ Download Class Timetable (for 2026-27) (updated on 20260727 07:46)</div>
        <div class="tt-dl-zh">下载 2026-27 学年课程时间表（更新于 2026-07-27 07:46）</div>
      </a>
    </div>
    <div class="search-bar"><input class="search-input" id="course-search" placeholder="搜索课程代码 / 中英文名称" value="${keyword}" /></div>
    <div class="tabs">${listTabs.map(t => `<span class="ftab ${listFilter === t.key ? 'active' : ''}" data-list="${t.key}">${t.label}</span>`).join('')}</div>
    <div class="tabs">${semTabs.map(t => `<span class="ftab ${semFilter === t.key ? 'active' : ''}" data-sem="${t.key}">${t.label}</span>`).join('')}</div>
    ${courses.length ? courses.map(c => `
      <div class="card course-card" data-code="${c.code}">
        <div style="display:flex;align-items:center;flex-wrap:wrap">
          <span class="course-code">${c.code}</span>
          ${c.list === 'A' ? '<span class="tag">List A</span>' : c.list === 'B' ? '<span class="tag tag-gray">List B</span>' : '<span class="tag tag-warn">毕业设计</span>'}
          ${c.isNew2026 ? '<span class="tag tag-new">26级新增</span>' : ''}
          ${c.movedToB2026 ? '<span class="tag tag-warn">26级转List B</span>' : ''}
        </div>
        <div class="course-title">${c.titleZh}</div>
        <div class="course-en">${c.title}</div>
        <div class="course-meta">${c.credits} 学分 · ${c.semText}${c.cef ? ' · <span style="color:#b8741a">CEF 可报销</span>' : ''}</div>
        <div class="course-time">${c.timeText ? '🕒 ' + c.timeText : '🕒 时间待定'}</div>
        <div class="course-foot">
          <div>${c.ratingCount > 0 ? `<span class="star star-on">★</span> <span style="font-size:13px;font-weight:600;color:#f5a623;margin:0 4px">${c.ratingAvg}</span><span style="font-size:11px;color:#8a8f99">(${c.ratingCount} 条评价)</span>` : '<span style="font-size:11px;color:#8a8f99">暂无评价,去抢沙发</span>'}</div>
          <div class="select-btn ${c.selected ? 'selected' : ''}" data-toggle="${c.code}">${c.selected ? '已选 ✓' : '+ 选课'}</div>
        </div>
      </div>
    `).join('') : '<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">没有匹配的课程,换个关键词试试</div>'}
    ${selection.length ? `
      <div class="credit-bar">
        <div class="credit-info">
          <div class="cc ${listA >= rules.listAMin ? 'ok' : ''}"><span class="cc-num">${listA}</span><span class="cc-req">/${rules.listAMin}</span><div class="cc-label">List A</div></div>
          <div class="cc ${discipline >= rules.disciplineMin ? 'ok' : ''}"><span class="cc-num">${discipline}</span><span class="cc-req">/${rules.disciplineMin}</span><div class="cc-label">学科课</div></div>
          <div class="cc ${total >= rules.courseCredits ? 'ok' : ''}"><span class="cc-num">${total}</span><span class="cc-req">/${rules.courseCredits}</span><div class="cc-label">课程学分</div></div>
          <div class="cc fixed"><span class="cc-num">+${rules.dissertation}</span><div class="cc-label">毕业论文</div></div>
        </div>
        <div class="credit-action" id="go-schedule">排课表 ›</div>
      </div>
      <div style="height:60px"></div>
    ` : ''}
  `;

  // Events
  document.getElementById('course-search').oninput = (e) => { keyword = e.target.value; render(); };
  container.querySelectorAll('[data-list]').forEach(el => { el.onclick = () => { listFilter = el.dataset.list; render(); }; });
  container.querySelectorAll('[data-sem]').forEach(el => { el.onclick = () => { semFilter = el.dataset.sem; render(); }; });
  container.querySelectorAll('[data-toggle]').forEach(el => {
    el.onclick = (e) => {
      e.stopPropagation();
      const code = el.dataset.toggle;
      if (store.isSelected(code)) unenrollCourse(code, render);
      else enrollCourse(code, render);
    };
  });
  container.querySelectorAll('.course-card').forEach(el => {
    el.onclick = () => navigate(`/course-detail?code=${el.dataset.code}`);
  });
  const goSched = document.getElementById('go-schedule');
  if (goSched) goSched.onclick = () => navigate('/schedule');

  renderTabbar();
}

export default function coursesPage() {
  render();
}
