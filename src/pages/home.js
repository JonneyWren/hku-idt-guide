import { TYPE_META } from '../data/calendar.js';
import { DEGREE_RULES } from '../data/courses.js';
import { upcomingEvents, getSemesterWeek, todayStr, daysUntil } from '../utils/date.js';
import { navigate } from '../router.js';
import { renderTabbar } from '../components/tabbar.js';

export default function homePage() {
  const container = document.getElementById('page-container');
  const t = todayStr();
  const d = new Date();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const todayText = `${t} 星期${weekDays[d.getDay()]}`;
  const weekInfo = getSemesterWeek(t);
  const rules = DEGREE_RULES;

  const ups = upcomingEvents(3).map(ev => ({
    title: ev.title + (ev.tentative ? '(暂定)' : ''),
    color: TYPE_META[ev.type].color,
    days: daysUntil(ev.date),
    dateText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date
  }));

  const heroWeek = weekInfo
    ? `${weekInfo.name} · 第 ${weekInfo.week} 周`
    : (ups.length ? `距「${ups[0].title}」还有 ${ups[0].days} 天` : '假期中,好好充电');

  container.innerHTML = `
    <div class="hero" style="background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:24px 16px 20px;color:#fff">
      <div style="font-size:11px;opacity:0.85">MSc(Eng) Innovative Design & Technology · 26 级</div>
      <div style="font-size:20px;font-weight:700;margin-top:8px">${todayText}</div>
      <div style="font-size:13px;margin-top:4px;opacity:0.95">${heroWeek}</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;padding:8px 8px 0">
      <div class="entry-card" data-path="/calendar" style="background:#2e6f5c"><div class="ec-name">校历</div><div class="ec-sub">2026-27 学期节点</div></div>
      <div class="entry-card" data-path="/commute" style="background:#31597f"><div class="ec-name">港深通勤</div><div class="ec-sub">6 条路线攻略</div></div>
      <div class="entry-card" data-path="/courses" style="background:#6b5b95"><div class="ec-name">选课评价</div><div class="ec-sub">List A/B 课程库</div></div>
      <div class="entry-card" data-path="/schedule" style="background:#8a6d3b"><div class="ec-name">每周课表</div><div class="ec-sub">同步手机日历</div></div>
    </div>
    <div class="card">
      <div class="card-title">毕业学分结构(26 级起统一 72 学分)</div>
      <div style="display:flex;align-items:baseline;margin-bottom:12px">
        <span style="font-size:28px;font-weight:700;color:#00573f;margin-right:8px">${rules.total}</span>
        <span style="font-size:12px;color:#6b7280">学分 = 课程 ${rules.courseCredits} + 毕业论文 ${rules.dissertation}</span>
      </div>
      <div style="display:flex;justify-content:space-between;background:#f4f8f6;border-radius:12px;padding:12px 8px">
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${rules.listAMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">List A 核心课</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${rules.disciplineMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">学科课(A+B)</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≤ ${rules.electiveMax}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">外学科选修</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">${rules.dissertation}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">毕业论文</div></div>
      </div>
      <div style="margin-top:12px;text-align:center"><span class="btn-plain" id="go-courses">去选课,自动算学分</span></div>
    </div>
    <div class="card" style="border-left:4px solid #e6a23c">
      <div class="card-title">26 级课程变更提示</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">
        · 新增 List A:IDAT7222 先进CADCAM与AI制造 / IDAT7223 人因设计与多媒体 / IDAT7224 深度学习工程技术 / IDAT7225 目标检测与分类AI基础<br>
        · IDAT7216 功能设计与知识产权法已从课程列表移除(2026-27 课表不再开设)<br>
        · MECH6034 / COMP7503 / COMP7506 自 26 级起转入 List B(待大学批准)<br>
        · 总学分要求统一为 72 学分(原为 72-84)
      </div>
    </div>
    <div class="section-title">近期关键节点</div>
    ${ups.map(ev => `
      <div class="card" style="display:flex;align-items:center;padding:14px 16px;margin-top:0">
        <div style="width:8px;height:8px;border-radius:50%;background:${ev.color};margin-right:12px;flex-shrink:0"></div>
        <div style="flex:1"><div style="font-size:13px;color:#1f2430">${ev.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${ev.dateText}</div></div>
        <div style="font-size:12px;color:#00573f;font-weight:600;flex-shrink:0">${ev.days > 0 ? ev.days + ' 天后' : ev.days === 0 ? '今天' : '进行中'}</div>
      </div>
    `).join('')}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">数据来源:HKU 官方学年日历与课程大纲;暂定节点以官方最终公布为准</div>
  `;

  // Styles for entry cards
  const style = document.createElement('style');
  style.textContent = `.entry-card{width:calc(50% - 12px);margin:4px 6px;border-radius:12px;padding:14px 12px;color:#fff;cursor:pointer}.ec-name{font-size:16px;font-weight:600}.ec-sub{font-size:11px;opacity:0.9;margin-top:4px}`;
  container.prepend(style);

  // Events
  container.querySelectorAll('.entry-card').forEach(el => {
    el.onclick = () => navigate(el.dataset.path);
  });
  const goBtn = document.getElementById('go-courses');
  if (goBtn) goBtn.onclick = () => navigate('/courses');

  renderTabbar();
}
