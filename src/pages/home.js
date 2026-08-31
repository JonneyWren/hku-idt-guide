import { TYPE_META, EVENTS } from '../data/calendar.js';
import { COURSES, DEGREE_RULES } from '../data/courses.js';
import { upcomingEvents, getSemesterWeek, todayStr, daysUntil } from '../utils/date.js';
import { navigate } from '../router.js';
import { renderTabbar } from '../components/tabbar.js';

// 首页说明卡折叠状态(默认收起)
const foldState = { credits: false, data: false };

export default function homePage() {
  const container = document.getElementById('page-container');
  const t = todayStr();
  const d = new Date();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const todayText = `${t} 星期${weekDays[d.getDay()]}`;
  const weekInfo = getSemesterWeek(t);
  const rules = DEGREE_RULES;

  const sem1 = COURSES.filter(c => c.semester === '1');
  const cnt = (list) => sem1.filter(c => c.list === list).length;
  const sem2Count = COURSES.filter(c => c.semester !== '1').length;

  const ups = upcomingEvents(3).map(ev => ({
    title: ev.title + (ev.tentative ? '(暂定)' : ''),
    color: TYPE_META[ev.type].color,
    days: daysUntil(ev.date),
    dateText: ev.endDate ? `${ev.date} 至 ${ev.endDate}` : ev.date
  }));

  const fallbackHero = weekInfo
    ? `${weekInfo.name} · 第 ${weekInfo.week} 周`
    : (ups.length ? `距「${ups[0].title}」还有 ${ups[0].days} 天` : '假期中,好好充电');

  // 选课结束倒计时:取校历中「硕士课程选课时间(Course Selection)」的结束日期
  const csEvent = EVENTS.find(ev => ev.type === 'adddrop' && ev.title.indexOf('Course Selection') >= 0);
  const csLeft = csEvent ? daysUntil(csEvent.endDate || csEvent.date) : null;
  const heroWeek = csLeft !== null && csLeft > 0
    ? `距「硕士课程选课时间(Course Selection)结束」还有 ${csLeft} 天`
    : csLeft === 0
      ? '今天是「硕士课程选课时间(Course Selection)」最后一天,抓紧选课'
      : fallbackHero;

  container.innerHTML = `
    <div class="hero" style="background:linear-gradient(135deg,#00573f,#0a7a56);border-radius:0 0 16px 16px;padding:24px 16px 20px;color:#fff">
      <div style="font-size:11px;opacity:0.85">MSc(Eng) Innovative Design & Technology · 26 级</div>
      <div style="font-size:20px;font-weight:700;margin-top:8px">${todayText}</div>
      <div style="font-size:13px;margin-top:4px;opacity:0.95">${heroWeek}</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;padding:8px 8px 0">
      <div class="entry-card" data-path="/calendar" style="background:#2e6f5c"><div class="ec-name">校历</div><div class="ec-sub">2026-27 学期节点</div></div>
      <div class="entry-card" data-path="/commute" style="background:#31597f"><div class="ec-name">港深通勤</div><div class="ec-sub">6 条路线攻略</div></div>
      <div class="entry-card" data-path="/courses" style="background:#6b5b95"><div class="ec-name">选课评价</div><div class="ec-sub">${sem1.length} 门官方课程</div></div>
      <div class="entry-card" data-path="/schedule" style="background:#8a6d3b"><div class="ec-name">每周课表</div><div class="ec-sub">同步手机日历</div></div>
    </div>
    <div class="card" style="padding:0;overflow:hidden">
      <div class="fold-bar" data-fold="credits">
        <div class="card-title" style="margin:0">毕业学分结构(26 级起统一 72 学分)</div>
        <span class="fold-arrow ${foldState.credits ? 'open' : ''}">›</span>
      </div>
      <div class="fold-body ${foldState.credits ? 'open' : ''}">
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
    </div>
    <div class="card" style="border-left:4px solid #e6a23c;padding:0;overflow:hidden">
      <div class="fold-bar" data-fold="data">
        <div class="card-title" style="margin:0">课程数据说明(2026-27 第一学期)</div>
        <span class="fold-arrow ${foldState.data ? 'open' : ''}">›</span>
      </div>
      <div class="fold-body ${foldState.data ? 'open' : ''}">
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">
        · 课程库与排课全部取自两份官方文件:MSc(Eng) & MSc 选课课程清单(第一学期共 ${sem1.length} 门)与全院第一学期课程时间表(30 页)<br>
        · 第一学期清单分五类:List A 学科核心课 ${cnt('A')} 门、List B 学科选修课 ${cnt('B')} 门、List C ${cnt('XC')} 门、List D ${cnt('XD')} 门、毕业论文 ${cnt('capstone')} 门<br>
        · 另保留 ${sem2Count} 门本专业课程(第二学期 / 全年),其 List 归属与排课待官方第二学期文件公布后再核对<br>
        · 总学分要求统一为 72 学分(课程 48 + 毕业论文 24)
      </div>
      <div style="margin-top:10px;text-align:center"><span class="btn-plain" id="go-courses-2">查看课程库</span></div>
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
    <div class="muted" style="text-align:center;padding:16px 20px 24px">数据来源:HKU 官方学年日历、MSc(Eng) 选课课程清单与第一学期课程时间表;暂定节点以官方最终公布为准</div>
  `;

  // Styles for entry cards
  const style = document.createElement('style');
  style.textContent = `.entry-card{width:calc(50% - 12px);margin:4px 6px;border-radius:12px;padding:14px 12px;color:#fff;cursor:pointer}.ec-name{font-size:16px;font-weight:600}.ec-sub{font-size:11px;opacity:0.9;margin-top:4px}.fold-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer}.fold-arrow{color:#8a8f99;font-size:14px;transition:transform .2s;transform:rotate(90deg)}.fold-arrow.open{transform:rotate(-90deg)}.fold-body{display:none;padding:0 16px 14px}.fold-body.open{display:block}`;
  container.prepend(style);

  // Events
  container.querySelectorAll('.fold-bar').forEach(el => {
    el.onclick = () => { foldState[el.dataset.fold] = !foldState[el.dataset.fold]; homePage(); };
  });
  container.querySelectorAll('.entry-card').forEach(el => {
    el.onclick = () => navigate(el.dataset.path);
  });
  ['go-courses', 'go-courses-2'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.onclick = () => navigate('/courses');
  });

  renderTabbar();
  const disc = document.createElement('div');
  disc.innerHTML = '<div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">感谢使用<br>Thank you for using</div>';
  container.appendChild(disc);
}
