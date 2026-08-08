// 页面浏览量统计:counterapi.dev v2 全站共享计数(公开计数器,匿名可用,无需密钥)
// 失败时自动回退 localStorage 本地计数,保证徽章始终可用
const WS = 'jonneywrens-team-4959';
const KEY_LS = 'hku-idt-guide-views';
// BASE 为原 counterapi v1 历史计数(2026-08-08 提供),仅作本地回退时的初始基数
const BASE = { home: 2189, courses: 3997, 'course-detail': 0, schedule: 2189, calendar: 442, commute: 327 };
const PAGES = ['home', 'courses', 'course-detail', 'schedule', 'calendar', 'commute'];

function localUp(page) {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(KEY_LS)) || {}; } catch (e) {}
  if (typeof data[page] !== 'number') data[page] = BASE[page] || 0;
  data[page] += 1;
  try { localStorage.setItem(KEY_LS, JSON.stringify(data)); } catch (e) {}
  return data[page];
}

export function reportView(path) {
  const el = document.getElementById('view-badge');
  if (!el) return;
  const page = (path || '/home').replace(/^\//, '');
  if (PAGES.indexOf(page) < 0) { el.textContent = ''; return; }
  el.textContent = '';
  fetch(`https://api.counterapi.dev/v2/${WS}/idt26-${page}/up?_=${Date.now()}`, { cache: 'no-store' })
    .then(r => r.json())
    .then(d => {
      if (d && d.data && typeof d.data.up_count === 'number') {
        el.textContent = `本页浏览 ${d.data.up_count} 次`;
      } else {
        el.textContent = `本页浏览 ${localUp(page)} 次`;
      }
    })
    .catch(() => { el.textContent = `本页浏览 ${localUp(page)} 次`; });
}
