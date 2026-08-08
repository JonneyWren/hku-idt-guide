import { getCourse, semesterText, LIST_META, NO_DESC_TEXT } from '../data/courses.js';
import { getSections, dayText } from '../data/timetable.js';
import { fmtDate } from '../utils/date.js';
import * as store from '../utils/store.js';
import { enrollCourse, unenrollCourse } from '../utils/enroll.js';
import { getQuery, navigate } from '../router.js';
import { showToast } from '../components/toast.js';
import { renderTabbar } from '../components/tabbar.js';

let formRating = 5;
let formNickname = '';
let formContent = '';

function render(code) {
  const container = document.getElementById('page-container');
  const course = getCourse(code);
  if (!course) {
    showToast('课程不存在');
    setTimeout(() => navigate('/courses'), 800);
    return;
  }

  const reviews = store.getReviews(code).map(r => ({ ...r, dateText: fmtDate(new Date(r.ts)) }));
  const sum = store.getRatingSummary(code);
  const selected = store.isSelected(code);
  const semText = semesterText(course.semester);
  const sections = getSections(code);
  const stars = [1, 2, 3, 4, 5];
  const meta = LIST_META[course.list] || {};

  // Update nav title
  document.querySelector('.nav-title').textContent = course.code;

  container.innerHTML = `
    <style>
      .detail-hero{background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:20px 16px;color:#fff}
      .hero-tag{display:inline-block;font-size:10px;background:rgba(255,255,255,0.2);border-radius:999px;padding:2px 10px;margin-right:6px;margin-bottom:6px}
      .hero-code{font-size:20px;font-weight:700;margin-top:8px}
      .hero-title-zh{font-size:16px;font-weight:600;margin-top:4px}
      .hero-zh-note{font-size:10px;font-weight:400;opacity:0.75;margin-left:6px}
      .hero-en{font-size:11px;opacity:0.85;margin-top:4px}
      .hero-chips{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px}
      .hero-chip{font-size:11px;background:rgba(255,255,255,0.15);border-radius:999px;padding:3px 12px}
      .hero-btn{margin-top:14px;text-align:center;padding:10px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;background:rgba(255,255,255,0.15)}
      .hero-btn.selected{background:#fff;color:#00573f}
      .review{border-bottom:1px solid #f0f1f4;padding:10px 0}
      .review:last-child{border-bottom:none}
      .review-head{display:flex;align-items:center;gap:8px;margin-bottom:4px}
      .review-nick{font-size:13px;font-weight:600;color:#14312a}
      .review-date{font-size:11px;color:#8a8f99;margin-left:auto}
      .review-content{font-size:12px;color:#5b5f66;line-height:1.6}
      .form-row{display:flex;align-items:center;margin-bottom:12px}
      .form-label{font-size:13px;color:#14312a;width:40px;flex-shrink:0}
      .form-input{flex:1;border:1px solid #e8eaee;border-radius:8px;padding:8px 12px;font-size:13px;outline:none}
      .form-textarea{width:100%;border:1px solid #e8eaee;border-radius:8px;padding:10px 12px;font-size:13px;min-height:80px;resize:vertical;outline:none;margin-bottom:12px}
      .sec-item{padding:10px 0;border-bottom:1px solid #f0f1f4}
      .sec-item:last-of-type{border-bottom:none}
      .sec-head{display:flex;align-items:center;flex-wrap:wrap;gap:8px}
      .sec-term{flex-shrink:0;font-size:10px;font-weight:600;border-radius:4px;padding:2px 6px}
      .sec-term.t1{background:#e8f3ef;color:#00573f}
      .sec-term.t2{background:#e9effa;color:#1a56b8}
      .sec-name{flex-shrink:0;font-size:10px;font-weight:600;border-radius:4px;padding:2px 6px;background:#f2eef8;color:#5b4b86}
      .sec-time{font-size:12px;font-weight:600;color:#14312a}
      .sec-line{font-size:11px;color:#6b7280;line-height:1.6;margin-top:4px;word-break:break-word}
      .sec-date{font-size:11px;color:#b8741a;line-height:1.6;margin-top:4px;word-break:break-word}
      .note-box{background:#fdf6e9;border-radius:8px;padding:10px 12px;margin-top:10px;font-size:11px;color:#8a6d3b;line-height:1.7}
    </style>
    <div class="detail-hero">
      <div>
        ${meta.label ? `<span class="hero-tag">${meta.full || meta.label}</span>` : ''}
        ${course.isNew2026 ? '<span class="hero-tag">26级新增</span>' : ''}
        ${course.movedToB2026 ? '<span class="hero-tag">26级转List B</span>' : ''}
      </div>
      <div class="hero-code">${course.code}</div>
      <div class="hero-title-zh">${course.titleZh}${course.zhOfficial ? '' : '<span class="hero-zh-note">非官方译名</span>'}</div>
      <div class="hero-en">${course.title}</div>
      <div class="hero-chips">
        <span class="hero-chip">${course.credits} 学分</span>
        <span class="hero-chip">${semText}</span>
        ${course.sections && course.sections.length ? `<span class="hero-chip">班次 ${course.sections.join('/')}</span>` : ''}
        ${course.cef ? '<span class="hero-chip">CEF 可报销</span>' : ''}
        ${sum.count > 0 ? `<span class="hero-chip">★ ${sum.avg}(${sum.count})</span>` : ''}
      </div>
      <div class="hero-btn ${selected ? 'selected' : ''}" id="toggle-select">${selected ? '已加入我的选课 ✓' : '+ 加入我的选课'}</div>
    </div>
    <div class="card">
      <div class="card-title">课程简介</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">${course.desc || NO_DESC_TEXT}</div>
      ${course.prereq ? `<div style="margin-top:8px;font-size:11px"><span style="color:#00573f;font-weight:600">先修要求</span> ${course.prereq}</div>` : ''}
      ${course.exclusive ? `<div style="margin-top:4px;font-size:11px"><span style="color:#c0392b;font-weight:600">互斥课程</span> ${course.exclusive}</div>` : ''}
      ${course.zhOfficial ? '' : '<div style="margin-top:8px;font-size:10px;color:#8a8f99">中文课名为本站译名（非官方），选课与成绩单请以英文原名为准。</div>'}
    </div>
    ${sections.length ? `
    <div class="section-title">2026-27 第一学期开课安排(官方课表)</div>
    <div class="card">
      ${sections.map(s => `
        <div class="sec-item">
          <div class="sec-head">
            <span class="sec-term ${s.term === 1 ? 't1' : 't2'}">Sem ${s.term}</span>
            ${s.section ? `<span class="sec-name">班次 ${s.section}</span>` : ''}
            <span class="sec-time">${s.day ? `${dayText(s.day)} ${s.start}-${s.end}` : '时间待定'}</span>
          </div>
          ${s.venue ? `<div class="sec-line">📍 ${s.venue}</div>` : ''}
          ${s.instructor ? `<div class="sec-line">👤 ${s.instructor}</div>` : ''}
          ${s.dateNote ? `<div class="sec-date">🗓 指定日期:${s.dateNote}</div>` : ''}
        </div>
      `).join('')}
      ${course.note ? `<div class="note-box">${course.note}</div>` : ''}
      <div style="margin-top:8px;font-size:10px;color:#8a8f99">数据取自官方《MSc(Eng) Class Timetable 2026-27 Sem 1》,教师信息仅供参考且可能调整,以选课系统与开课院系公布为准</div>
    </div>` : `
    <div class="section-title">2026-27 开课安排</div>
    <div class="card">
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">${course.semester === '1' ? '官方第一学期课表未列出本课程的固定上课时段,请咨询开课院系。' : '第二学期排课待官方文件公布。'}</div>
      ${course.note ? `<div class="note-box">${course.note}</div>` : ''}
    </div>`}
    <div class="section-title">课程评价(${sum.count})</div>
    ${reviews.length ? `<div class="card">${reviews.map(r => `
      <div class="review">
        <div class="review-head">
          <span class="review-nick">${r.nickname}</span>
          <span>${stars.map(s => `<span class="star ${r.rating >= s ? 'star-on' : ''}">★</span>`).join('')}</span>
          <span class="review-date">${r.dateText}</span>
        </div>
        <div class="review-content">${r.content}</div>
      </div>
    `).join('')}</div>` : '<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">还没有评价,分享你的上课体验吧</div>'}
    <div class="section-title">写评价(仅保存在本机)</div>
    <div class="card">
      <div class="form-row">
        <span class="form-label">评分</span>
        <span id="rating-stars">${stars.map(s => `<span class="star big ${formRating >= s ? 'star-on' : ''}" data-v="${s}">★</span>`).join('')}</span>
      </div>
      <div class="form-row">
        <span class="form-label">昵称</span>
        <input class="form-input" id="review-nick" placeholder="匿名" value="${formNickname}" maxlength="12" />
      </div>
      <textarea class="form-textarea" id="review-content" placeholder="课程难度、作业量、给分、老师风格、对通勤党友好程度……" maxlength="500">${formContent}</textarea>
      <button class="btn-primary" id="submit-review">发布评价</button>
    </div>
    <div style="height:20px"></div>
    <div style="text-align:center;padding:8px"><span class="btn-plain" id="back-btn">← 返回课程列表</span></div>
    <div style="height:20px"></div>
  `;

  // Events
  document.getElementById('toggle-select').onclick = () => {
    if (store.isSelected(code)) unenrollCourse(code, () => render(code));
    else enrollCourse(code, () => render(code));
  };
  document.getElementById('rating-stars').onclick = (e) => {
    const v = e.target.dataset.v;
    if (v) { formRating = Number(v); render(code); }
  };
  document.getElementById('review-nick').oninput = (e) => { formNickname = e.target.value; };
  document.getElementById('review-content').oninput = (e) => { formContent = e.target.value; };
  document.getElementById('submit-review').onclick = () => {
    const content = formContent.trim();
    if (!content) { showToast('请填写评价内容'); return; }
    const saved = store.addReview(code, { rating: formRating, nickname: formNickname.trim(), content });
    if (!saved) { showToast('保存失败,请重试'); return; }
    showToast('已发布');
    formContent = '';
    render(code);
  };
  document.getElementById('back-btn').onclick = () => navigate('/courses');

  renderTabbar();
  const disc=document.createElement('div');
  disc.innerHTML='    <div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">\\n      Any errors found are your own fault (I\'m perfect, obviously).<br>오류? 니 탓이야\\n    </div>';
  container.appendChild(disc);
}

export default function courseDetailPage() {
  const { code } = getQuery();
  if (!code) { navigate('/courses'); return; }
  formRating = 5;
  formContent = '';
  render(code);
}
