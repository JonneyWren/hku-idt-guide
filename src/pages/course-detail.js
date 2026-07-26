import { getCourse, semesterText } from '../data/courses.js';
import { getSections, dayText } from '../data/timetable.js';
import { fmtDate } from '../utils/date.js';
import * as store from '../utils/store.js';
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

  // Update nav title
  document.querySelector('.nav-title').textContent = course.code;

  container.innerHTML = `
    <style>
      .detail-hero{background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:20px 16px;color:#fff}
      .hero-tag{display:inline-block;font-size:10px;background:rgba(255,255,255,0.2);border-radius:999px;padding:2px 10px;margin-right:6px;margin-bottom:6px}
      .hero-code{font-size:20px;font-weight:700;margin-top:8px}
      .hero-title-zh{font-size:16px;font-weight:600;margin-top:4px}
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
      .sec-row{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid #f0f1f4;font-size:12px}
      .sec-row:last-child{border-bottom:none}
      .sec-term{flex-shrink:0;font-size:10px;font-weight:600;border-radius:4px;padding:2px 6px}
      .sec-term.t1{background:#e8f3ef;color:#00573f}
      .sec-term.t2{background:#e9effa;color:#1a56b8}
      .sec-name{flex-shrink:0;font-weight:600;color:#14312a}
      .sec-time{color:#5b5f66}
      .sec-venue{margin-left:auto;flex-shrink:0;color:#8a8f99;font-size:11px}
    </style>
    <div class="detail-hero">
      <div>
        ${course.list === 'A' ? '<span class="hero-tag">List A 核心课</span>' : course.list === 'B' ? '<span class="hero-tag">List B 选修课</span>' : '<span class="hero-tag">毕业设计 Capstone</span>'}
        ${course.isNew2026 ? '<span class="hero-tag">26级新增</span>' : ''}
        ${course.movedToB2026 ? '<span class="hero-tag">26级转List B</span>' : ''}
      </div>
      <div class="hero-code">${course.code}</div>
      <div class="hero-title-zh">${course.titleZh}</div>
      <div class="hero-en">${course.title}</div>
      <div class="hero-chips">
        <span class="hero-chip">${course.credits} 学分</span>
        <span class="hero-chip">${semText}</span>
        ${course.cef ? '<span class="hero-chip">CEF 可报销</span>' : ''}
        ${sum.count > 0 ? `<span class="hero-chip">★ ${sum.avg}(${sum.count})</span>` : ''}
      </div>
      <div class="hero-btn ${selected ? 'selected' : ''}" id="toggle-select">${selected ? '已加入我的选课 ✓' : '+ 加入我的选课'}</div>
    </div>
    <div class="card">
      <div class="card-title">课程简介</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">${course.desc}</div>
      ${course.prereq ? `<div style="margin-top:8px;font-size:11px"><span style="color:#00573f;font-weight:600">先修要求</span> ${course.prereq}</div>` : ''}
      ${course.exclusive ? `<div style="margin-top:4px;font-size:11px"><span style="color:#c0392b;font-weight:600">互斥课程</span> ${course.exclusive}</div>` : ''}
    </div>
    ${sections.length ? `
    <div class="section-title">2026-27 开课安排</div>
    <div class="card">
      ${sections.map(s => `
        <div class="sec-row">
          <span class="sec-term ${s.term === 1 ? 't1' : 't2'}">Sem ${s.term}</span>
          <span class="sec-name">${s.section}</span>
          <span class="sec-time">${s.day ? `${dayText(s.day)} ${s.start}-${s.end}` : '时间地点待定'}</span>
          <span class="sec-venue">${s.venue || ''}${s.venue && s.instructor ? ' · ' : ''}${s.instructor || ''}</span>
        </div>
      `).join('')}
      <div style="margin-top:8px;font-size:10px;color:#8a8f99">来源于 2026-27 官方课表,部分班次含补课/调整,以选课系统实时信息为准</div>
    </div>` : ''}
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
    const added = store.toggleCourse(code);
    showToast(added ? '已加入选课' : '已移出选课');
    render(code);
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

  // Don't show tabbar on detail page, or show it - let's show for consistency
  renderTabbar();
}

export default function courseDetailPage() {
  const { code } = getQuery();
  if (!code) { navigate('/courses'); return; }
  formRating = 5;
  formContent = '';
  render(code);
}
